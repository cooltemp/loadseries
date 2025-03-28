import axios from 'axios';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';


// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of URLs
const urls = [
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69082B/designer-ef25-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69085B/designer-ef35-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69088B/designer-ef42-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69091B/designer-ef50-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69083B/designer-ef25-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69086B/designer-ef35-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69089B/designer-ef42-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69092B/designer-ef50-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69081B/designer-ef25-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69084B/designer-ef35-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69087B/designer-ef42-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69090B/designer-ef50-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69082BW/designer-ef25-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69085BW/designer-ef35-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69088BW/designer-ef42-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69091BW/designer-ef50-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69083BW/designer-ef25-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69086BW/designer-ef35-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69089BW/designer-ef42-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69092BW/designer-ef50-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69081BW/designer-ef25-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69084BW/designer-ef35-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69087BW/designer-ef42-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69090BW/designer-ef50-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69106B/rapidheat-kj25-floor-console-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69107B/rapidheat-kj35-floor-console-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69108B/rapidheat-kj50-floor-console-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69110B/rapidheat-kj60-floor-console-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69106BW/rapidheat-kj25-floor-console-heat-pumpwith-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69107BW/rapidheat-kj35-floor-console-heat-pumpwith-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69108BW/rapidheat-kj50-floor-console-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69110BW/rapidheat-kj60-floor-console-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69094B/classic-ge25-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69095B/classic-ge35-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69096B/classic-ge42-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69097B/classic-ge50-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69098B/classic-ge60-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69099B/classic-ge71-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69100B/classic-ge80-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69094BW/classic-ge25-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69095BW/classic-ge35-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69096BW/classic-ge42-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69097BW/classic-ge50-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69098BW/classic-ge60-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69099BW/classic-ge71-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69100BW/classic-ge80-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69117B/hypercore-fh25-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69118B/hypercore-fh35-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69119B/hypercore-fh50-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69117BW/hypercore-fh25-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69118BW/hypercore-fh35-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69119BW/hypercore-fh50-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69109B/hypercore-kj50-floor-console-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69111B/hypercore-kj60-floor-console-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69109BW/hypercore-kj50-floor-console-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69111BW/hypercore-kj60-floor-console-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69078B/ducted-pead-71-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69079B/ducted-pead-100-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69080B/ducted-pead-125-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69101B/ducted-pead-140-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69078BW/ducted-pead-71-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69079BW/ducted-pead-100-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69080BW/ducted-pead-125-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69101BW/ducted-pead-140-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69122B/ducted-pea100-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69105B/ducted-pea125-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69102B/ducted-pea140-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69120B/ducted-pea-rp170-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69122BW/ducted-pea100-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69105BW/ducted-pea125-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69102BW/ducted-pea140-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69120BW/ducted-pea170-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69018B/concealed-sez35-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69020B/concealed-sez50-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69022B/concealed-sez60-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69024B/concealed-sez71-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69018BW/concealed-sez35-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69020BW/concealed-sez50-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69022BW/concealed-sez60-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69024BW/concealed-sez71-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69380/classic-par21-controller",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69642/deluxe-par32-controller",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69337A/interface-unit",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69558X/two-port-5-2kw-outdoor-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69559X/three-port-5-4kw-outdoor-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69562X/four-port-7-1kw-outdoor-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69550X/four-port-8-0kw-outdoor-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69551X/five-port-10kw-outdoor-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69552X/six-port-12kw-outdoor-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69548X/eight-port-14kw-outdoor-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69549X/eight-port-15-5kw-outdoor-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69114B/deluxe-fh25-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69115B/deluxe-fh35-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69116B/deluxe-fh50-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69114BW/deluxe-fh25-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69115BW/deluxe-fh35-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69116BW/deluxe-fh50-high-wall-heat-pump-with-wi-fi",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69011B/light-commercial-pka71-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69012B/light-commercial-pka100-high-wall-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/MAC-093SS-E/heat-pump-quick-clean-kit",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69033B/classic-slz25-cassette-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69035B/classic-slz50-cassette-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69042B/deluxe-pla60-cassette-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69045B/deluxe-pla71-casette-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69051B/deluxe-pla100-casette-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69054B/deluxe-pla125-casette-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69057B/deluxe-pla140-casette-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69061B/suspended-pca50-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69063B/suspended-pca60-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69065B/suspended-pca71-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69069B/suspended-pca100-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69071B/suspended-pca125-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69073B/suspended-pca140-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69075B/suspended-pca71-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69332A/mac821-centralised-remote-controller",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69454/deluxe-simple-wall-controller",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69158/simple-wall-controller",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/68971/at50-advanced-touch-controller",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/68965/ag150-centralised-and-web-controller",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/68972/gb-50ada-j-centralised-and-web-controller",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69244A/pac-zc40l-e-zone-controller",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69245A/pac-zc40h-e-zone-controller",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69242A/pac-zc80l-e-zone-controller",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69243A/pac-zc80h-e-zone-controller",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69246A/par-zc01m-e-lcd-touch-controller",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/PAC-SE41TS-E/remote-sensor",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69231A/360-i-see-sensor-module",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/68318G/elevating-panel",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69336A/drain-lift-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/68321A/air-outlet-shutter-plates",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/68960/air-outlet-guide",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/68933/input-output-adapter",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69234A/pulse-input-control-module",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69233A/analogue-input-control-module",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69232A/digital-input-and-output-control-module",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69341A/interface-unit",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/68966/power-pack",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69331A/ma-and-contact-terminal-interface",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/PAC-SF40RM-E/remote-operation-adapter",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69213A/3-pin-timer-adapter",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69038I/classic-ge22-high-wall",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69009I/designer-ef22-high-wall",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69037B/classic-slz25-cassette-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69041B/classic-slz50-cassette-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69044B/deluxe-pla60-cassette-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69047B/deluxe-pla71-casette-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69532/3-way-branch-box-for-power-multi-system",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69554/5-way-branch-box-for-power-multi-system",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69553/y-connector-for-power-multi-system",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69053B/deluxe-pla100-casette-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69010I/designer-ef22-high-wall",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69008I/designer-ef22-high-wall",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69056B/deluxe-pla125-casette-heat-pump",
    "https://www.mitsubishi-electric.co.nz/heatpump/i/69059B/deluxe-pla140-casette-heat-pump",
];

const outputDir = path.join(__dirname, 'downloaded_html'); // Directory to save HTML files

// Function to fetch and save HTML
async function downloadHtml(url) {
    try {
        console.log(`Fetching: ${url}`);
        const response = await axios.get(url);
        const htmlContent = response.data;

        // Generate filename from URL
        const fileName = url.split('/').slice(-2).join('-') + '.html';
        const filePath = path.join(outputDir, fileName);

        // Ensure directory exists
        await fs.ensureDir(outputDir);

        // Save HTML to file
        await fs.writeFile(filePath, htmlContent, 'utf8');
        console.log(`Saved: ${filePath}`);
    } catch (error) {
        console.error(`Failed to fetch ${url}:`, error.message);
    }
}

// Run script for all URLs
(async () => {
    for (const url of urls) {
        await downloadHtml(url);
    }
    console.log("✅ All pages downloaded!");
})();
