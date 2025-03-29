/*
const UnusedItems: HVACUnit[] = [
  {
    name: "PLA-M71",
    modelId: MODEL_ID,
    data: {
      sku: "PLA-M71EA-S",
      model: "PLA-M71 SUZ Wired 4-Way Large Cassette",
      price: {
        originalPrice: 4618.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 7.1,
        heatingKw: 8.0,
        sizeKw: 7.1,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.79,
        starRating: 3.0,
        annualHeatingConsumptionKw: 2.17,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.0, mixedRating: 2.5 },
          coolingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 3.79,
        coefficientOfPerformance: 3.68,
        annualCoolingConsumptionKw: 1.87,
        annualCoefficientOfPerformance: 3.63
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 840,
          height: 258,
          depth: 840,
          unit: "mm",
          weight: { value: 21, unit: "kg" }
        },
        outdoorUnit: {
          width: 840,
          height: 880,
          depth: 330,
          unit: "mm",
          weight: { value: 54, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 51,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 840,
            height: 258,
            depth: 840,
            unit: "mm",
            weight: { value: 21, unit: "kg" }
          },
          outdoorUnit: {
            width: 840,
            height: 880,
            depth: 330,
            unit: "mm",
            weight: { value: 54, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PLA-M100",
    modelId: MODEL_ID,
    data: {
      sku: "PLA-M100EA-S",
      model: "PLA-M100 Wired 4-Way Standard Cassette",
      price: {
        originalPrice: 5938.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 10.0,
        heatingKw: 11.2,
        sizeKw: 10.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.52,
        starRating: 2.5,
        annualHeatingConsumptionKw: 3.10,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.52,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 2.84,
        annualCoefficientOfPerformance: 3.55
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 840,
          height: 298,
          depth: 840,
          unit: "mm",
          weight: { value: 24, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 116, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 53,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 840,
            height: 298,
            depth: 840,
            unit: "mm",
            weight: { value: 24, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 116, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PLA-M125",
    modelId: MODEL_ID,
    data: {
      sku: "PLA-M125EA-S",
      model: "PLA-M125 Wired 4-Way Standard Large Cassette",
      price: {
        originalPrice: 6268.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 12.5,
        heatingKw: 14.0,
        sizeKw: 12.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.42,
        starRating: 2.0,
        annualHeatingConsumptionKw: 3.87,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.42,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 3.65,
        annualCoefficientOfPerformance: 3.52
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 840,
          height: 298,
          depth: 840,
          unit: "mm",
          weight: { value: 24, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 118, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 54,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 840,
            height: 298,
            depth: 840,
            unit: "mm",
            weight: { value: 24, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 118, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PLA-M140",
    modelId: MODEL_ID,
    data: {
      sku: "PLA-M140EA-S",
      model: "PLA-M140 Wired Deluxe 4-Way Large Cassette",
      price: {
        originalPrice: 7368.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 13.5,
        heatingKw: 16.0,
        sizeKw: 13.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.31,
        starRating: 2.0,
        annualHeatingConsumptionKw: 4.42,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.31,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 4.08,
        annualCoefficientOfPerformance: 3.50
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 840,
          height: 298,
          depth: 840,
          unit: "mm",
          weight: { value: 24, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 118, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 55,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 840,
            height: 298,
            depth: 840,
            unit: "mm",
            weight: { value: 24, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 118, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PLA-M71B",
    modelId: MODEL_ID,
    data: {
      sku: "PLA-M71EA-B",
      model: "PLA-M71 SUZ Wired 4-Way Large Cassette with Black Grille",
      price: {
        originalPrice: 4618.90,  // PLA-M71EA-B: $4,199.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 7.1,
        heatingKw: 8.0,
        sizeKw: 7.1,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.79,
        starRating: 3.0,
        annualHeatingConsumptionKw: 2.17,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.0, mixedRating: 2.5 },
          coolingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 3.79,
        coefficientOfPerformance: 3.68,
        annualCoolingConsumptionKw: 1.87,
        annualCoefficientOfPerformance: 3.63
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 840,
          height: 258,
          depth: 840,
          unit: "mm",
          weight: { value: 21, unit: "kg" }
        },
        outdoorUnit: {
          width: 840,
          height: 880,
          depth: 330,
          unit: "mm",
          weight: { value: 54, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 51,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 840,
            height: 258,
            depth: 840,
            unit: "mm",
            weight: { value: 21, unit: "kg" }
          },
          outdoorUnit: {
            width: 840,
            height: 880,
            depth: 330,
            unit: "mm",
            weight: { value: 54, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PLA-M100B",
    modelId: MODEL_ID,
    data: {
      sku: "PLA-M100EA-B",
      model: "PLA-M100 Wired 4-Way Standard Cassette with Black Grille",
      price: {
        originalPrice: 5938.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 10.0,
        heatingKw: 11.2,
        sizeKw: 10.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.52,
        starRating: 2.5,
        annualHeatingConsumptionKw: 3.10,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.52,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 2.84,
        annualCoefficientOfPerformance: 3.55
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 840,
          height: 298,
          depth: 840,
          unit: "mm",
          weight: { value: 24, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 116, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 53,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 840,
            height: 298,
            depth: 840,
            unit: "mm",
            weight: { value: 24, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 116, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PLA-M125B",
    modelId: MODEL_ID,
    data: {
      sku: "PLA-M125EA-B",
      model: "PLA-M125 Wired 4-Way Standard Large Cassette with Black Grille",
      price: {
        originalPrice: 6268.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 12.5,
        heatingKw: 14.0,
        sizeKw: 12.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.42,
        starRating: 2.0,
        annualHeatingConsumptionKw: 3.87,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.42,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 3.65,
        annualCoefficientOfPerformance: 3.52
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 840,
          height: 298,
          depth: 840,
          unit: "mm",
          weight: { value: 24, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 118, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 54,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 840,
            height: 298,
            depth: 840,
            unit: "mm",
            weight: { value: 24, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 118, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PLA-M140B",
    modelId: MODEL_ID,
    data: {
      sku: "PLA-M140EA-B",
      model: "PLA-M140 Wired Deluxe 4-Way Large Cassette with Black Grille",
      price: {
        originalPrice: 7368.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 13.5,
        heatingKw: 16.0,
        sizeKw: 13.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.31,
        starRating: 2.0,
        annualHeatingConsumptionKw: 4.42,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.31,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 4.08,
        annualCoefficientOfPerformance: 3.50
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 840,
          height: 298,
          depth: 840,
          unit: "mm",
          weight: { value: 24, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 118, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 55,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 840,
            height: 298,
            depth: 840,
            unit: "mm",
            weight: { value: 24, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 118, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PLA-M71E",
    modelId: MODEL_ID,
    data: {
      sku: "PLA-M71EA-E",
      model: "PLA-M71 SUZ Wired 4-Way Large Cassette with Elevating Grille",
      price: {
        originalPrice: 0,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 7.1,
        heatingKw: 8.0,
        sizeKw: 7.1,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.79,
        starRating: 3.0,
        annualHeatingConsumptionKw: 2.17,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.0, mixedRating: 2.5 },
          coolingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 3.79,
        coefficientOfPerformance: 3.68,
        annualCoolingConsumptionKw: 1.87,
        annualCoefficientOfPerformance: 3.63
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 840,
          height: 258,
          depth: 840,
          unit: "mm",
          weight: { value: 21, unit: "kg" }
        },
        outdoorUnit: {
          width: 840,
          height: 880,
          depth: 330,
          unit: "mm",
          weight: { value: 54, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 51,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 840,
            height: 258,
            depth: 840,
            unit: "mm",
            weight: { value: 21, unit: "kg" }
          },
          outdoorUnit: {
            width: 840,
            height: 880,
            depth: 330,
            unit: "mm",
            weight: { value: 54, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PLA-M100E",
    modelId: MODEL_ID,
    data: {
      sku: "PLA-M100EA-E",
      model: "PLA-M100 Wired 4-Way Standard Cassette with Elevating Grille",
      price: {
        originalPrice: 0,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 10.0,
        heatingKw: 11.2,
        sizeKw: 10.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.52,
        starRating: 2.5,
        annualHeatingConsumptionKw: 3.10,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.52,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 2.84,
        annualCoefficientOfPerformance: 3.55
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 840,
          height: 298,
          depth: 840,
          unit: "mm",
          weight: { value: 24, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 116, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 53,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 840,
            height: 298,
            depth: 840,
            unit: "mm",
            weight: { value: 24, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 116, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PLA-M125E",
    modelId: MODEL_ID,
    data: {
      sku: "PLA-M125EA-E",
      model: "PLA-M125 Wired 4-Way Standard Large Cassette with Elevating Grille",
      price: {
        originalPrice: 0,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 12.5,
        heatingKw: 14.0,
        sizeKw: 12.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.42,
        starRating: 2.0,
        annualHeatingConsumptionKw: 3.87,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.42,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 3.65,
        annualCoefficientOfPerformance: 3.52
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 840,
          height: 298,
          depth: 840,
          unit: "mm",
          weight: { value: 24, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 118, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 54,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 840,
            height: 298,
            depth: 840,
            unit: "mm",
            weight: { value: 24, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 118, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PLA-M140E",
    modelId: MODEL_ID,
    data: {
      sku: "PLA-M140EA-E",
      model: "PLA-M140 Wired Deluxe 4-Way Large Cassette with Elevating Grille",
      price: {
        originalPrice: 0,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 13.5,
        heatingKw: 16.0,
        sizeKw: 13.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.31,
        starRating: 2.0,
        annualHeatingConsumptionKw: 4.42,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.31,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 4.08,
        annualCoefficientOfPerformance: 3.50
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 840,
          height: 298,
          depth: 840,
          unit: "mm",
          weight: { value: 24, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 118, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 55,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 840,
            height: 298,
            depth: 840,
            unit: "mm",
            weight: { value: 24, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 118, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PLA-M71E",
    modelId: MODEL_ID,
    data: {
      sku: "PLA-M71EA-H",
      model: "PLA-M71 PUZ Wired Deluxe 4-Way Large Cassette with 3D Harmony",
      price: {
        originalPrice: 0,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 7.1,
        heatingKw: 8.0,
        sizeKw: 7.1,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.98,
        starRating: 3.0,
        annualHeatingConsumptionKw: 2.03,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.5, coldRating: 2.0, mixedRating: 3.0 },
          coolingRating: { hotRating: 3.5, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.98,
        coefficientOfPerformance: 3.94,
        annualCoolingConsumptionKw: 1.78,
        annualCoefficientOfPerformance: 3.75
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 840,
          height: 258,
          depth: 840,
          unit: "mm",
          weight: { value: 21, unit: "kg" }
        },
        outdoorUnit: {
          width: 950,
          height: 943,
          depth: 330,
          unit: "mm",
          weight: { value: 70, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 51,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 840,
            height: 258,
            depth: 840,
            unit: "mm",
            weight: { value: 21, unit: "kg" }
          },
          outdoorUnit: {
            width: 950,
            height: 943,
            depth: 330,
            unit: "mm",
            weight: { value: 70, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PLA-M100H",
    modelId: MODEL_ID,
    data: {
      sku: "PLA-M100EA-H",
      model: "PLA-M100 Wired Deluxe 4-Way Large Cassette with 3D Harmony",
      price: {
        originalPrice: 0,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 10.0,
        heatingKw: 11.2,
        sizeKw: 10.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.52,
        starRating: 2.5,
        annualHeatingConsumptionKw: 3.10,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.52,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 2.84,
        annualCoefficientOfPerformance: 3.55
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 840,
          height: 298,
          depth: 840,
          unit: "mm",
          weight: { value: 24, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 116, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 53,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 840,
            height: 298,
            depth: 840,
            unit: "mm",
            weight: { value: 24, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 116, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PLA-M125H",
    modelId: MODEL_ID,
    data: {
      sku: "PLA-M125EA-H",
      model: "PLA-M125 Wired Deluxe 4-Way Large Cassette with 3D Harmony",
      price: {
        originalPrice: 0,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 12.5,
        heatingKw: 14.0,
        sizeKw: 12.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.42,
        starRating: 2.0,
        annualHeatingConsumptionKw: 3.87,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.42,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 3.65,
        annualCoefficientOfPerformance: 3.52
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 840,
          height: 298,
          depth: 840,
          unit: "mm",
          weight: { value: 24, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 118, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 54,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 840,
            height: 298,
            depth: 840,
            unit: "mm",
            weight: { value: 24, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 118, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PLA-M140H",
    modelId: MODEL_ID,
    data: {
      sku: "PLA-M140EA-H",
      model: "PLA-M140 Wired Deluxe 4-Way Large Cassette with 3D Harmony",
      price: {
        originalPrice: 0,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 13.5,
        heatingKw: 16.0,
        sizeKw: 13.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.31,
        starRating: 2.0,
        annualHeatingConsumptionKw: 4.42,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.31,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 4.08,
        annualCoefficientOfPerformance: 3.50
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 840,
          height: 298,
          depth: 840,
          unit: "mm",
          weight: { value: 24, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 118, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 55,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 840,
            height: 298,
            depth: 840,
            unit: "mm",
            weight: { value: 24, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 118, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "MLZ-25",
    modelId: MODEL_ID,
    data: {
      sku: "MLZ-KP25VF",
      model: "MLZ-KP25 SUZ Wired One-Way Cassette",
      price: {
        originalPrice: 3078.90,  // MLZ-KP25VF: $2,799.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 2.5,
        heatingKw: 3.2,
        sizeKw: 2.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.07,
        starRating: 3.5,
        annualHeatingConsumptionKw: 0.79,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.5, coldRating: 2.5, mixedRating: 3.0 },
          coolingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 4.23,
        coefficientOfPerformance: 4.05,
        annualCoolingConsumptionKw: 0.59,
        annualCoefficientOfPerformance: 3.93
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1102,
          height: 185,
          depth: 360,
          unit: "mm",
          weight: { value: 15.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 550,
          depth: 285,
          unit: "mm",
          weight: { value: 30, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-10°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 45,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1102,
            height: 185,
            depth: 360,
            unit: "mm",
            weight: { value: 15.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 550,
            depth: 285,
            unit: "mm",
            weight: { value: 30, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "MLZ-35",
    modelId: MODEL_ID,
    data: {
      sku: "MLZ-KP35VF",
      model: "MLZ-KP35 SUZ Wired One-Way Cassette",
      price: {
        originalPrice: 3353.90,  // MLZ-KP35VF: $3,049.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 3.5,
        heatingKw: 4.1,
        sizeKw: 3.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.80,
        starRating: 3.0,
        annualHeatingConsumptionKw: 1.13,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.88,
        coefficientOfPerformance: 3.62,
        annualCoolingConsumptionKw: 0.90,
        annualCoefficientOfPerformance: 3.56
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1102,
          height: 185,
          depth: 360,
          unit: "mm",
          weight: { value: 15.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 550,
          depth: 285,
          unit: "mm",
          weight: { value: 35, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-10°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 48,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1102,
            height: 185,
            depth: 360,
            unit: "mm",
            weight: { value: 15.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 550,
            depth: 285,
            unit: "mm",
            weight: { value: 35, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "MLZ-50",
    modelId: MODEL_ID,
    data: {
      sku: "MLZ-KP50VF",
      model: "MLZ-KP50 SUZ Wired One-Way Cassette",
      price: {
        originalPrice: 3848.90,  // MLZ-KP50VF: $3,499.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 5.0,
        heatingKw: 6.0,
        sizeKw: 5.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.59,
        starRating: 2.5,
        annualHeatingConsumptionKw: 1.83,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.64,
        coefficientOfPerformance: 3.27,
        annualCoolingConsumptionKw: 1.37,
        annualCoefficientOfPerformance: 3.24
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1102,
          height: 185,
          depth: 360,
          unit: "mm",
          weight: { value: 15.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 714,
          depth: 285,
          unit: "mm",
          weight: { value: 41, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-15°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 48,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1102,
            height: 185,
            depth: 360,
            unit: "mm",
            weight: { value: 15.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 714,
            depth: 285,
            unit: "mm",
            weight: { value: 41, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PCA-50",
    modelId: MODEL_ID,
    data: {
      sku: "PCA-M50KA",
      model: "PCA-M50KA SUZ Suspended Ceiling",
      price: {
        originalPrice: 3078.90,  // PCA-M35KA: $2,799.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 5.0,
        heatingKw: 6.0,
        sizeKw: 5.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.63,
        starRating: 2.5,
        annualHeatingConsumptionKw: 1.65,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.90,
        coefficientOfPerformance: 3.84,
        annualCoolingConsumptionKw: 1.28,
        annualCoefficientOfPerformance: 3.59
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 960,
          height: 230,
          depth: 680,
          unit: "mm",
          weight: { value: 24, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 714,
          depth: 285,
          unit: "mm",
          weight: { value: 41, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-15°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 48,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 960,
            height: 230,
            depth: 680,
            unit: "mm",
            weight: { value: 24, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 714,
            depth: 285,
            unit: "mm",
            weight: { value: 41, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PCA-60",
    modelId: MODEL_ID,
    data: {
      sku: "PCA-M60KA",
      model: "PCA-M60KA SUZ Suspended Ceiling",
      price: {
        originalPrice: 3353.90,  // PCA-M50KA: $3,049.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 6.0,
        heatingKw: 7.0,
        sizeKw: 6.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.52,
        starRating: 2.5,
        annualHeatingConsumptionKw: 1.99,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.52,
        coefficientOfPerformance: 3.52,
        annualCoolingConsumptionKw: 1.70,
        annualCoefficientOfPerformance: 3.48
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1280,
          height: 230,
          depth: 680,
          unit: "mm",
          weight: { value: 32, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 714,
          depth: 285,
          unit: "mm",
          weight: { value: 41, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-15°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 49,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1280,
            height: 230,
            depth: 680,
            unit: "mm",
            weight: { value: 32, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 714,
            depth: 285,
            unit: "mm",
            weight: { value: 41, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PCA-71",
    modelId: MODEL_ID,
    data: {
      sku: "PCA-M71KA",
      model: "PCA-M71KA SUZ Suspended Ceiling",
      price: {
        originalPrice: 3848.90,  // PCA-M60KA: $3,499.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 7.1,
        heatingKw: 8.0,
        sizeKw: 7.1,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.79,
        starRating: 3.0,
        annualHeatingConsumptionKw: 2.17,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.0, mixedRating: 2.5 },
          coolingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 3.79,
        coefficientOfPerformance: 3.68,
        annualCoolingConsumptionKw: 1.87,
        annualCoefficientOfPerformance: 3.63
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1280,
          height: 230,
          depth: 680,
          unit: "mm",
          weight: { value: 32, unit: "kg" }
        },
        outdoorUnit: {
          width: 840,
          height: 880,
          depth: 330,
          unit: "mm",
          weight: { value: 54, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 51,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1280,
            height: 230,
            depth: 680,
            unit: "mm",
            weight: { value: 32, unit: "kg" }
          },
          outdoorUnit: {
            width: 840,
            height: 880,
            depth: 330,
            unit: "mm",
            weight: { value: 54, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PCA-100",
    modelId: MODEL_ID,
    data: {
      sku: "PCA-M100KA",
      model: "PCA-M100KA PUZ Suspended Ceiling",
      price: {
        originalPrice: 5938.90,  // PCA-M100KA: $5,399.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 10.0,
        heatingKw: 11.2,
        sizeKw: 10.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.52,
        starRating: 2.5,
        annualHeatingConsumptionKw: 3.10,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.52,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 2.84,
        annualCoefficientOfPerformance: 3.55
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1600,
          height: 230,
          depth: 680,
          unit: "mm",
          weight: { value: 36, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 116, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 53,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1600,
            height: 230,
            depth: 680,
            unit: "mm",
            weight: { value: 36, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 116, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PCA-125",
    modelId: MODEL_ID,
    data: {
      sku: "PCA-M125KA",
      model: "PCA-M125KA PUZ Suspended Ceiling",
      price: {
        originalPrice: 6268.90,  // PCA-M125KA: $5,699.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 12.5,
        heatingKw: 14.0,
        sizeKw: 12.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.42,
        starRating: 2.0,
        annualHeatingConsumptionKw: 3.87,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.42,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 3.65,
        annualCoefficientOfPerformance: 3.52
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1600,
          height: 230,
          depth: 680,
          unit: "mm",
          weight: { value: 36, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 118, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 54,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1600,
            height: 230,
            depth: 680,
            unit: "mm",
            weight: { value: 36, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 118, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PCA-140",
    modelId: MODEL_ID,
    data: {
      sku: "PCA-M140KA",
      model: "PCA-M140KA PUZ Suspended Ceiling",
      price: {
        originalPrice: 7368.90,  // PCA-M140KA: $6,699.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 13.5,
        heatingKw: 16.0,
        sizeKw: 13.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.31,
        starRating: 2.0,
        annualHeatingConsumptionKw: 4.42,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.31,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 4.08,
        annualCoefficientOfPerformance: 3.50
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1600,
          height: 230,
          depth: 680,
          unit: "mm",
          weight: { value: 36, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 118, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 55,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1600,
            height: 230,
            depth: 680,
            unit: "mm",
            weight: { value: 36, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 118, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PCA-M71HA2",
    modelId: MODEL_ID,
    data: {
      sku: "PCA-M71HA2",
      model: "PCA-M71HA2 Kitchen Suspended Stainless Steel",
      price: {
        originalPrice: 4618.90,  // PCA-M71HA: $4,199.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 7.1,
        heatingKw: 7.6,
        sizeKw: 7.1,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.34,
        starRating: 2.0,
        annualHeatingConsumptionKw: 2.17,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.0, mixedRating: 2.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.51,
        coefficientOfPerformance: 3.50,
        annualCoolingConsumptionKw: 2.02,
        annualCoefficientOfPerformance: 3.34
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1136,
          height: 280,
          depth: 650,
          unit: "mm",
          weight: { value: 42, unit: "kg" }
        },
        outdoorUnit: {
          width: 950,
          height: 943,
          depth: 330,
          unit: "mm",
          weight: { value: 70, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 51,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1136,
            height: 280,
            depth: 650,
            unit: "mm",
            weight: { value: 42, unit: "kg" }
          },
          outdoorUnit: {
            width: 950,
            height: 943,
            depth: 330,
            unit: "mm",
            weight: { value: 70, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "SEZ-M35",
    modelId: MODEL_ID,
    data: {
      sku: "SEZ-M35DA",
      model: "SEZ-M35DA SUZ Concealed Ceiling",
      price: {
        originalPrice: 3188.90,  // SEZ-M35DA: $2,899.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 3.5,
        heatingKw: 4.0,
        sizeKw: 3.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.39,
        starRating: 2.0,
        annualHeatingConsumptionKw: 1.11,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.46,
        coefficientOfPerformance: 3.60,
        annualCoolingConsumptionKw: 1.01,
        annualCoefficientOfPerformance: 3.53
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 990,
          height: 200,
          depth: 700,
          unit: "mm",
          weight: { value: 21, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 550,
          depth: 285,
          unit: "mm",
          weight: { value: 35, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-10°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 48,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 990,
            height: 200,
            depth: 700,
            unit: "mm",
            weight: { value: 21, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 550,
            depth: 285,
            unit: "mm",
            weight: { value: 35, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "SEZ-M50",
    modelId: MODEL_ID,
    data: {
      sku: "SEZ-M50DA",
      model: "SEZ-M50DA SUZ Concealed Ceiling",
      price: {
        originalPrice: 3573.90,  // SEZ-M50DA: $3,249.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 5.0,
        heatingKw: 5.7,
        sizeKw: 5.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.23,
        starRating: 2.0,
        annualHeatingConsumptionKw: 1.58,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.23,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 1.55,
        annualCoefficientOfPerformance: 3.55
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 990,
          height: 200,
          depth: 700,
          unit: "mm",
          weight: { value: 23, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 714,
          depth: 285,
          unit: "mm",
          weight: { value: 41, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-15°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 48,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 990,
            height: 200,
            depth: 700,
            unit: "mm",
            weight: { value: 23, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 714,
            depth: 285,
            unit: "mm",
            weight: { value: 41, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "SEZ-M60",
    modelId: MODEL_ID,
    data: {
      sku: "SEZ-M60DA",
      model: "SEZ-M60DA SUZ Concealed Ceiling",
      price: {
        originalPrice: 3958.90,  // SEZ-M60DA: $3,599.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 6.0,
        heatingKw: 7.4,
        sizeKw: 6.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.02,
        starRating: 1.5,
        annualHeatingConsumptionKw: 2.05,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 }
        },
        energyEfficiencyRatio: 3.02,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 1.99,
        annualCoefficientOfPerformance: 3.55
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1190,
          height: 200,
          depth: 700,
          unit: "mm",
          weight: { value: 27, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 714,
          depth: 285,
          unit: "mm",
          weight: { value: 41, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-15°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 49,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1190,
            height: 200,
            depth: 700,
            unit: "mm",
            weight: { value: 27, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 714,
            depth: 285,
            unit: "mm",
            weight: { value: 41, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "SEZ-M71",
    modelId: MODEL_ID,
    data: {
      sku: "SEZ-M71DA",
      model: "SEZ-M71DA SUZ Concealed Ceiling",
      price: {
        originalPrice: 4233.90,  // SEZ-M71DA: $3,849.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 7.1,
        heatingKw: 8.0,
        sizeKw: 7.1,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.21,
        starRating: 2.0,
        annualHeatingConsumptionKw: 2.21,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.0, mixedRating: 2.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.21,
        coefficientOfPerformance: 3.62,
        annualCoolingConsumptionKw: 2.21,
        annualCoefficientOfPerformance: 3.56
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1190,
          height: 200,
          depth: 700,
          unit: "mm",
          weight: { value: 27, unit: "kg" }
        },
        outdoorUnit: {
          width: 840,
          height: 880,
          depth: 330,
          unit: "mm",
          weight: { value: 54, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 51,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1190,
            height: 200,
            depth: 700,
            unit: "mm",
            weight: { value: 27, unit: "kg" }
          },
          outdoorUnit: {
            width: 840,
            height: 880,
            depth: 330,
            unit: "mm",
            weight: { value: 54, unit: "kg" }
          }
        }
      },
    }
  }, 
  {
    name: "PEA-M100HAA",
    modelId: MODEL_ID,
    data: {
      sku: "PEA-M100HAA",
      model: "PEA-M100HAA Deluxe Splittable Ducted",
      price: {
        originalPrice: 6818.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 10.0,
        heatingKw: 11.2,
        sizeKw: 10.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.63,
        starRating: 3.5,
        annualHeatingConsumptionKw: 2.71,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.0, mixedRating: 2.5 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.77,
        coefficientOfPerformance: 4.13,
        annualCoolingConsumptionKw: 2.65,
        annualCoefficientOfPerformance: 3.98
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1405,
          height: 380,
          depth: 900,
          unit: "mm",
          weight: { value: 63, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 116, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-15°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 49,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1405,
            height: 380,
            depth: 900,
            unit: "mm",
            weight: { value: 63, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 116, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PEA-M125HAA",
    modelId: MODEL_ID,
    data: {
      sku: "PEA-M125HAA",
      model: "PEA-M125HAA Deluxe Splittable Ducted",
      price: {
        originalPrice: 7313.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 12.5,
        heatingKw: 14.0,
        sizeKw: 12.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.47,
        starRating: 2.5,
        annualHeatingConsumptionKw: 3.40,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.0, mixedRating: 2.5 },
          coolingRating: { hotRating: 3.0, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.57,
        coefficientOfPerformance: 4.11,
        annualCoolingConsumptionKw: 3.50,
        annualCoefficientOfPerformance: 3.99
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1405,
          height: 380,
          depth: 900,
          unit: "mm",
          weight: { value: 66, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 116, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-15°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 50,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1405,
            height: 380,
            depth: 900,
            unit: "mm",
            weight: { value: 66, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 116, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PEA-M140HAA",
    modelId: MODEL_ID,
    data: {
      sku: "PEA-M140HAA",
      model: "PEA-M140HAA Deluxe Splittable Ducted",
      price: {
        originalPrice: 8578.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 14.0,
        heatingKw: 16.0,
        sizeKw: 14.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.35,
        starRating: 2.5,
        annualHeatingConsumptionKw: 4.05,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.43,
        coefficientOfPerformance: 3.95,
        annualCoolingConsumptionKw: 4.08,
        annualCoefficientOfPerformance: 3.83
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1405,
          height: 380,
          depth: 900,
          unit: "mm",
          weight: { value: 66, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 118, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-15°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 51,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1405,
            height: 380,
            depth: 900,
            unit: "mm",
            weight: { value: 66, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 118, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PEA-M160HAA",
    modelId: MODEL_ID,
    data: {
      sku: "PEA-M160HAA",
      model: "PEA-M160HAA Deluxe Splittable Ducted",
      price: {
        originalPrice: 10228.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 15.5,
        heatingKw: 18.0,
        sizeKw: 15.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.28,
        starRating: 2.0,
        annualHeatingConsumptionKw: 4.62,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.35,
        coefficientOfPerformance: 3.90,
        annualCoolingConsumptionKw: 4.63,
        annualCoefficientOfPerformance: 3.78
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1665,
          height: 380,
          depth: 900,
          unit: "mm",
          weight: { value: 82, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 118, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-15°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 52,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1665,
            height: 380,
            depth: 900,
            unit: "mm",
            weight: { value: 82, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 118, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PEA-M180LAA",
    modelId: MODEL_ID,
    data: {
      sku: "PEA-M180LAA",
      model: "PEA-M180LAA High Capacity Splittable Ducted",
      price: {
        originalPrice: 10448.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 18.0,
        heatingKw: 20.0,
        sizeKw: 18.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.15,
        starRating: 2.0,
        annualHeatingConsumptionKw: 5.26,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 }
        },
        energyEfficiencyRatio: 3.20,
        coefficientOfPerformance: 3.80,
        annualCoolingConsumptionKw: 5.63,
        annualCoefficientOfPerformance: 3.65
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1665,
          height: 380,
          depth: 900,
          unit: "mm",
          weight: { value: 82, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 118, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-15°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 53,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1665,
            height: 380,
            depth: 900,
            unit: "mm",
            weight: { value: 82, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 118, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PEA-M200LAA",
    modelId: MODEL_ID,
    data: {
      sku: "PEA-M200LAA",
      model: "PEA-M200LAA High Capacity Splittable Ducted",
      price: {
        originalPrice: 12098.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 20.0,
        heatingKw: 22.4,
        sizeKw: 20.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.10,
        starRating: 1.5,
        annualHeatingConsumptionKw: 6.18,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 }
        },
        energyEfficiencyRatio: 3.15,
        coefficientOfPerformance: 3.63,
        annualCoolingConsumptionKw: 6.35,
        annualCoefficientOfPerformance: 3.50
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1665,
          height: 380,
          depth: 900,
          unit: "mm",
          weight: { value: 82, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 118, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-15°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 54,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1665,
            height: 380,
            depth: 900,
            unit: "mm",
            weight: { value: 82, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 118, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "PEA-M250LAA",
    modelId: MODEL_ID,
    data: {
      sku: "PEA-M250LAA",
      model: "PEA-M250LAA High Capacity Splittable Ducted",
      price: {
        originalPrice: 13088.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 25.0,
        heatingKw: 28.0,
        sizeKw: 25.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.05,
        starRating: 1.5,
        annualHeatingConsumptionKw: 7.18,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 1.5, coldRating: 1.0, mixedRating: 1.0 },
          coolingRating: { hotRating: 1.5, coldRating: 1.0, mixedRating: 1.0 }
        },
        energyEfficiencyRatio: 3.08,
        coefficientOfPerformance: 3.90,
        annualCoolingConsumptionKw: 8.12,
        annualCoefficientOfPerformance: 3.70
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1665,
          height: 380,
          depth: 900,
          unit: "mm",
          weight: { value: 82, unit: "kg" }
        },
        outdoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 118, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-20°C", maxTemperature: "21°C" },
        coolingOperatingRange: { minTemperature: "-15°C", maxTemperature: "52°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 55,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1665,
            height: 380,
            depth: 900,
            unit: "mm",
            weight: { value: 82, unit: "kg" }
          },
          outdoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 118, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "MXZ-2F52VF",
    modelId: MODEL_ID,
    data: {
      sku: "MXZ-2F52VF",
      model: "MXZ-2F52VF Two Port OmniCore Multi",
      price: {
        originalPrice: 3448.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 5.2,
        heatingKw: 6.1,
        sizeKw: 5.2,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.10,
        starRating: 3.0,
        annualHeatingConsumptionKw: 1.49,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 },
          coolingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 4.17,
        coefficientOfPerformance: 4.35,
        annualCoolingConsumptionKw: 1.25,
        annualCoefficientOfPerformance: 4.30
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        outdoorUnit: {
          width: 800,
          height: 550,
          depth: 285,
          unit: "mm",
          weight: { value: 37, unit: "kg" }
        },
        indoorUnit: {
          width: 0,
          height: 0,
          depth: 0,
          unit: "mm",
          weight: { value: 0, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 47,
        operationType: "Multi Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          outdoorUnit: {
            width: 800,
            height: 550,
            depth: 285,
            unit: "mm",
            weight: { value: 37, unit: "kg" }
          },
          indoorUnit: {
            width: 0,
            height: 0,
            depth: 0,
            unit: "mm",
            weight: { value: 0, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "MXZ-3F54VGD",
    modelId: MODEL_ID,
    data: {
      sku: "MXZ-3F54VGD",
      model: "MXZ-3F54VGD Three Port OmniCore Multi",
      price: {
        originalPrice: 3848.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 5.4,
        heatingKw: 7.0,
        sizeKw: 5.4,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.26,
        starRating: 3.0,
        annualHeatingConsumptionKw: 1.43,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 },
          coolingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 4.32,
        coefficientOfPerformance: 4.90,
        annualCoolingConsumptionKw: 1.25,
        annualCoefficientOfPerformance: 4.84
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        outdoorUnit: {
          width: 840,
          height: 710,
          depth: 330,
          unit: "mm",
          weight: { value: 58, unit: "kg" }
        },
        indoorUnit: {
          width: 0,
          height: 0,
          depth: 0,
          unit: "mm",
          weight: { value: 0, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 46,
        operationType: "Multi Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          outdoorUnit: {
            width: 840,
            height: 710,
            depth: 330,
            unit: "mm",
            weight: { value: 58, unit: "kg" }
          },
          indoorUnit: {
            width: 0,
            height: 0,
            depth: 0,
            unit: "mm",
            weight: { value: 0, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "MXZ-4F71VGD",
    modelId: MODEL_ID,
    data: {
      sku: "MXZ-4F71VGD",
      model: "MXZ-4F71VGD Four Port OmniCore Multi",
      price: {
        originalPrice: 4248.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 7.1,
        heatingKw: 8.0,
        sizeKw: 7.1,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.10,
        starRating: 3.0,
        annualHeatingConsumptionKw: 1.89,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 },
          coolingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 4.17,
        coefficientOfPerformance: 4.54,
        annualCoolingConsumptionKw: 1.70,
        annualCoefficientOfPerformance: 4.48
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        outdoorUnit: {
          width: 840,
          height: 710,
          depth: 330,
          unit: "mm",
          weight: { value: 58, unit: "kg" }
        },
        indoorUnit: {
          width: 0,
          height: 0,
          depth: 0,
          unit: "mm",
          weight: { value: 0, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 48,
        operationType: "Multi Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          outdoorUnit: {
            width: 840,
            height: 710,
            depth: 330,
            unit: "mm",
            weight: { value: 58, unit: "kg" }
          },
          indoorUnit: {
            width: 0,
            height: 0,
            depth: 0,
            unit: "mm",
            weight: { value: 0, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "MXZ-4F80VGD",
    modelId: MODEL_ID,
    data: {
      sku: "MXZ-4F80VGD",
      model: "MXZ-4F80VGD Four Port OmniCore Multi",
      price: {
        originalPrice: 4648.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 8.0,
        heatingKw: 8.8,
        sizeKw: 8.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.00,
        starRating: 3.0,
        annualHeatingConsumptionKw: 2.05,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 },
          coolingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 4.08,
        coefficientOfPerformance: 4.30,
        annualCoolingConsumptionKw: 1.96,
        annualCoefficientOfPerformance: 4.25
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        outdoorUnit: {
          width: 840,
          height: 710,
          depth: 330,
          unit: "mm",
          weight: { value: 58, unit: "kg" }
        },
        indoorUnit: {
          width: 0,
          height: 0,
          depth: 0,
          unit: "mm",
          weight: { value: 0, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 49,
        operationType: "Multi Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          outdoorUnit: {
            width: 840,
            height: 710,
            depth: 330,
            unit: "mm",
            weight: { value: 58, unit: "kg" }
          },
          indoorUnit: {
            width: 0,
            height: 0,
            depth: 0,
            unit: "mm",
            weight: { value: 0, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "MXZ-5F100VGD",
    modelId: MODEL_ID,
    data: {
      sku: "MXZ-5F100VGD",
      model: "MXZ-5F100VGD Five Port OmniCore Multi",
      price: {
        originalPrice: 5448.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 10.0,
        heatingKw: 10.0,
        sizeKw: 10.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.85,
        starRating: 2.5,
        annualHeatingConsumptionKw: 2.84,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.91,
        coefficientOfPerformance: 4.23,
        annualCoolingConsumptionKw: 2.56,
        annualCoefficientOfPerformance: 4.17
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        outdoorUnit: {
          width: 840,
          height: 710,
          depth: 330,
          unit: "mm",
          weight: { value: 59, unit: "kg" }
        },
        indoorUnit: {
          width: 0,
          height: 0,
          depth: 0,
          unit: "mm",
          weight: { value: 0, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 50,
        operationType: "Multi Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          outdoorUnit: {
            width: 840,
            height: 710,
            depth: 330,
            unit: "mm",
            weight: { value: 59, unit: "kg" }
          },
          indoorUnit: {
            width: 0,
            height: 0,
            depth: 0,
            unit: "mm",
            weight: { value: 0, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "MXZ-6F120VGD",
    modelId: MODEL_ID,
    data: {
      sku: "MXZ-6F120VGD",
      model: "MXZ-6F120VGD Six Port OmniCore Multi",
      price: {
        originalPrice: 6248.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 12.0,
        heatingKw: 13.2,
        sizeKw: 12.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.75,
        starRating: 2.5,
        annualHeatingConsumptionKw: 3.41,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.80,
        coefficientOfPerformance: 4.10,
        annualCoolingConsumptionKw: 3.16,
        annualCoefficientOfPerformance: 4.05
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        outdoorUnit: {
          width: 840,
          height: 710,
          depth: 330,
          unit: "mm",
          weight: { value: 59, unit: "kg" }
        },
        indoorUnit: {
          width: 0,
          height: 0,
          depth: 0,
          unit: "mm",
          weight: { value: 0, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 51,
        operationType: "Multi Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          outdoorUnit: {
            width: 840,
            height: 710,
            depth: 330,
            unit: "mm",
            weight: { value: 59, unit: "kg" }
          },
          indoorUnit: {
            width: 0,
            height: 0,
            depth: 0,
            unit: "mm",
            weight: { value: 0, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "MXZ-7E90VA-E1",
    modelId: MODEL_ID,
    data: {
      sku: "MXZ-7E90VA-E1",
      model: "MXZ-7E90VA-E1 Seven Port OmniCore Power Multi",
      price: {
        originalPrice: 7048.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 9.0,
        heatingKw: 10.0,
        sizeKw: 9.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.60,
        starRating: 2.5,
        annualHeatingConsumptionKw: 2.78,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.65,
        coefficientOfPerformance: 3.95,
        annualCoolingConsumptionKw: 2.47,
        annualCoefficientOfPerformance: 3.90
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        outdoorUnit: {
          width: 900,
          height: 900,
          depth: 350,
          unit: "mm",
          weight: { value: 75, unit: "kg" }
        },
        indoorUnit: {
          width: 0,
          height: 0,
          depth: 0,
          unit: "mm",
          weight: { value: 0, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 52,
        operationType: "Multi Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          outdoorUnit: {
            width: 900,
            height: 900,
            depth: 350,
            unit: "mm",
            weight: { value: 75, unit: "kg" }
          },
          indoorUnit: {
            width: 0,
            height: 0,
            depth: 0,
            unit: "mm",
            weight: { value: 0, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "MXZ-8B125VA-E1",
    modelId: MODEL_ID,
    data: {
      sku: "MXZ-8B125VA-E1",
      model: "MXZ-8B125VA-E1 Eight Port OmniCore Power Multi",
      price: {
        originalPrice: 8248.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 12.5,
        heatingKw: 14.0,
        sizeKw: 12.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.50,
        starRating: 2.0,
        annualHeatingConsumptionKw: 3.89,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.55,
        coefficientOfPerformance: 3.85,
        annualCoolingConsumptionKw: 3.52,
        annualCoefficientOfPerformance: 3.80
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        outdoorUnit: {
          width: 900,
          height: 900,
          depth: 350,
          unit: "mm",
          weight: { value: 87, unit: "kg" }
        },
        indoorUnit: {
          width: 0,
          height: 0,
          depth: 0,
          unit: "mm",
          weight: { value: 0, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 53,
        operationType: "Multi Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          outdoorUnit: {
            width: 900,
            height: 900,
            depth: 350,
            unit: "mm",
            weight: { value: 87, unit: "kg" }
          },
          indoorUnit: {
            width: 0,
            height: 0,
            depth: 0,
            unit: "mm",
            weight: { value: 0, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "MXZ-8B140VA-E1",
    modelId: MODEL_ID,
    data: {
      sku: "MXZ-8B140VA-E1",
      model: "MXZ-8B140VA-E1 Eight Port OmniCore Power Multi",
      price: {
        originalPrice: 8848.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 14.0,
        heatingKw: 16.0,
        sizeKw: 14.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.45,
        starRating: 2.0,
        annualHeatingConsumptionKw: 4.35,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.50,
        coefficientOfPerformance: 3.80,
        annualCoolingConsumptionKw: 4.00,
        annualCoefficientOfPerformance: 3.75
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        outdoorUnit: {
          width: 900,
          height: 900,
          depth: 350,
          unit: "mm",
          weight: { value: 87, unit: "kg" }
        },
        indoorUnit: {
          width: 0,
          height: 0,
          depth: 0,
          unit: "mm",
          weight: { value: 0, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 54,
        operationType: "Multi Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          outdoorUnit: {
            width: 900,
            height: 900,
            depth: 350,
            unit: "mm",
            weight: { value: 87, unit: "kg" }
          },
          indoorUnit: {
            width: 0,
            height: 0,
            depth: 0,
            unit: "mm",
            weight: { value: 0, unit: "kg" }
          }
        }
      },
    }
  },
  {
    name: "MXZ-8B155VA-E1",
    modelId: MODEL_ID,
    data: {
      sku: "MXZ-8B155VA-E1",
      model: "MXZ-8B155VA-E1 Eight Port OmniCore Power Multi",
      price: {
        originalPrice: 9448.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 15.5,
        heatingKw: 16.5,
        sizeKw: 15.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.40,
        starRating: 2.0,
        annualHeatingConsumptionKw: 4.85,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.45,
        coefficientOfPerformance: 3.75,
        annualCoolingConsumptionKw: 4.49,
        annualCoefficientOfPerformance: 3.70
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        outdoorUnit: {
          width: 900,
          height: 900,
          depth: 350,
          unit: "mm",
          weight: { value: 87, unit: "kg" }
        },
        indoorUnit: {
          width: 0,
          height: 0,
          depth: 0,
          unit: "mm",
          weight: { value: 0, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 55,
        operationType: "Multi Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          outdoorUnit: {
            width: 900,
            height: 900,
            depth: 350,
            unit: "mm",
            weight: { value: 87, unit: "kg" }
          },
          indoorUnit: {
            width: 0,
            height: 0,
            depth: 0,
            unit: "mm",
            weight: { value: 0, unit: "kg" }
          }
        }
      },
    }
  },

]; */