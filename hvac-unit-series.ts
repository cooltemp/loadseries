import axios from 'axios';
import { items } from './hvac-unit-series-data';
// Define API key and model ID
const API_KEY = 'bpk-2de362b30db74da9a7cf68880f2f6517';


// Ensure API Key & Model ID are set
if (!API_KEY) {
  console.error('❌ Missing API key or Model ID in .env file');
  process.exit(1);
}

// Function to send batch data to Builder.io
const importData = async () => {
  try {
    // Send all requests in parallel
    const requests = items.map(async (item) => {
      return axios.post(`https://builder.io/api/v1/write/hvac-unit-series`, {
        name: item.name,
        data: item.data,
        published: "published"
      }, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      });
    });

    const responses = await Promise.all(requests);

    console.log('✅ All data successfully imported!');
    responses.forEach((res, index) => {
      console.log(`✅ Item ${index + 1} imported:`, res.data);
    });
  } catch (error: any) {
    console.error('❌ Error importing data:', error.response?.data || error);
  }
};

// Run the import function
importData();
