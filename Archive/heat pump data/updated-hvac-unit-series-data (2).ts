const MODEL_ID = '017645db0453454b8f5f6ff753822eb9';


interface Media {
    media: string;
  }
  
  interface WarrantyDocument {
    document: string;
  }
  
  interface WarrantyOption {
    transferable: boolean;
    type: string;
    documents: WarrantyDocument[];
    durationYears: number;
  }
  
  interface SmartFeatures {
    energyTracking: boolean;
    voiceControl: boolean;
    appControl: boolean;
    homeAutomationIntegration: boolean;
  }
  
  /* interface Size {
    heatingKw: number;
    sizeKw: number;
    name: {
      "@type": string;
      id: string;
      model: string;
    };
  } */
  
  interface KeyFeature {
    summary: string;
    heading: string;
  }
  
  interface HVACUnitSeriesData {
    seriesCode: string;
    unitConfig:
      | 'High Wall Split System'
      | 'Ducted'
      | 'Portable'
      | 'Cassette'
      | 'Multi-Split System'
      | 'Window Air Conditioner'
      | 'Floor Mounted'
      | 'Ceiling Mounted Ductless'
      | 'Ceiling Suspended';
    smartFeatures: SmartFeatures;
    brand: 'Mitsubishi';
    keyFeatures: KeyFeature[];
    productMedia: Media[];
    name: string /* Designer Series */;
    thumbnailImage: string;
    warrantyOptions: WarrantyOption[];
    description: string;
    /* relatedAccessories: string;*/
    /* servicePlans: string; */
    /* installationRequirements: string; */
    /*  installationOptions: string; */
    /* sizes: Size[]; */
  }
  
  interface HVACUnitSeries {
    name: string;
    modelId: string;
    data: HVACUnitSeriesData;
  }
  
  // Define multiple HVAC products
  export const items: HVACUnitSeries[] = [
    {
      name: "GS Series",
      modelId: MODEL_ID,
      data: {
        seriesCode: "GS",
        unitConfig: "High Wall Split System",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            heading: "Next Generation R32 Inverter Technology",
            summary: "Superior energy efficiency is achieved by incorporating a large, high-density heat exchanger, an advanced high-efficiency fan motor and a next-generation inverter compressor using the latest super efficient R32 refrigerant."
          },
          {
            heading: "Blue Fin Outdoor Coil Protection",
            summary: "Slows the corrosion process on the heat exchanger, caused by salt and sulphur in the air, making it ideal for coastal and high sulphur areas."
          },
          {
            heading: "Filtration for Cleaner Air",
            summary: "The standard air purifying filter traps dust, pollen and other airborne contaminants while the optional washable Anti-Allergy Enzyme Filter effectively breaks down harmful microbes such as bacteria, mould and dust mites."
          },
          {
            heading: "Econo Cool",
            summary: "Econo Cool maximises energy efficient cooling. The target room temperature is automatically switched to Swing Mode to create a cooling breeze effect."
          },
          {
            heading: "Vertical Swing Vane Airflow",
            summary: "The Vertical Swing Vane function enables airflow direction to be adjusted up, down or set to Swing Mode – ensuring every corner of the room is comfortable."
          },
          {
            heading: "12 Hour Programmable Controller",
            summary: "With an easy-to-read display and large buttons, the hand-held 12 Hour Programmable Controller is designed to give you simplified control of your Standard GS Series High Wall. Because the controller removes the complicated and focuses on the operating functions that really matter, whether you are tech savvy or not, you can rest assured comfort will always be at your fingertips."
          },
          {
            heading: "Optional Deluxe PAR Weekly Controller",
            summary: "This optional weekly timer allows you to program up to four time and temperature settings for each day of the week. The 7-Day Controller is the perfect way to maximise energy efficiency without compromising on comfort."
          },
          {
            heading: "Optional Wi-Fi Control Upgrade",
            summary: "Now you can pre-heat or cool a room no matter where you are. On the way home, running late, or in a different country, with optional Wi-Fi Control you'll always arrive home to total comfort."
          },
          {
            heading: "Optional Plasma Quad Connect for Healthier Air",
            summary: "Designed to integrate with your existing Heat Pump, this high-performance two-stage advanced air filtration module, cleans and minimises dust and other allergens for better indoor air quality, all year round."
          },
          {
            heading: "Optional Corrosion Protection Service",
            summary: "This treatment service is considered to be mid-range corrosion protection which is suitable for many environments and will help increase the life of the Standard GS Series as well as reduce the likelihood of unsightly premature corrosion in less-than-ideal environmental conditions."
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69334B/standard-gs-25-high-wall-heat-pump/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69334B/standard-gs-25-high-wall-heat-pump/image2.jpg"
          }
        ],
        name: "GS Series",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/69334B/standard-gs-25-high-wall-heat-pump/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/69334B/standard-gs-25-high-wall-heat-pump/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The GS Series Heat Pump Series is designed for efficiency and style."
      }
    },
    {
      name: "AP Mini Series",
      modelId: MODEL_ID,
      data: {
        seriesCode: "AP",
        unitConfig: "High Wall Split System",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            heading: "Night Mode",
            summary: "By selecting Night Mode, the brightness of the indicator light will be lowered, any beeping sounds are disabled, and the outdoor operating noise drops by a further 3dBA. So not only will you be able to sleep soundly, but so too will your neigbours."
          },
          {
            heading: "Horizontal Airflow",
            summary: "The EcoCore AP Series eliminates uncomfortable draughts with horizontal airflow in Cooling Mode, by first spreading airflow evenly across the ceiling."
          },
          {
            heading: "Econo Cool Function",
            summary: "The Econo Cool function maximises energy efficient cooling. The target room temperature is automatically switched to Swing Mode to create a cooling breeze effect."
          },
          {
            heading: "i-Save Mode",
            summary: "Saves temperature and fan speed combinations, including a set-back temperature of 10°C in Heating Mode when the room is unoccupied. This means that the system will use less energy to reach the desired temperature once the room is reoccupied."
          },
          {
            heading: "Blue Fin Condenser",
            summary: "The heat exchanger of the outdoor has been treated with Blue Fin anti-corrosion treatment slowing the corrosion process caused by salt and sulphur etc in the air especially in coastal and high sulphur areas."
          },
          {
            heading: "7-Day Programmable Controller",
            summary: "Features a built-in weekly timer, allowing you to program up to four time and temperature settings for each day of the week. The 7-Day Controller is the perfect way to maximise energy efficiency without compromising on comfort."
          },
          {
            heading: "Optional Wi-Fi Control",
            summary: "Now you can pre-heat or cool a room no matter where you are. On the way home, running late, or in a different country, with optional Wi-Fi Control you'll always arrive home to total comfort."
          },
          {
            heading: "Optional Plasma Quad Connect for Cleaner, Healthier Air",
            summary: "Designed to integrate with your existing AP Mini Heat Pump, this high performance two-stage advanced air filtration module, cleans and minimises dust and other allergens for better indoor air quality, all year round."
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69325B/classic-ap-20-high-wall-heat-pump/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69325B/classic-ap-20-high-wall-heat-pump/image2.jpg"
          }
        ],
        name: "AP Mini Series",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/69325B/classic-ap-20-high-wall-heat-pump/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/69325B/classic-ap-20-high-wall-heat-pump/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The AP Mini Series Heat Pump Series is designed for efficiency and style."
      }
    },
    {
      name: "AP Classic Series",
      modelId: MODEL_ID,
      data: {
        seriesCode: "AP",
        unitConfig: "High Wall Split System",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            heading: "New Zealand's Quietest Heat Pump!",
            summary: "Starting at an incredibly quiet 18 dBA on its lowest fan speed in heating mode, the AP25 indoor unit is New Zealand's quietest high wall heat pump ever. The AP 25 It is ideal where quietness matters most, in bedrooms even on the coldest of winter nights. Furthermore, the addition of Night Mode means the outdoor operating noise level drops by a further 3dBA – for the perfect night's sleep."
          },
          {
            heading: "Dual Barrier Coating",
            summary: "The patented and world's first Dual Barrier Coating from Mitsubishi Electric prevents dust and dirt from accumulating on the inner surface of the indoor unit; keeping your heat pump clean year-round. Keeping key internal components like the heat exchanger, fan and internal duct clean is important for both home comfort and efficiency. Not only does dust and dirt build-up typically create unpleasant odours, it also forces a heat pump to work harder, which can result in significantly impaired energy efficiency."
          },
          {
            heading: "Next Generation R32 EcoCore Technology",
            summary: "R32 is a refrigerant with just one-third the global warming potential of R410A and has zero ozone depletion potential. R32 offers increased energy efficiency, and is said to be the next generation of refrigerants"
          },
          {
            heading: "Washable Air Purifying Filter",
            summary: "The EcoCore AP Series is equipped with an Air Purifying Filter. This washable filter traps particles such as dust, pollen and other airborne contaminants, generating stable antibacterial and deodorising effects. The size of the three-dimensional surface has been increased from previous models, enlarging the filter capture area. These features give the Air Purifying Filter better dust collection performance than conventional filters."
          },
          {
            heading: "Horizontal Airflow",
            summary: "The EcoCore AP Series eliminates uncomfortable draughts with horizontal airflow in cooling mode, by first spreading airflow evenly across the ceiling."
          },
          {
            heading: "Blue Fin Condenser",
            summary: "The heat exchanger of the outdoor has been treated with Blue Fin anti-corrosion treatment slowing the corrosion process caused by salt and sulphur in the air especially in coastal and high sulphur areas."
          },
          {
            heading: "Night Mode",
            summary: "For the perfect night's sleep; dimming the operation indicator light, disabling any beeping from the unit, and lowering the outdoor operating noise level by 3dBA."
          },
          {
            heading: "Optional Wi-Fi Control Upgrade",
            summary: "With the addition of award-winning Mitsubishi Electric Wi-Fi Control, you can control and monitor your heat pump from absolutely anywhere via your smartphone, tablet or online account."
          },
          {
            heading: "Optional Plasma Quad Connect for Healthier Air",
            summary: "Designed to integrate with your existing Heat Pump, this high-performance two-stage advanced air filtration module, cleans and minimises dust and other allergens for better indoor air quality, all year round."
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69407B/classic-ap-25-high-wall-heat-pump/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69407B/classic-ap-25-high-wall-heat-pump/image2.jpg"
          }
        ],
        name: "AP Classic Series",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/69407B/classic-ap-25-high-wall-heat-pump/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/69407B/classic-ap-25-high-wall-heat-pump/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The AP Classic Series Heat Pump Series is designed for efficiency and style."
      }
    },
    {
      name: "AP Plus Series",
      modelId: MODEL_ID,
      data: {
        seriesCode: "AP",
        unitConfig: "High Wall Split System",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            heading: "New Zealand's Quietest Heat Pump!",
            summary: "Starting at an incredibly quiet 18dBA* on its lowest fan speed, the AP25 indoor unit is New Zealand's quietest high wall heat pump ever. It is ideal where quietness matters most, in bedrooms even on the coldest of winter nights. *MSZ-AP25 indoor sound level on lowest fan setting in Heating Mode"
          },
          {
            heading: "The Secret to Quietness",
            summary: "By making the heat exchanger 32% thinner, and designing the fan coil to be 22% larger, in comparison to previous models*, pressure loss across the heat exchanger is minimised and air can now be moved across a larger fan surface. Add to this a new aerodynamically designed fan coil, and a new level of quietness has been achieved! *Compared to MSZ-GL Series."
          },
          {
            heading: "Smart Monitoring for Efficient Heating and Cooling All Year Round",
            summary: "Did you know a 1°C change in temperature can reduce energy use by up to 10%? Mitsubishi Electric Wi-Fi Heat Pump Energy Monitoring truly puts the power in your hands and gives you and your family the visibility to make more energy efficient choices when heating and cooling your home. Using your smartphone, tablet or desktop, you can see at a glance on a monthly, daily and even hourly basis what the indicative energy consumption (kWh) and the indicative energy costs of running your heat pump looks like in dollars ($)."
          },
          {
            heading: "Wi-Fi Control Built-in! Never Return to a Cold Home Again",
            summary: "With built-in Wi-Fi Control you can pre-heat or cool a room no matter where you are. On the way home, running late, coming home early, or even when you're in a different country, with Wi-Fi Control you'll always arrive home to total comfort."
          },
          {
            heading: "Dual Barrier Coating Maximises Efficient Performance",
            summary: "The patented and world's first Dual Barrier Coating from Mitsubishi Electric prevents dust and dirt from accumulating on the inner surface of the indoor unit; keeping your heat pump clean all year-round. Keeping key internal components like the heat exchanger, fan and internal duct clean is important for both home comfort and efficiency. Not only does dust and dirt build-up typically create unpleasant odours, it also forces a heat pump to work harder, which can result in significantly impaired energy efficiency."
          },
          {
            heading: "Next Generation R32 EcoCore Technology",
            summary: "Superior energy efficiency is achieved by incorporating a large, high-density heat exchanger, an advanced high-efficiency fan motor and a next generation compressor using the latest in super efficient R32 refrigerant."
          },
          {
            heading: "Washable Air Purifying Filter",
            summary: "The EcoCore AP Series is equipped with an Air Purifying Filter. This washable filter traps particles such as dust, pollen and other airborne contaminants, generating stable antibacterial and deodorising effects. The size of the three-dimensional surface has been increased from previous models, enlarging the filter capture area. These features give the Air Purifying Filter better dust collection performance than conventional filters."
          },
          {
            heading: "Wide and Long Airflow",
            summary: "The Wide Airflow Mode enables airflow direction to be adjusted from left to right, ideal for open plan environments – ensuring every corner of the room is comfortable. The Long Airflow Mode extends airflow distance. These modes are simply activated at the touch of a button on your remote controller. *AP60/71/80 models only."
          },
          {
            heading: "Night Mode",
            summary: "By selecting Night Mode, the brightness of the indicator light will be lowered, any beeping sounds are disabled, and the outdoor operating noise drops by a further 3dBA. So not only will you be able to sleep soundly, but so too will your neigbours."
          },
          {
            heading: "Horizontal Airflow",
            summary: "The EcoCore AP Series eliminates uncomfortable draughts with horizontal airflow in Cooling Mode, by first spreading airflow evenly across the ceiling."
          },
          {
            heading: "Econo Cool Function",
            summary: "The Econo Cool function maximises energy efficient cooling. The target room temperature is automatically switched to Swing Mode to create a cooling breeze effect."
          },
          {
            heading: "i-Save Mode",
            summary: "Saves temperature and fan speed combinations, including a set-back temperature of 10°C in Heating Mode when the room is unoccupied. This means that the system will use less energy to reach the desired temperature once the room is reoccupied."
          },
          {
            heading: "Blue Fin Condenser",
            summary: "The heat exchanger of the outdoor has been treated with Blue Fin anti-corrosion treatment slowing the corrosion process caused by salt and sulphur etc in the air especially in coastal and high sulphur areas."
          },
          {
            heading: "7-Day Programmable Controller",
            summary: "Features a built-in weekly timer, allowing you to program up to four time and temperature settings for each day of the week. The 7-Day Controller is the perfect way to maximise energy efficiency without compromising on comfort."
          },
          {
            heading: "Optional Plasma Quad Connect for Cleaner, Healthier Air",
            summary: "Designed to integrate with your existing AP Mini Heat Pump, this high performance two-stage advanced air filtration module, cleans and minimises dust and other allergens for better indoor air quality, all year round."
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69400B/ecocore-ap-25-high-wall-heat-pump/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69400B/ecocore-ap-25-high-wall-heat-pump/image2.jpg"
          }
        ],
        name: "AP Plus Series",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/69400B/ecocore-ap-25-high-wall-heat-pump/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/69400B/ecocore-ap-25-high-wall-heat-pump/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The AP Plus Series Heat Pump Series is designed for efficiency and style."
      }
    },
    {
      name: "EF Series",
      modelId: MODEL_ID,
      data: {
        seriesCode: "EF",
        unitConfig: "High Wall Split System",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            heading: "Smart Energy Monitoring",
            summary: "Mitsubishi Electric Wi-Fi Heat Pump Energy Monitoring truly puts the power in your hands and gives you the visibility to make more energy efficient choices when heating and cooling your home. Using your smartphone, tablet or desktop, you can see at a glance on a monthly, daily and even hourly basis what the indicative energy consumption (kWh) and the indicative energy costs of running your heat pump looks like in dollars ($)."
          },
          {
            heading: "Built-In Wi-Fi Control",
            summary: "For the ultimate in aesthetics and heat pump control no matter where you are, this unit comes equipped with a Wi-Fi Interface inside a hidden pocket in the indoor unit."
          },
          {
            heading: "Next Generation R32 EcoCore Technology",
            summary: "R32 is a refrigerant with just one-third the global warming potential of R410A and has zero ozone depletion potential. R32 offers increased energy efficiency, and is said to be the next generation of refrigerants"
          },
          {
            heading: "Super Quiet Operation",
            summary: "With an advanced \"Silent Mode\" fan setting, the range starts from a super quiet 19dBA*. Allowing you to enjoy quiet, yet powerful performance. *EF 25 indoor on lowest fan speed in cooling mode."
          },
          {
            heading: "Blue Fin Condenser",
            summary: "The heat exchanger of the outdoor has been treated with Blue Fin anti-corrosion treatment slowing the corrosion process caused by salt and sulphur in the air especially in coastal and high sulphur areas."
          },
          {
            heading: "Nano Platinum Filter",
            summary: "The extra-large, washable 3D filter surface incorporates nanometre-sized platinum-ceramic particles designed to effectively collect fine dust particles, deodorise the air and eliminate bacteria at the same time. This level of advanced filtration is better at the collection of dust in comparison to conventional filters."
          },
          {
            heading: "Reddot Design Award",
            summary: "The Designer Series with its distinctive contemporary, slim-line profile has been awarded the Prestigious Reddot Design Award 2015 in recognition for outstanding design quality. The international jury only confers this sought-after seal of quality to products that set themselves apart significantly from comparable products thanks to their excellent design."
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69500B/designer-ef25-high-wall-pure-white/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69500B/designer-ef25-high-wall-pure-white/image2.jpg"
          }
        ],
        name: "EF Series",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/69500B/designer-ef25-high-wall-pure-white/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/69500B/designer-ef25-high-wall-pure-white/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The EF Series Heat Pump Series is designed for efficiency and style."
      }
    },
    {
      name: "AS Series",
      modelId: MODEL_ID,
      data: {
        seriesCode: "AS",
        unitConfig: "High Wall Split System",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            heading: "Next Generation R32 Technology",
            summary: "R32 is a refrigerant with just one-third the global warming potential of R410A and has zero ozone depletion potential. R32 offers increased energy efficiency, and is said to be the next generation of refrigerants."
          },
          {
            heading: "Powerful Mode",
            summary: "The one-touch Powerful Mode automatically adjusts the fan speed and temperature, guaranteeing full power operation within 15 minutes for faster heating or cooling. After 15 minutes, the unit automatically returns to its previous operation settings."
          },
          {
            heading: "Wide & Long Airflow",
            summary: "The heat exchanger of the outdoor has been treated with Blue Fin anti-corrosion treatment slowing the corrosion process caused by salt and sulphur in the air especially in coastal and high sulphur areas."
          },
          {
            heading: "Blue Fin Condensor",
            summary: "The heat exchanger of the outdoor has been treated with Blue Fin anti-corrosion treatment slowing the corrosion process caused by salt and sulphur in the air especially in coastal and high sulphur areas."
          },
          {
            heading: "Two Stage Advanced Filtration",
            summary: "The AS90 Series is equipped with a standard air filter and an Anti-Allergy Enzyme Filter. This washable air cleaning filter traps harmful particles such as dust, pollen and other airborne contaminants that can cause allergic reactions."
          },
          {
            heading: "i-save Mode",
            summary: "Saves temperature and fan speed combinations, including a set-back temperature of 10°C in Heating Mode when the room is unoccupied. This means the system will use less energy to reach the desired temperature once the room is reoccupied."
          },
          {
            heading: "Econo Cool",
            summary: "The Econo Cool function maximises energy efficient cooling. The target room temperature is automatically increased by 2°C and the airflow is automatically switched to Swing Mode to create a cooling breeze effect."
          },
          {
            heading: "Night Mode",
            summary: "For the perfect night's sleep; dimming the operation indicator light, disabling any beeping from the unit, and lowering the outdoor operating noise level by 3dBA."
          },
          {
            heading: "7-Day Programmable Hand Held Controller",
            summary: "Advanced infrared controller allowing the programming of up to four settings (per 24 hour period) including start/stop operation and temperature settings over a 7 day period. This eliminates the need to reset the timer daily. You can program your heat pump to start up before you wake or return home and regulate your energy usage without compromising on comfort."
          },
          {
            heading: "Optional Wi-Fi Control Upgrade",
            summary: "With the addition of award-winning Mitsubishi Electric Wi-Fi Control, you can control and monitor your heat pump from absolutely anywhere via your smartphone, tablet or online account."
          },
          {
            heading: "Optional Plasma Quad Connect for Healthier Air",
            summary: "Designed to integrate with your existing Heat Pump, this high-performance two-stage advanced air filtration module, cleans and minimises dust and other allergens for better indoor air quality, all year round."
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69333B/large-capacity-as90-high-wall-ecocore-heat-pump/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69333B/large-capacity-as90-high-wall-ecocore-heat-pump/image2.jpg"
          }
        ],
        name: "AS Series",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/69333B/large-capacity-as90-high-wall-ecocore-heat-pump/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/69333B/large-capacity-as90-high-wall-ecocore-heat-pump/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The AS Series Heat Pump Series is designed for efficiency and style."
      }
    },
    {
      name: "PKA Series",
      modelId: MODEL_ID,
      data: {
        seriesCode: "PKA",
        unitConfig: "High Wall Split System",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            summary: "This is a placeholder summary for the key feature.",
            heading: "Key Feature Heading"
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69227B/light-commercial-pka71-high-wall-heat-pump/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69227B/light-commercial-pka71-high-wall-heat-pump/image2.jpg"
          }
        ],
        name: "PKA Series",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/69227B/light-commercial-pka71-high-wall-heat-pump/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/69227B/light-commercial-pka71-high-wall-heat-pump/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The PKA Series Heat Pump Series is designed for efficiency and style."
      }
    },
    {
      name: "RapidHeat Series",
      modelId: MODEL_ID,
      data: {
        seriesCode: "RapidHeat",
        unitConfig: "Floor Mounted",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            heading: "New Zealand's Quietest Heat Pump!",
            summary: "Starting at an incredibly quiet 18dBA on its lowest fan speed in Heating Mode, the KW25/35/42 indoor unit is New Zealand's quietest floor console heat pump ever."
          },
          {
            heading: "Rapid Heating",
            summary: "The Mitsubishi Electric RapidHeat Floor Console Series ensures the perfect room temperature is reached faster with new rapid heating technology. Advanced sensors coupled with Intuitive Control Logic mean optimal running temperatures are reached in the shortest amount of time possible with maximum energy efficiency. Automatically activated at start-up in low temperature conditions and when two way air flow is selected, warm air is blown in a downward direction first before the air is returned back into the indoor unit, where it is reheated a second time before it is released again. As a result, a room can now heat up to twice as fast in comparison to our previous model meaning our floor consoles are more energy efficient than ever."
          },
          {
            heading: "Built in Wi-Fi Control",
            summary: "For the ultimate in aesthetics and heat pump control no matter where you are, this unit comes equipped with a Wi-Fi Interface inside a hidden pocket in the indoor unit."
          },
          {
            heading: "Sleek, Sophisticated Design",
            summary: "Mitsubishi Electric RapidHeat Floor Consoles features clean, sharp lines creating streamlined, modern floor mounted heating. The removable base allows the RapidHeat Series to be recessed into your wall. This dramatically reduces the depth of the indoor unit from 215mm to 145mm - a decrease of 33%! The perfect solution for unobtrusive floor mounted heating or for new buildings and renovation projects."
          },
          {
            heading: "Multi Vane Flow - Even Heat Distribution",
            summary: "The RapidHeat Series allows for complete customisation for ultimate comfort. The Multi Vane Flow function blows warm air in both an upward and downward direction, providing even and effective heating whilst also eliminating draughts. This is achieved via three uniquely shaped vanes that are designed for better airflow control and the freedom to customise them to your preference."
          },
          {
            heading: "High Energy Efficiency",
            summary: "RapidHeat Floor Consoles (KW25/35/42/50/60) utilise advanced sensors with Intuitive Control Logic Technology to offer unparalleled low temperature heating performance in the shortest amount of time, whilst maintaining maximum energy efficiency. They also feature Econo Cool which switches airflow to Swing Mode; ensuring you use less energy to provide an overall cooling effect during the summer months."
          },
          {
            heading: "R32 Refrigerant",
            summary: "R32 is a refrigerant with just one-third the global warming potential of R410A and has zero ozone depletion potential. R32 offers increased energy efficiency, and is said to be the next generation of refrigerants"
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69390B/rapidheat-kw25-floor-console-with-built-in-wi-fi-control/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69390B/rapidheat-kw25-floor-console-with-built-in-wi-fi-control/image2.jpg"
          }
        ],
        name: "RapidHeat Series",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/69390B/rapidheat-kw25-floor-console-with-built-in-wi-fi-control/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/69390B/rapidheat-kw25-floor-console-with-built-in-wi-fi-control/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The RapidHeat Series Heat Pump Series is designed for efficiency and style."
      }
    },
    {
      name: "RapidHeat Hyper Core",
      modelId: MODEL_ID,
      data: {
        seriesCode: "RapidHeat",
        unitConfig: "Floor Mounted",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            heading: "HyperCore Technology",
            summary: "While ordinary heat pumps produce less heat below 7°C, Mitsubishi Electric HyperCore® Technology guarantees its fully rated capacity right down to -15°C so you get all the heat you paid for. If you experience cold temperatures and/or high humidity during the winter months then a RapidHeat HyperCore Floor Console is perfect for you. HyperCore ensures superior heating performance, regardless of outdoor temperatures."
          },
          {
            heading: "Rapid Heating Technology",
            summary: "Advanced sensors coupled with Intuitive Control Logic mean optimal running temperatures are reached in the shortest amount of time possible with maximum energy efficiency. Automatically activated at start-up in low temperature conditions when Two-Way Airflow is selected, warm air is blown in a downward direction first before the air is returned back into the indoor unit where it is reheated a second time. As a result, a room can now be heated up to twice as fast compared to our previous model."
          },
          {
            heading: "Sleek, Sophisticated Design",
            summary: "Mitsubishi Electric RapidHeat Floor Consoles feature a contemporary design that can be recessed into your wall to dramatically reduce the depth of the indoor unit from 215mm to 145mm – a decrease of 33%. With the addition of a removable base, it is the perfect solution offering compact, unobtrusive heating for new buildings, renovation projects and fireplace replacements."
          },
          {
            heading: "Multi Vane Flow – Even Heat Distribution",
            summary: "The Multi Vane Flow function blows warm air in both an upward and downward direction providing fast, even and effective heating whilst also reducing draughts. This is achieved via three uniquely shaped vanes that are designed for better airflow control and also provide the freedom to be customised to your preference."
          },
          {
            heading: "Next Generation R32 EcoCore Technology",
            summary: "R32 is a refrigerant with just one-third the global warming potential of R410A and has zero ozone depletion potential. R32 offers increased energy efficiency, and is said to be the next generation of refrigerants"
          },
          {
            heading: "High Energy Efficiency",
            summary: "The RapidHeat Floor Console Range are some of the most energy efficient heat pumps available in New Zealand, making these models among the most economical in terms of potential yearly running costs in their capacity class. The RapidHeat Floor Consoles also feature Econo Cool which switches airflow to Swing Mode, ensuring you use less energy to provide an overall cooling effect during the summer months."
          },
          {
            heading: "Cleaner, Healthier Air",
            summary: "RapidHeat Floor Consoles make use of two types of filtration to provide cleaner, healthier air. The Air Purifying Filter generates stable antibacterial and deodorising effects, whilst the Electrostatic Anti-Allergy Enzyme Filter uses enzyme catalysts to filter allergens and remove harmful bacteria."
          },
          {
            heading: "7-Day Programmable Controller",
            summary: "The RapidHeat Floor Consoles feature a built-in weekly timer, allowing you to program up to four time and temperature settings for each day of the week. You can now return to comfort without having to manually adjust the temperature. Perfect for anyone with a busy lifestyle, the 7-Day Controller is a great way to regulate your energy usage without compromising on comfort."
          },
          {
            heading: "Built-in Wi-Fi Control",
            summary: "With Mitsubishi Electric Wi-Fi Heat Pump Control you can pre-heat or cool a room no matter where you are. On the way home, running late, coming home early, or even when you're in a different country, with Wi-Fi Control you'll always arrive home to total comfort regardless of what New Zealand's unpredictable weather is doing outside!"
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69394B/hypercore-kw50-floor-console-with-built-in-wi-fi-control/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69394B/hypercore-kw50-floor-console-with-built-in-wi-fi-control/image2.jpg"
          }
        ],
        name: "RapidHeat Hyper Core",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/69394B/hypercore-kw50-floor-console-with-built-in-wi-fi-control/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/69394B/hypercore-kw50-floor-console-with-built-in-wi-fi-control/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The RapidHeat Hyper Core Heat Pump Series is designed for efficiency and style."
      }
    },
    {
      name: "Classic Cassette Series",
      modelId: MODEL_ID,
      data: {
        seriesCode: "Classic",
        unitConfig: "Cassette",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            heading: "3D i-See Sensor",
            summary: "The i-see Sensor detects the floor temperature and how many people are present in the room; automatically switching to the optimal operating mode. With eight sensors that rotate a full 360° in 3-minute intervals, the i-see Sensor detects people's positions within the room to provide direct or indirect airflow, as preferred."
          },
          {
            heading: "Next-Generation R32 Technology",
            summary: "R32 is a refrigerant with just one-third the global warming potential of R410A and has zero ozone depletion potential. R32 offers increased energy efficiency, and is said to be the next generation of refrigerants."
          },
          {
            heading: "Compact Design",
            summary: "Our ceiling cassettes are New Zealand's favourite. With the lightweight unit sitting in your ceiling space, only the grille is visible providing easy, discreet installation into your home or office."
          },
          {
            heading: "Horizontal Airflow",
            summary: "Advanced horizontal airflow eliminates uncomfortable draughts and improves airflow control. Six different discharge angles provide a lateral airflow advantage; ensuring air is evenly distributed across your entire room."
          },
          {
            heading: "Quiet Operation",
            summary: "Starting from a hushed 25dBA, our Classic Cassette Series is the perfect solution for quiet comfort; allowing you to feel the warmth, not hear it."
          },
          {
            heading: "Air Cleaning Filtration",
            summary: "A built in filter removes dust and contaminants keeping air purified and deodorised. The washable, long-life filter can be used for up to 2,500 hours with simple maintenance."
          },
          {
            heading: "Deluxe PAR Weekly Controller",
            summary: "This attractive full dot liquid crystal display incorporates a large backlit screen and simple menus for easy operation. You can set up to 8 temperature and airflow patterns per day for seven days, allowing you to reduce your energy consumption when needed, saving you both time and money. Perfect for the busy home, workplace or retail store."
          },
          {
            heading: "Optional Wi-Fi Control Upgrade",
            summary: "With the addition of award-winning Mitsubishi Electric Wi-Fi Control, you can control and monitor your heat pump from absolutely anywhere via your smartphone, tablet or online account."
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69263B/classic-slz25-cassette-heat-pump/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69263B/classic-slz25-cassette-heat-pump/image2.jpg"
          }
        ],
        name: "Classic Cassette Series",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/69263B/classic-slz25-cassette-heat-pump/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/69263B/classic-slz25-cassette-heat-pump/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The Classic Cassette Series Heat Pump Series is designed for efficiency and style."
      }
    },
    {
      name: "4-Way Large Cassette",
      modelId: MODEL_ID,
      data: {
        seriesCode: "4-Way",
        unitConfig: "High Wall Split System",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            heading: "3D i-See Sensor",
            summary: "The 3D i-See Sensor works to detect the floor temperature and how many people are present in the room automatically switching to the optimal operating mode. With a total of eight sensors which rotate a full 360º in 3 minute intervals, it is able to detect people's position in the room to provide direct or indirect airflow as preferred. *The PLA-M Series comes standard with 3D i-See Sensor Technology and optional for PLA-RP Series."
          },
          {
            heading: "Next Generation R32 Technology",
            summary: "The large capacity PLA 4-Way Cassette range features the latest in super-efficient and more environmentally friendly R32 refrigerant. With a global warming potential that is 30% lower compared to older refrigerants such as R410A, next-generation R32 refrigerant has a much lower environmental impact. Furthermore, zero ozone-depleting R32 is easier to reuse and recycle."
          },
          {
            heading: "Benefits of R32",
            summary: "66% lower GWP of 675, More environmentally friendly, 20% less refrigerant volume requirement, Overall higher systems efficiency, Easy to handle, reuse and recycle. *When PLA-M Series is connected to PUZ-ZM71 to 140VKA R32 Outdoor Units"
          },
          {
            heading: "Unique Pipe Reuse Technology",
            summary: "Now incorporated into the R32 Mr Slim P-Series. Replacing an R22 or an R410A system with an R32 equivalent system while retaining the existing pipe work can be easily achieved while keeping the product warranty intact. HAB oil and scroll compressor technology improvements allows this unique feature to apply to this product."
          },
          {
            heading: "Horizontal Airflow",
            summary: "The Horizontal Airflow function prevents both cold draughts and/or heating airflow from striking occupants directly, thereby keeping people from becoming over-chilled/over-heated."
          },
          {
            heading: "Wave Airflow Mode for Heating",
            summary: "Advanced control of vanes, called Wave Airflow, provides even greater heat distribution by periodically moving vanes up and down to provide a consistent temperature throughout the room."
          },
          {
            heading: "Wide Airflow",
            summary: "PLA Series Cassettes utilise wide-angle outlets to distribute airflow to all corners of the room, ensuring the room is cooled/heated in an even manner. Both horizontal airflow and fan speed have been reduced by 20% compared to conventional models, contributing to increased comfort for occupants."
          },
          {
            heading: "Optional Automatic Grille Lowering Function",
            summary: "An Automatic Grille Lowering function capable of stopping at eight different heights is available to simplify filter maintenance. The packaged elevating (up/down) controller in the grille can be used when outdoor unit is either PUZ Series or SUZ Series. Wired Remote Controller (PAR) has Automatic Grille Lowering function. This function is only available when indoor unit connects with PUZ Series."
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69233B/pla-m71-suz-wired-4-way-large-cassette/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69233B/pla-m71-suz-wired-4-way-large-cassette/image2.jpg"
          }
        ],
        name: "4-Way Large Cassette",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/69233B/pla-m71-suz-wired-4-way-large-cassette/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/69233B/pla-m71-suz-wired-4-way-large-cassette/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The 4-Way Large Cassette Heat Pump Series is designed for efficiency and style."
      }
    },
    {
      name: "SlimFit Series",
      modelId: MODEL_ID,
      data: {
        seriesCode: "SlimFit",
        unitConfig: "Cassette",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            heading: "Auto Vane Control",
            summary: "Outlet vanes can be moved left and right when in Econo Cool mode, and up and down, using the remote controller; elimating draughts and enhancing room comfort."
          },
          {
            heading: "One-way Airflow",
            summary: "Ideal for rooms where one-way air distribution is required, and a solution for spaces where lighting fixtures are installed in the centre of a room, one-way airflow provides a comofrtable environment with no draughts."
          },
          {
            heading: "Compact Design",
            summary: "Our ceiling cassettes are New Zealand's favourite. With the lightweight unit sitting in your ceiling space, only the grille is visible providing easy, discreet installation into your home or office."
          },
          {
            heading: "Horizontal Airflow",
            summary: "Advanced horizontal airflow eliminates uncomfortable draughts and improves airflow control. Six different discharge angles provide a lateral airflow advantage; ensuring air is evenly distributed across your entire room."
          },
          {
            heading: "Quiet Operation",
            summary: "Starting from a hushed 26dBA, our MLZ Cassette Series is the perfect solution for quiet comfort; allowing you to feel the warmth, not hear it."
          },
          {
            heading: "Air Purifying Filter",
            summary: "This built-in filter removes dust and other particles, keeping the air clean all the time. Maintenance is as simple as vacuuming."
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/65300B/slimfit-mlz-25-cassette-heat-pump/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/65300B/slimfit-mlz-25-cassette-heat-pump/image2.jpg"
          }
        ],
        name: "SlimFit Series",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/65300B/slimfit-mlz-25-cassette-heat-pump/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/65300B/slimfit-mlz-25-cassette-heat-pump/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The SlimFit Series Heat Pump Series is designed for efficiency and style."
      }
    },
    {
      name: "Ceiling Suspended Series",
      modelId: MODEL_ID,
      data: {
        seriesCode: "Ceiling",
        unitConfig: "Ceiling Suspended",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            heading: "Stylish Design",
            summary: "Sharp, clean lines make this unit blend in more easily with your ceiling, providing low-profile heating or cooling."
          },
          {
            heading: "Next-Generation R32 Technology",
            summary: "R32 is a refrigerant with just one-third the global warming potential of R410A and has zero ozone depletion potential. R32 offers increased energy efficiency, and is said to be the next generation of refrigerants."
          },
          {
            heading: "Automatic Air Speed Adjustment",
            summary: "In addition to the conventional 4-speed setting, our suspended units are now equipped with an automatic air-speed adjustment mode. This setting automatically adjusts the air speed to match the room environment. At the start of heating or cooling operation, the airflow is set to high-speed to quickly heat or cool the room. When the room temperature reaches your desired setting, the airflow speed is decreased automatically for stable comfortable heating or cooling operation."
          },
          {
            heading: "Fresh Air Intake Option",
            summary: "Units are equipped with an opening that enables the induction of fresh outside air."
          },
          {
            heading: "Deluxe PAR Weekly Controller",
            summary: "This attractive full dot liquid crystal display incorporates a large backlit screen and simple menus for easy operation. You can set up to 8 temperature and airflow patterns per day for seven days, allowing you to reduce your energy consumption when needed, saving you both time and money. Perfect for the busy home, workplace or retail store."
          },
          {
            heading: "High and Low Ceiling Modes",
            summary: "Units are equipped with high and low ceiling operation modes that make it possible to switch the airflow volume to match room height. The ability to choose the optimum airflow volume makes it possible to optimise the breezy sensation felt throughout the room."
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69276B/suspended-pca50-heat-pump/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69276B/suspended-pca50-heat-pump/image2.jpg"
          }
        ],
        name: "Ceiling Suspended Series",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/69276B/suspended-pca50-heat-pump/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/69276B/suspended-pca50-heat-pump/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The Ceiling Suspended Series Heat Pump Series is designed for efficiency and style."
      }
    },
    {
      name: "Kitchen Suspended Series",
      modelId: MODEL_ID,
      data: {
        seriesCode: "Kitchen",
        unitConfig: "Ceiling Suspended",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            heading: "Ideal for Professional Kitchens",
            summary: "A durable stainless steel casing that is resistant to oil and grease is provided to protect the surface of the body. Grimy dirt and stains are removed easily, enabling the unit to be kept clean at all times."
          },
          {
            heading: "High Performance Filtration",
            summary: "A high performance heavy duty oil mist filter is included as standard equipment. The filtering system is 1.5-times more efficient than conventional filters, thereby effectively reducing the oily smoke entering the air conditioner. The filter is disposable to further simplify trouble free cleaning and maintenance."
          },
          {
            heading: "Easy Maintenance",
            summary: "A separate fan casing that can be disassembled in sections allows for easy fan cleaning. Drain pan cleaning onsite is also easy due to the use of a pipe connector that can be quickly removed."
          },
          {
            heading: "Optional Fresh Air Intake",
            summary: "The rear panel has an opening that can be used to bring fresh air into the unit. This helps to improve ventilation in the kitchen for greater comfort."
          },
          {
            heading: "Next Generation R32 Technology",
            summary: "R32 is a refrigerant with just one-third the global warming potential of R410A and has zero ozone depletion potential. R32 offers increased energy efficiency, and is said to be the next generation of refrigerants."
          },
          {
            heading: "Deluxe PAR Weekly Controller",
            summary: "This attractive full dot liquid crystal display incorporates a large backlit screen and simple menus for easy operation. You can set up to 8 temperature and airflow patterns per day for seven days, allowing you to reduce your energy consumption when needed, saving you both time and money. Perfect for the busy home, workplace or retail store."
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69480B/kitchen-suspended-pca-m71ha2-stainless-steel-heat-pump/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69480B/kitchen-suspended-pca-m71ha2-stainless-steel-heat-pump/image2.jpg"
          }
        ],
        name: "Kitchen Suspended Series",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/69480B/kitchen-suspended-pca-m71ha2-stainless-steel-heat-pump/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/69480B/kitchen-suspended-pca-m71ha2-stainless-steel-heat-pump/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The Kitchen Suspended Series Heat Pump Series is designed for efficiency and style."
      }
    },
    {
      name: "Concealed SEZ Series",
      modelId: MODEL_ID,
      data: {
        seriesCode: "Concealed",
        unitConfig: "High Wall Split System",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            summary: "This is a placeholder summary for the key feature.",
            heading: "Key Feature Heading"
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69271B/concealed-sez-m35-heat-pump/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69271B/concealed-sez-m35-heat-pump/image2.jpg"
          }
        ],
        name: "Concealed SEZ Series",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/69271B/concealed-sez-m35-heat-pump/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/69271B/concealed-sez-m35-heat-pump/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The Concealed SEZ Series Heat Pump Series is designed for efficiency and style."
      }
    },
    {
      name: "Ducted PEAD Series",
      modelId: MODEL_ID,
      data: {
        seriesCode: "PEAD",
        unitConfig: "Ducted",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            heading: "Low Profile Design",
            summary: "Our low profile ducted systems at 250mm in height are specifically designed for installation in tight ceiling spaces."
          },
          {
            heading: "Next-Generation R32 Technology",
            summary: "R32 is a refrigerant with just one-third the global warming potential of R410A and has zero ozone depletion potential. R32 offers increased energy efficiency, and is said to be the next generation of refrigerants."
          },
          {
            heading: "Wide Range of Static Pressures with 3 Fan Speeds",
            summary: "Selectable external static pressure of 35, 50, 70, 100 and 125 Pa with 3 fan speeds allowing a wide range of installation possibilities."
          },
          {
            heading: "Deluxe PAR Weekly Controller",
            summary: "This attractive full dot liquid crystal display incorporates a large backlit screen and simple menus for easy operation. You can set up to 8 temperature and airflow patterns per day for seven days, allowing you to reduce your energy consumption when needed, saving you both time and money. Perfect for the busy home and office or retail stores."
          },
          {
            heading: "Optional Zone Controller Upgrade",
            summary: "Transform your ducted system. With the ability to control up to 8 zones, expanded functionality and interaction, intuitive airflow control, and temperature, occupancy and brightness sensors – the PAC-ZC Zone Controller brings intuitive, yet simple control to a whole new level."
          },
          {
            heading: "Optional Plasma Quad Connect for Healthier Air",
            summary: "Designed to integrate with your existing Heat Pump, this high-performance two-stage advanced air filtration module, cleans and minimises dust and other allergens for better indoor air quality, all year round."
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69255B/ducted-pead-50-heat-pump/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69255B/ducted-pead-50-heat-pump/image2.jpg"
          }
        ],
        name: "Ducted PEAD Series",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/69255B/ducted-pead-50-heat-pump/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/69255B/ducted-pead-50-heat-pump/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The Ducted PEAD Series Heat Pump Series is designed for efficiency and style."
      }
    },
    {
      name: "Ducted PEA Series",
      modelId: MODEL_ID,
      data: {
        seriesCode: "PEA",
        unitConfig: "Ducted",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            heading: "Unobtrusive, Whole Home Heating",
            summary: "Our ducted systems are specifically designed for installation in ceiling spaces. Ideal for large residences or offices, ducted units are the ultimate hidden heating and cooling solution with only grilles visible."
          },
          {
            heading: "Next-Generation R32 Technology",
            summary: "R32 is a refrigerant with just one-third the global warming potential of R410A and has zero ozone depletion potential. R32 offers increased energy efficiency, and is said to be the next generation of refrigerants."
          },
          {
            heading: "Easy Installation",
            summary: "Versatile and easy installation is possible; for example, it is possible to adjust the distance between the air-intake and air-outlet vents to create the optimal airflow configuration."
          },
          {
            heading: "Ideal Airflow",
            summary: "The flexible duct design and high-pressure of our ducted systems increase variation in airflow options ensuring the system operates in a way that best suits virtually all room layouts."
          },
          {
            heading: "Deluxe PAR Weekly Controller",
            summary: "This attractive full dot liquid crystal display incorporates a large backlit screen and simple menus for easy operation. You can set up to 8 temperature and airflow patterns per day for seven days, allowing you to reduce your energy consumption when needed, saving you both time and money. Perfect for the busy home, workplace or retail store."
          },
          {
            heading: "Optional Zone Controller Upgrade",
            summary: "Transform your ducted system. With the ability to control up to 8 zones, expanded functionality and interaction, intuitive airflow control, and temperature, occupancy and brightness sensors – the PAC-ZC Zone Controller brings intuitive, yet simple control to a whole new level."
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69224B/ducted-pea100-heat-pump/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69224B/ducted-pea100-heat-pump/image2.jpg"
          }
        ],
        name: "Ducted PEA Series",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/69224B/ducted-pea100-heat-pump/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/69224B/ducted-pea100-heat-pump/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The Ducted PEA Series Heat Pump Series is designed for efficiency and style."
      }
    },
    {
      name: "PEA Splitable Series",
      modelId: MODEL_ID,
      data: {
        seriesCode: "PEA-Split",
        unitConfig: "Ducted",
        smartFeatures: {
          energyTracking: true,
          voiceControl: true,
          appControl: true,
          homeAutomationIntegration: true
        },
        brand: "Mitsubishi",
        keyFeatures: [
          {
            heading: "Unobtrusive, Whole Home Heating",
            summary: "Our ducted systems are specifically designed for installation in ceiling spaces. Ideal for large residences or offices, ducted units are the ultimate hidden heating and cooling solution with only grilles visible."
          },
          {
            heading: "Splittable Design",
            summary: "Designed for easier installation and maintenance, the PEA-M HAA is ideal for remodelling existing houses."
          },
          {
            heading: "Two-Way Maintenance Access",
            summary: "Two-way access to the fan deck assembly (from the top and the bottom) and to the drain pan (from the bottom and the side) allows for easy maintenance."
          },
          {
            heading: "Roof Truss Installation",
            summary: "The PEA-M HAA can be installed in roof trusses thanks to the two-piece structure."
          },
          {
            heading: "Easier Installation",
            summary: "The fan deck section and the heat exchanger can be seperately transported and assembled in the ceiling space."
          },
          {
            heading: "Next Generation R32 Technology",
            summary: "R32 is a refrigerant with just one-third the global warming potential of R410A and has zero ozone depletion potential. R32 offers increased energy efficiency, and is said to be the next generation of refrigerants."
          }
        ],
        productMedia: [
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69378B/pea-m100haa-deluxe-splittable-ducted-system/image1.jpg"
          },
          {
            media: "https://mitsubishi-electric.co.nz/heatpump/i/69378B/pea-m100haa-deluxe-splittable-ducted-system/image2.jpg"
          }
        ],
        name: "PEA Splitable Series",
        thumbnailImage: "https://mitsubishi-electric.co.nz/heatpump/i/69378B/pea-m100haa-deluxe-splittable-ducted-system/thumbnail.jpg",
        warrantyOptions: [
          {
            transferable: true,
            type: "Full Coverage",
            documents: [
              {
                document: "https://mitsubishi-electric.co.nz/heatpump/i/69378B/pea-m100haa-deluxe-splittable-ducted-system/warranty.pdf"
              }
            ],
            durationYears: 5
          }
        ],
        description: "The PEA Splitable Series Heat Pump Series is designed for efficiency and style."
      }
    }
  ];