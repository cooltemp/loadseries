const MODEL_ID = '442c1b28773c4e149a70ba26a4834f62';

interface PowerCapacity {
  coolingKw: number;
  heatingKw: number;
  sizeKw: number;
  dehumidifyingCapacityLh: number;
}


interface CustomerReview {
  reviewRating: number;
  reviewerName: string;
  reviewText: string;
}

interface CustomerReviews {
  totalReviews: number;
  reviews: CustomerReview[];
  rating: number;
}

interface EnergyEfficiencyRating {
  hotRating: number;
  coldRating: number;
  mixedRating: number;
}

interface ZeroEnergyRatingLabel {
  heatingRating: EnergyEfficiencyRating;
  coolingRating: EnergyEfficiencyRating;
}

interface EnergyEfficiency {
  annualEnergyEfficiencyRatio: number;
  starRating: number;
  annualHeatingConsumptionKw: number;
  zeroEnergyRatingLabel: ZeroEnergyRatingLabel;
  energyEfficiencyRatio: number;
  coefficientOfPerformance: number;
  annualCoolingConsumptionKw: number;
  annualCoefficientOfPerformance: number;
}

interface Price {
  originalPrice: number;
  isTaxIncluded: boolean;
  currency: string;
}

interface OperatingRange {
  minTemperature: string;
  maxTemperature: string;
}

interface Technical {
  heatingOperatingRange: OperatingRange;
  coolingOperatingRange: OperatingRange;
  refrigerantType: string;
  powerSupply: string;
  outdoorUnitNoiseDb: number;
  operationType: string;
}


interface UnitDimensions {
  width: number;
  height: number;
  depth: number;
  unit: string;
  weight: {
    value: number;
    unit: string;
  };
}

interface PhysicalAttributes {
  indoorUnit: UnitDimensions;
  outdoorUnit: UnitDimensions;
}

interface ShippingDimensions {
  indoorUnit: UnitDimensions;
  outdoorUnit: UnitDimensions;
}

interface Shipping {
  shippingCost: string;
  shippingTime: string;
  dimensions: ShippingDimensions;
}

interface HVACUnitData {
  sku: string;
  model: string;
  displayName: string;
  /*     useCaseDescription: string; */
  price: Price;
  stock: string;
  powerCapacity: PowerCapacity;
  energyEfficiency: EnergyEfficiency;
  customerReviews: CustomerReviews;
  physicalAttributes: PhysicalAttributes;
  technical: Technical;
  shipping: Shipping;
}

interface HVACUnit {
  name: string;
  modelId: string;
  data: HVACUnitData;
}

// Define multiple HVAC products
export const items: HVACUnit[] = [
  {
    name: "GS25",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-GS25VFD-A1",
      model: "Standard GS25 High Wall Heat Pump",
      price: {
        originalPrice: 1428.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 2.5,
        heatingKw: 3.1,
        sizeKw: 2.5,
        dehumidifyingCapacityLh: 1.3
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.12,
        starRating: 2.5,
        annualHeatingConsumptionKw: 0.78,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.0, mixedRating: 2.5 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 4.24,
        coefficientOfPerformance: 3.97,
        annualCoolingConsumptionKw: 0.59,
        annualCoefficientOfPerformance: 3.89
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 799,
          height: 290,
          depth: 232,
          unit: "mm",
          weight: { value: 8.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 550,
          depth: 285,
          unit: "mm",
          weight: { value: 28, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 799,
            height: 290,
            depth: 232,
            unit: "mm",
            weight: { value: 8.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 550,
            depth: 285,
            unit: "mm",
            weight: { value: 28, unit: "kg" }
          }
        }
      },
      displayName: "Small Room High Wall Mounted Heat Pump (GS Series)"
    }
  },
  {
    name: "GS35",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-GS35VFD-A1",
      model: "Standard GS35 High Wall Heat Pump",
      price: {
        originalPrice: 1538.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 3.5,
        heatingKw: 3.7,
        sizeKw: 3.5,
        dehumidifyingCapacityLh: 1.6
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.12,
        starRating: 2.5,
        annualHeatingConsumptionKw: 0.92,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 4.07,
        coefficientOfPerformance: 4.02,
        annualCoolingConsumptionKw: 0.86,
        annualCoefficientOfPerformance: 3.89
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 799,
          height: 290,
          depth: 232,
          unit: "mm",
          weight: { value: 8.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 550,
          depth: 285,
          unit: "mm",
          weight: { value: 28, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 799,
            height: 290,
            depth: 232,
            unit: "mm",
            weight: { value: 8.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 550,
            depth: 285,
            unit: "mm",
            weight: { value: 28, unit: "kg" }
          }
        }
      },
      displayName: "Medium Room High Wall Mounted Heat Pump (GS Series)"
    }
  },
  {
    name: "GS50",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-GS50VFD-A1",
      model: "Standard GS50 High Wall Heat Pump",
      price: {
        originalPrice: 2077.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 5.0,
        heatingKw: 5.8,
        sizeKw: 5.0,
        dehumidifyingCapacityLh: 2.1
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.87,
        starRating: 2.0,
        annualHeatingConsumptionKw: 1.54,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.85,
        coefficientOfPerformance: 3.77,
        annualCoolingConsumptionKw: 1.30,
        annualCoefficientOfPerformance: 3.66
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 799,
          height: 290,
          depth: 232,
          unit: "mm",
          weight: { value: 8.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 550,
          depth: 285,
          unit: "mm",
          weight: { value: 31, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 799,
            height: 290,
            depth: 232,
            unit: "mm",
            weight: { value: 8.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 550,
            depth: 285,
            unit: "mm",
            weight: { value: 31, unit: "kg" }
          }
        }
      },
      displayName: "Medium Room High Wall Mounted Heat Pump (GS Series)"
    }
  },
  {
    name: "GS60",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-GS60VFD-A1",
      model: "Standard GS60 High Wall Heat Pump",
      price: {
        originalPrice: 2528.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 6.0,
        heatingKw: 6.8,
        sizeKw: 6.0,
        dehumidifyingCapacityLh: 2.3
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.78,
        starRating: 2.0,
        annualHeatingConsumptionKw: 1.88,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 2.0 },
          coolingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.61,
        coefficientOfPerformance: 3.62,
        annualCoolingConsumptionKw: 1.66,
        annualCoefficientOfPerformance: 3.52
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1100,
          height: 325,
          depth: 238,
          unit: "mm",
          weight: { value: 15.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 714,
          depth: 285,
          unit: "mm",
          weight: { value: 34, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 1100,
            height: 325,
            depth: 238,
            unit: "mm",
            weight: { value: 15.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 714,
            depth: 285,
            unit: "mm",
            weight: { value: 34, unit: "kg" }
          }
        }
      },
      displayName: "Large Room High Wall Mounted Heat Pump (GS Series)"
    }
  },
  {
    name: "GS71",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-GS71VFD-A1",
      model: "Standard GS71 High Wall Heat Pump",
      price: {
        originalPrice: 3243.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 7.1,
        heatingKw: 8.0,
        sizeKw: 7.1,
        dehumidifyingCapacityLh: 2.5
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.68,
        starRating: 1.5,
        annualHeatingConsumptionKw: 2.21,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 2.0 }
        },
        energyEfficiencyRatio: 3.55,
        coefficientOfPerformance: 3.62,
        annualCoolingConsumptionKw: 2.00,
        annualCoefficientOfPerformance: 3.52
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1100,
          height: 325,
          depth: 238,
          unit: "mm",
          weight: { value: 15.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 714,
          depth: 285,
          unit: "mm",
          weight: { value: 40, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 1100,
            height: 325,
            depth: 238,
            unit: "mm",
            weight: { value: 15.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 714,
            depth: 285,
            unit: "mm",
            weight: { value: 40, unit: "kg" }
          }
        }
      },
      displayName: "Large Room High Wall Mounted Heat Pump (GS Series)"
    }
  },
  {
    name: "GS80",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-GS80VFD-A1",
      model: "Standard GS80 High Wall Heat Pump",
      price: {
        originalPrice: 3628.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 8.0,
        heatingKw: 9.0,
        sizeKw: 8.0,
        dehumidifyingCapacityLh: 2.8
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.52,
        starRating: 1.5,
        annualHeatingConsumptionKw: 2.49,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 }
        },
        energyEfficiencyRatio: 3.45,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 2.32,
        annualCoefficientOfPerformance: 3.51
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1100,
          height: 325,
          depth: 238,
          unit: "mm",
          weight: { value: 15.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 714,
          depth: 285,
          unit: "mm",
          weight: { value: 40, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 1100,
            height: 325,
            depth: 238,
            unit: "mm",
            weight: { value: 15.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 714,
            depth: 285,
            unit: "mm",
            weight: { value: 40, unit: "kg" }
          }
        }
      },
      displayName: "Large Room High Wall Mounted Heat Pump (GS Series)"
    }
  },
  {
    name: "AP20",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-AP20VGD-A1",
      model: "Classic AP20 High Wall Heat Pump",
      price: {
        originalPrice: 1428.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 2.0,
        heatingKw: 2.5,
        sizeKw: 2.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.31,
        starRating: 2.5,
        annualHeatingConsumptionKw: 0.6,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.0, mixedRating: 2.5 },
          coolingRating: { hotRating: 3.5, coldRating: 3.5, mixedRating: 3.5 }
        },
        energyEfficiencyRatio: 4.35,
        coefficientOfPerformance: 4.17,
        annualCoolingConsumptionKw: 0.46,
        annualCoefficientOfPerformance: 4.14
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 760,
          height: 250,
          depth: 178,
          unit: "mm",
          weight: { value: 8.2, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 550,
          depth: 285,
          unit: "mm",
          weight: { value: 31, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 47,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 760,
            height: 250,
            depth: 178,
            unit: "mm",
            weight: { value: 8.2, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 550,
            depth: 285,
            unit: "mm",
            weight: { value: 31, unit: "kg" }
          }
        }
      },
      displayName: "Small Room High Wall Mounted Mini Heat Pump (AP Series)"
    }
  },

  {
    name: "AP25",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-AP25VGD2-A2",
      model: "Classic AP25 High Wall Heat Pump",
      price: {
        originalPrice: 1538.90,
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
        annualEnergyEfficiencyRatio: 4.97,
        starRating: 3.0,
        annualHeatingConsumptionKw: 0.67,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 },
          coolingRating: { hotRating: 6.0, coldRating: 6.0, mixedRating: 5.5 }
        },
        energyEfficiencyRatio: 5.00,
        coefficientOfPerformance: 4.78,
        annualCoolingConsumptionKw: 0.50,
        annualCoefficientOfPerformance: 4.75
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 798,
          height: 299,
          depth: 219,
          unit: "mm",
          weight: { value: 10.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 550,
          depth: 285,
          unit: "mm",
          weight: { value: 34, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 46,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 798,
            height: 299,
            depth: 219,
            unit: "mm",
            weight: { value: 10.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 550,
            depth: 285,
            unit: "mm",
            weight: { value: 34, unit: "kg" }
          }
        }
      },
      displayName: "Small Room High Wall Mounted Classic Heat Pump (AP Series)"
    }
  },

  {
    name: "AP35",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-AP35VGD2-A2",
      model: "Classic AP35 High Wall Heat Pump",
      price: {
        originalPrice: 1538.90,
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
        annualEnergyEfficiencyRatio: 4.8,
        starRating: 3.0,
        annualHeatingConsumptionKw: 0.91,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 },
          coolingRating: { hotRating: 5.5, coldRating: 5.5, mixedRating: 5.0 }
        },
        energyEfficiencyRatio: 4.7,
        coefficientOfPerformance: 4.39,
        annualCoolingConsumptionKw: 0.74,
        annualCoefficientOfPerformance: 4.35
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 798,
          height: 299,
          depth: 219,
          unit: "mm",
          weight: { value: 10.5, unit: "kg" }
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
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 47,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 798,
            height: 299,
            depth: 219,
            unit: "mm",
            weight: { value: 10.5, unit: "kg" }
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
      displayName: "Medium Room High Wall Mounted Classic Heat Pump (AP Series)"
    }
  },
  {
    name: "AP42",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-AP42VGD2-A2",
      model: "Classic AP42 High Wall Heat Pump",
      price: {
        originalPrice: 1648.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 4.2,
        heatingKw: 5.4,
        sizeKw: 4.2,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.6,
        starRating: 2.5,
        annualHeatingConsumptionKw: 1.37,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 },
          coolingRating: { hotRating: 5.0, coldRating: 5.0, mixedRating: 4.5 }
        },
        energyEfficiencyRatio: 4.5,
        coefficientOfPerformance: 3.94,
        annualCoolingConsumptionKw: 0.93,
        annualCoefficientOfPerformance: 3.90
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 798,
          height: 299,
          depth: 219,
          unit: "mm",
          weight: { value: 10.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 714,
          depth: 285,
          unit: "mm",
          weight: { value: 40, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 798,
            height: 299,
            depth: 219,
            unit: "mm",
            weight: { value: 10.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 714,
            depth: 285,
            unit: "mm",
            weight: { value: 40, unit: "kg" }
          }
        }
      },
      displayName: "Medium Room High Wall Mounted Classic Heat Pump (AP Series)"
    }
  },
  {
    name: "AP50",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-AP50VGD2-A2",
      model: "Classic AP50 High Wall Heat Pump",
      price: {
        originalPrice: 2033.90,
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
        annualEnergyEfficiencyRatio: 4.4,
        starRating: 2.5,
        annualHeatingConsumptionKw: 1.54,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 },
          coolingRating: { hotRating: 4.5, coldRating: 4.5, mixedRating: 4.0 }
        },
        energyEfficiencyRatio: 4.3,
        coefficientOfPerformance: 3.90,
        annualCoolingConsumptionKw: 1.16,
        annualCoefficientOfPerformance: 3.85
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 798,
          height: 299,
          depth: 219,
          unit: "mm",
          weight: { value: 10.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 714,
          depth: 285,
          unit: "mm",
          weight: { value: 40, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 798,
            height: 299,
            depth: 219,
            unit: "mm",
            weight: { value: 10.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 714,
            depth: 285,
            unit: "mm",
            weight: { value: 40, unit: "kg" }
          }
        }
      },
      displayName: "Medium Room High Wall Mounted Classic Heat Pump (AP Series)"
    }
  },
  {
    name: "AP60",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-AP60VGD2-A2",
      model: "Classic AP60 High Wall Heat Pump",
      price: {
        originalPrice: 2198.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 6.0,
        heatingKw: 6.8,
        sizeKw: 6.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.3,
        starRating: 2.5,
        annualHeatingConsumptionKw: 1.77,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 4.0, coldRating: 4.0, mixedRating: 3.5 }
        },
        energyEfficiencyRatio: 4.2,
        coefficientOfPerformance: 3.84,
        annualCoolingConsumptionKw: 1.43,
        annualCoefficientOfPerformance: 3.80
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1100,
          height: 325,
          depth: 257,
          unit: "mm",
          weight: { value: 16, unit: "kg" }
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
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 1100,
            height: 325,
            depth: 257,
            unit: "mm",
            weight: { value: 16, unit: "kg" }
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
      displayName: "Large Room High Wall Mounted Classic Heat Pump (GS Series)"
    }
  },
  {
    name: "AP71",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-AP71VGD2-A2",
      model: "Classic AP71 High Wall Heat Pump",
      price: {
        originalPrice: 2693.90,
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
        annualEnergyEfficiencyRatio: 4.1,
        starRating: 2.0,
        annualHeatingConsumptionKw: 2.15,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.5, coldRating: 3.5, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 4.0,
        coefficientOfPerformance: 3.72,
        annualCoolingConsumptionKw: 1.78,
        annualCoefficientOfPerformance: 3.70
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1100,
          height: 325,
          depth: 257,
          unit: "mm",
          weight: { value: 16, unit: "kg" }
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
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 1100,
            height: 325,
            depth: 257,
            unit: "mm",
            weight: { value: 16, unit: "kg" }
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
      displayName: "Large Room High Wall Mounted Classic Heat Pump (GS Series)"
    }
  },
  {
    name: "AP80",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-AP80VGD2-A2",
      model: "Classic AP80 High Wall Heat Pump",
      price: {
        originalPrice: 3518.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 7.8,
        heatingKw: 9.0,
        sizeKw: 7.8,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.9,
        starRating: 2.0,
        annualHeatingConsumptionKw: 2.49,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 3.0, coldRating: 3.0, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.8,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 2.05,
        annualCoefficientOfPerformance: 3.60
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1100,
          height: 325,
          depth: 257,
          unit: "mm",
          weight: { value: 16, unit: "kg" }
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
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 1100,
            height: 325,
            depth: 257,
            unit: "mm",
            weight: { value: 16, unit: "kg" }
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
      displayName: "Large Room High Wall Mounted Classic Heat Pump (GS Series)"
    }
  },
  {
    name: "AP25",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-AP25VGKD2-A2",
      model: "Plus AP25 High Wall Heat Pump",
      price: {
        originalPrice: 1648.90,
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
        annualEnergyEfficiencyRatio: 5.0,
        starRating: 3.0,
        annualHeatingConsumptionKw: 0.67,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 },
          coolingRating: { hotRating: 6.0, coldRating: 6.0, mixedRating: 5.5 }
        },
        energyEfficiencyRatio: 5.0,
        coefficientOfPerformance: 4.78,
        annualCoolingConsumptionKw: 0.50,
        annualCoefficientOfPerformance: 4.75
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 798,
          height: 299,
          depth: 219,
          unit: "mm",
          weight: { value: 10.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 550,
          depth: 285,
          unit: "mm",
          weight: { value: 34, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 46,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 798,
            height: 299,
            depth: 219,
            unit: "mm",
            weight: { value: 10.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 550,
            depth: 285,
            unit: "mm",
            weight: { value: 34, unit: "kg" }
          }
        }
      },
      displayName: "Small Room High Wall Mounted Plus Heat Pump (AP Plus Series)"
    }
  },
  {
    name: "AP35",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-AP35VGKD2-A2",
      model: "Plus AP35 High Wall Heat Pump",
      price: {
        originalPrice: 1758.90,
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
        annualEnergyEfficiencyRatio: 4.8,
        starRating: 3.0,
        annualHeatingConsumptionKw: 0.91,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 },
          coolingRating: { hotRating: 5.5, coldRating: 5.5, mixedRating: 5.0 }
        },
        energyEfficiencyRatio: 4.7,
        coefficientOfPerformance: 4.39,
        annualCoolingConsumptionKw: 0.74,
        annualCoefficientOfPerformance: 4.35
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 798,
          height: 299,
          depth: 219,
          unit: "mm",
          weight: { value: 10.5, unit: "kg" }
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
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 47,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 798,
            height: 299,
            depth: 219,
            unit: "mm",
            weight: { value: 10.5, unit: "kg" }
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
      displayName: "Medium Room High Wall Mounted Plus Heat Pump (AP Plus Series)"
    }
  },
  {
    name: "AP42",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-AP42VGKD2-A2",
      model: "Plus AP42 High Wall Heat Pump",
      price: {
        originalPrice: 2143.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 4.2,
        heatingKw: 5.4,
        sizeKw: 4.2,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.6,
        starRating: 2.5,
        annualHeatingConsumptionKw: 1.37,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 },
          coolingRating: { hotRating: 5.0, coldRating: 5.0, mixedRating: 4.5 }
        },
        energyEfficiencyRatio: 4.5,
        coefficientOfPerformance: 3.94,
        annualCoolingConsumptionKw: 0.93,
        annualCoefficientOfPerformance: 3.90
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 798,
          height: 299,
          depth: 219,
          unit: "mm",
          weight: { value: 10.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 714,
          depth: 285,
          unit: "mm",
          weight: { value: 40, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 798,
            height: 299,
            depth: 219,
            unit: "mm",
            weight: { value: 10.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 714,
            depth: 285,
            unit: "mm",
            weight: { value: 40, unit: "kg" }
          }
        }
      },
      displayName: "Medium Room High Wall Mounted Plus Heat Pump (AP Plus Series)"
    }
  },
  {
    name: "AP50",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-AP50VGKD2-A2",
      model: "Plus AP50 High Wall Heat Pump",
      price: {
        originalPrice: 2308.90,
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
        annualEnergyEfficiencyRatio: 4.4,
        starRating: 2.5,
        annualHeatingConsumptionKw: 1.54,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 },
          coolingRating: { hotRating: 4.5, coldRating: 4.5, mixedRating: 4.0 }
        },
        energyEfficiencyRatio: 4.3,
        coefficientOfPerformance: 3.90,
        annualCoolingConsumptionKw: 1.16,
        annualCoefficientOfPerformance: 3.85
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 798,
          height: 299,
          depth: 219,
          unit: "mm",
          weight: { value: 10.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 714,
          depth: 285,
          unit: "mm",
          weight: { value: 40, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 798,
            height: 299,
            depth: 219,
            unit: "mm",
            weight: { value: 10.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 714,
            depth: 285,
            unit: "mm",
            weight: { value: 40, unit: "kg" }
          }
        }
      },
      displayName: "Medium Room High Wall Mounted Plus Heat Pump (AP Plus Series)"
    }
  },
  {
    name: "AP60",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-AP60VGKD2-A2",
      model: "Plus AP60 High Wall Heat Pump",
      price: {
        originalPrice: 2803.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 6.0,
        heatingKw: 6.8,
        sizeKw: 6.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.3,
        starRating: 2.5,
        annualHeatingConsumptionKw: 1.77,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 4.0, coldRating: 4.0, mixedRating: 3.5 }
        },
        energyEfficiencyRatio: 4.2,
        coefficientOfPerformance: 3.84,
        annualCoolingConsumptionKw: 1.43,
        annualCoefficientOfPerformance: 3.80
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1100,
          height: 325,
          depth: 257,
          unit: "mm",
          weight: { value: 16, unit: "kg" }
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
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 1100,
            height: 325,
            depth: 257,
            unit: "mm",
            weight: { value: 16, unit: "kg" }
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
      displayName: "Large Room High Wall Mounted Plus Heat Pump (AP Plus Series)"
    }
  },
  {
    name: "AP71",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-AP71VGKD2-A2",
      model: "Plus AP71 High Wall Heat Pump",
      price: {
        originalPrice: 3628.90,
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
        annualEnergyEfficiencyRatio: 4.1,
        starRating: 2.0,
        annualHeatingConsumptionKw: 2.15,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.5, coldRating: 3.5, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 4.0,
        coefficientOfPerformance: 3.72,
        annualCoolingConsumptionKw: 1.78,
        annualCoefficientOfPerformance: 3.70
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1100,
          height: 325,
          depth: 257,
          unit: "mm",
          weight: { value: 16, unit: "kg" }
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
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 1100,
            height: 325,
            depth: 257,
            unit: "mm",
            weight: { value: 16, unit: "kg" }
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
      displayName: "Large Room High Wall Mounted Plus Heat Pump (AP Plus Series)"
    }
  },
  {
    name: "AP80",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-AP80VGKD2-A2",
      model: "Plus AP80 High Wall Heat Pump",
      price: {
        originalPrice: 4013.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 7.8,
        heatingKw: 9.0,
        sizeKw: 7.8,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.9,
        starRating: 2.0,
        annualHeatingConsumptionKw: 2.49,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 3.0, coldRating: 3.0, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.8,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 2.05,
        annualCoefficientOfPerformance: 3.60
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1100,
          height: 325,
          depth: 257,
          unit: "mm",
          weight: { value: 16, unit: "kg" }
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
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 1100,
            height: 325,
            depth: 257,
            unit: "mm",
            weight: { value: 16, unit: "kg" }
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
      displayName: "Large Room High Wall Mounted Plus Heat Pump (AP Plus Series)"
    }
  },
  {
    name: "EF25",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-EF25VGKDW-A1",
      model: "Designer EF25 High Wall Heat Pump - Pure White",
      price: {
        originalPrice: 1725.90,  // EF25: $1,569.00 + 10%
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
        annualEnergyEfficiencyRatio: 5.0,
        starRating: 3.0,
        annualHeatingConsumptionKw: 0.7,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 },
          coolingRating: { hotRating: 4.5, coldRating: 4.0, mixedRating: 4.0 }
        },
        energyEfficiencyRatio: 4.63,
        coefficientOfPerformance: 4.57,
        annualCoolingConsumptionKw: 0.54,
        annualCoefficientOfPerformance: 4.55
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 885,
          height: 299,
          depth: 195,
          unit: "mm",
          weight: { value: 11.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 550,
          depth: 285,
          unit: "mm",
          weight: { value: 31, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 47,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 885,
            height: 299,
            depth: 195,
            unit: "mm",
            weight: { value: 11.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 550,
            depth: 285,
            unit: "mm",
            weight: { value: 31, unit: "kg" }
          }
        }
      },
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
    }
  },
  {
    name: "EF35",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-EF35VGKDW-A1",
      model: "Designer EF35 High Wall Heat Pump",
      price: {
        originalPrice: 1890.90,  // EF35: $1,719.00 + 10%
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
        annualEnergyEfficiencyRatio: 4.6,
        starRating: 2.5,
        annualHeatingConsumptionKw: 0.96,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 },
          coolingRating: { hotRating: 4.0, coldRating: 3.5, mixedRating: 3.5 }
        },
        energyEfficiencyRatio: 4.17,
        coefficientOfPerformance: 4.17,
        annualCoolingConsumptionKw: 0.84,
        annualCoefficientOfPerformance: 4.15
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 885,
          height: 299,
          depth: 195,
          unit: "mm",
          weight: { value: 11.5, unit: "kg" }
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
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 885,
            height: 299,
            depth: 195,
            unit: "mm",
            weight: { value: 11.5, unit: "kg" }
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
      displayName: "Small Room High Wall Mounted Designer Heat Pump (EF Series)"
    }
  },
  {
    name: "EF42",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-EF42VGKDW-A1",
      model: "Designer EF42 High Wall Heat Pump - Pure White",
      price: {
        originalPrice: 2220.90,  // EF42: $2,019.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 4.2,
        heatingKw: 5.4,
        sizeKw: 4.2,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.4,
        starRating: 2.5,
        annualHeatingConsumptionKw: 1.37,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 3.77,
        coefficientOfPerformance: 3.94,
        annualCoolingConsumptionKw: 1.11,
        annualCoefficientOfPerformance: 3.90
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 885,
          height: 299,
          depth: 195,
          unit: "mm",
          weight: { value: 11.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 714,
          depth: 285,
          unit: "mm",
          weight: { value: 40, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 885,
            height: 299,
            depth: 195,
            unit: "mm",
            weight: { value: 11.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 714,
            depth: 285,
            unit: "mm",
            weight: { value: 40, unit: "kg" }
          }
        }
      },
      displayName: "Medium Room High Wall Mounted Designer Heat Pump (EF Series)"
    }
  },
  {
    name: "EF50",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-EF50VGKDW-A1",
      model: "Designer EF50 High Wall Heat Pump - Pure White",
      price: {
        originalPrice: 2418.90,  // EF50: $2,199.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 5.0,
        heatingKw: 5.8,
        sizeKw: 5.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.2,
        starRating: 2.0,
        annualHeatingConsumptionKw: 1.54,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 3.62,
        coefficientOfPerformance: 3.77,
        annualCoolingConsumptionKw: 1.38,
        annualCoefficientOfPerformance: 3.75
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 885,
          height: 299,
          depth: 195,
          unit: "mm",
          weight: { value: 11.5, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 714,
          depth: 285,
          unit: "mm",
          weight: { value: 40, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 885,
            height: 299,
            depth: 195,
            unit: "mm",
            weight: { value: 11.5, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 714,
            depth: 285,
            unit: "mm",
            weight: { value: 40, unit: "kg" }
          }
        }
      },
      displayName: "Medium Room High Wall Mounted Designer Heat Pump (EF Series)"
    }
  },
  {
    name: "AS90",
    modelId: MODEL_ID,
    data: {
      sku: "MSZ-AS90VGD-A2",
      model: "Large Capacity AS90 High Wall Heat Pump",
      price: {
        originalPrice: 4123.90,  // AS90: $3,749.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 9.0,
        heatingKw: 10.3,
        sizeKw: 9.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.23,
        starRating: 2.0,
        annualHeatingConsumptionKw: 2.94,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.0, mixedRating: 2.5 },
          coolingRating: { hotRating: 3.5, coldRating: 3.5, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 3.24,
        coefficientOfPerformance: 3.50,
        annualCoolingConsumptionKw: 2.78,
        annualCoefficientOfPerformance: 3.50
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1170,
          height: 365,
          depth: 295,
          unit: "mm",
          weight: { value: 20.0, unit: "kg" }
        },
        outdoorUnit: {
          width: 840,
          height: 880,
          depth: 330,
          unit: "mm",
          weight: { value: 53, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 56,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1170,
            height: 365,
            depth: 295,
            unit: "mm",
            weight: { value: 20.0, unit: "kg" }
          },
          outdoorUnit: {
            width: 840,
            height: 880,
            depth: 330,
            unit: "mm",
            weight: { value: 53, unit: "kg" }
          }
        }
      },
      displayName: "Extra Large Room High Wall Mounted Heat Pump (AS Series)" 
    }
  },
  {
    name: "PKA71",
    modelId: MODEL_ID,
    data: {
      sku: "PKA-M71KAL",
      model: "Light Commercial PKA71 High Wall Heat Pump",
      price: {
        originalPrice: 5828.90,  // PKA-M71KAL: $5,299.00 + 10%
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
        annualEnergyEfficiencyRatio: 3.61,
        starRating: 0,
        annualHeatingConsumptionKw: 2.12,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 0, coldRating: 0, mixedRating: 0 },
          coolingRating: { hotRating: 0, coldRating: 0, mixedRating: 0 }
        },
        energyEfficiencyRatio: 3.81,
        coefficientOfPerformance: 3.77,
        annualCoolingConsumptionKw: 1.86,
        annualCoefficientOfPerformance: 3.60
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 950,
          height: 330,
          depth: 25,
          unit: "mm",
          weight: { value: 70, unit: "kg" }
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
        outdoorUnitNoiseDb: 47,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 950,
            height: 330,
            depth: 25,
            unit: "mm",
            weight: { value: 70, unit: "kg" }
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
      displayName: "Extra Large Room High Wall Mounted Heat Pump (PKA Series)" 
    }
  },
  {
    name: "PKA100",
    modelId: MODEL_ID,
    data: {
      sku: "PKA-M100KAL",
      model: "Light Commercial PKA100 High Wall Heat Pump",
      price: {
        originalPrice: 7258.90,  // PKA-M100KAL: $6,599.00 + 10%
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
        annualEnergyEfficiencyRatio: 3.43,
        starRating: 0,
        annualHeatingConsumptionKw: 3.10,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 0, coldRating: 0, mixedRating: 0 },
          coolingRating: { hotRating: 0, coldRating: 0, mixedRating: 0 }
        },
        energyEfficiencyRatio: 3.55,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 2.81,
        annualCoefficientOfPerformance: 3.49
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1050,
          height: 1338,
          depth: 330,
          unit: "mm",
          weight: { value: 116, unit: "kg" }
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
        outdoorUnitNoiseDb: 49,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 1050,
            height: 1338,
            depth: 330,
            unit: "mm",
            weight: { value: 116, unit: "kg" }
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
      displayName: "Extra Large Room High Wall Mounted Heat Pump (PKA Series)" 
    }
  },
  {
    name: "KW25",
    modelId: MODEL_ID,
    data: {
      sku: "MFZ-KW25VGK-A1",
      model: "RapidHeat KW25 Floor Console with Built in Wi-Fi Control",
      price: {
        originalPrice: 2616.90,  // KW25 WiFi: $2,379.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 2.5,
        heatingKw: 3.4,
        sizeKw: 2.5,
        dehumidifyingCapacityLh: 0.2
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.38,
        starRating: 3.5,
        annualHeatingConsumptionKw: 0.78,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 },
          coolingRating: { hotRating: 4.0, coldRating: 3.5, mixedRating: 3.5 }
        },
        energyEfficiencyRatio: 4.38,
        coefficientOfPerformance: 4.35,
        annualCoolingConsumptionKw: 0.57,
        annualCoefficientOfPerformance: 4.31
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 750,
          height: 600,
          depth: 215,
          unit: "mm",
          weight: { value: 15, unit: "kg" }
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
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 46,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 750,
            height: 600,
            depth: 215,
            unit: "mm",
            weight: { value: 15, unit: "kg" }
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
      displayName: "Small Room Floor Level Heat Pump (KF Series)"
    }
  },
  {
    name: "KW35",
    modelId: MODEL_ID,
    data: {
      sku: "MFZ-KW35VGK-A1",
      model: "RapidHeat KW35 Floor Console with Built in Wi-Fi Control",
      price: {
        originalPrice: 2836.90,  // KW35 WiFi: $2,579.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 3.5,
        heatingKw: 4.3,
        sizeKw: 3.5,
        dehumidifyingCapacityLh: 0.3
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.27,
        starRating: 3.0,
        annualHeatingConsumptionKw: 1.05,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 },
          coolingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 4.12,
        coefficientOfPerformance: 4.09,
        annualCoolingConsumptionKw: 0.85,
        annualCoefficientOfPerformance: 4.05
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 750,
          height: 600,
          depth: 215,
          unit: "mm",
          weight: { value: 15, unit: "kg" }
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
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 47,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 750,
            height: 600,
            depth: 215,
            unit: "mm",
            weight: { value: 15, unit: "kg" }
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
      displayName: "Medium Room Floor Level Heat Pump (KF Series)"
    }
  },
  {
    name: "KW42",
    modelId: MODEL_ID,
    data: {
      sku: "MFZ-KW42VGK-A1",
      model: "RapidHeat KW42 Floor Console with Built in Wi-Fi Control",
      price: {
        originalPrice: 3056.90,  // KW42 WiFi: $2,779.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 4.2,
        heatingKw: 5.4,
        sizeKw: 4.2,
        dehumidifyingCapacityLh: 0.4
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.12,
        starRating: 2.5,
        annualHeatingConsumptionKw: 1.37,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 3.82,
        coefficientOfPerformance: 3.94,
        annualCoolingConsumptionKw: 1.10,
        annualCoefficientOfPerformance: 3.90
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 750,
          height: 600,
          depth: 215,
          unit: "mm",
          weight: { value: 15, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 714,
          depth: 285,
          unit: "mm",
          weight: { value: 40, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 750,
            height: 600,
            depth: 215,
            unit: "mm",
            weight: { value: 15, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 714,
            depth: 285,
            unit: "mm",
            weight: { value: 40, unit: "kg" }
          }
        }
      },
      displayName: "Large Room Floor Level Heat Pump (KF Series)"
    }
  },
  {
    name: "KW50",
    modelId: MODEL_ID,
    data: {
      sku: "MFZ-KW50VGK-A1",
      model: "RapidHeat KW50 Floor Console with Built in Wi-Fi Control",
      price: {
        originalPrice: 3386.90,  // KW50 WiFi: $3,079.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 5.0,
        heatingKw: 6.0,
        sizeKw: 5.0,
        dehumidifyingCapacityLh: 0.5
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.92,
        starRating: 2.0,
        annualHeatingConsumptionKw: 1.66,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.62,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 1.38,
        annualCoefficientOfPerformance: 3.60
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 750,
          height: 600,
          depth: 215,
          unit: "mm",
          weight: { value: 15, unit: "kg" }
        },
        outdoorUnit: {
          width: 800,
          height: 714,
          depth: 285,
          unit: "mm",
          weight: { value: 40, unit: "kg" }
        }
      },
      technical: {
        heatingOperatingRange: { minTemperature: "-15°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 750,
            height: 600,
            depth: 215,
            unit: "mm",
            weight: { value: 15, unit: "kg" }
          },
          outdoorUnit: {
            width: 800,
            height: 714,
            depth: 285,
            unit: "mm",
            weight: { value: 40, unit: "kg" }
          }
        }
      },
      displayName: "Large Room Floor Level Heat Pump (KF Series)"
    }
  },
  {
    name: "KW60",
    modelId: MODEL_ID,
    data: {
      sku: "MFZ-KW60VGK-A1",
      model: "RapidHeat KW60 Floor Console with Built in Wi-Fi Control",
      price: {
        originalPrice: 3826.90,  // KW60 WiFi: $3,479.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 6.1,
        heatingKw: 7.2,
        sizeKw: 6.1,
        dehumidifyingCapacityLh: 0.6
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.72,
        starRating: 2.0,
        annualHeatingConsumptionKw: 2.11,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.42,
        coefficientOfPerformance: 3.41,
        annualCoolingConsumptionKw: 1.78,
        annualCoefficientOfPerformance: 3.40
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 750,
          height: 600,
          depth: 215,
          unit: "mm",
          weight: { value: 15, unit: "kg" }
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
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
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
            width: 750,
            height: 600,
            depth: 215,
            unit: "mm",
            weight: { value: 15, unit: "kg" }
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
      displayName: "Extra Large Room Floor Level Heat Pump (KF Series)"
    }
  },
  {
    name: "KW50",
    modelId: MODEL_ID,
    data: {
      sku: "MFZ-KW50VGKHZ",
      model: "HyperCore KW50 Floor Console with Built-In Wi-Fi Control",
      price: {
        originalPrice: 3826.90,  // KW50 HyperCore WiFi: $3,479.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 5.0,
        heatingKw: 5.8,
        sizeKw: 5.0,
        dehumidifyingCapacityLh: 2.1
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.41,
        starRating: 2.5,
        annualHeatingConsumptionKw: 1.53,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.0, mixedRating: 2.5 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.78,
        coefficientOfPerformance: 3.79,
        annualCoolingConsumptionKw: 1.32,
        annualCoefficientOfPerformance: 3.77
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 750,
          height: 600,
          depth: 215,
          unit: "mm",
          weight: { value: 15, unit: "kg" }
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
        heatingOperatingRange: { minTemperature: "-25°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 56,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 750,
            height: 600,
            depth: 215,
            unit: "mm",
            weight: { value: 15, unit: "kg" }
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
      displayName: "Large Room Floor Level Wi-fi Heat Pump (KF Series)"  
    }
  },
  {
    name: "KW60",
    modelId: MODEL_ID,
    data: {
      sku: "MFZ-KW60VGKHZ",
      model: "HyperCore KW60 Floor Console with Built-In Wi-Fi Control",
      price: {
        originalPrice: 4376.90,  // KW60 HyperCore WiFi: $3,979.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 6.1,
        heatingKw: 6.5,
        sizeKw: 6.1,
        dehumidifyingCapacityLh: 2.4
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 4.35,
        starRating: 2.5,
        annualHeatingConsumptionKw: 1.88,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.0, mixedRating: 2.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.52,
        coefficientOfPerformance: 3.45,
        annualCoolingConsumptionKw: 1.73,
        annualCoefficientOfPerformance: 3.44
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 750,
          height: 600,
          depth: 215,
          unit: "mm",
          weight: { value: 15, unit: "kg" }
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
        heatingOperatingRange: { minTemperature: "-25°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "46°C" },
        refrigerantType: "R32",
        powerSupply: "230V / Single Phase / 50Hz",
        outdoorUnitNoiseDb: 56,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 750,
            height: 600,
            depth: 215,
            unit: "mm",
            weight: { value: 15, unit: "kg" }
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
      displayName: "Extra Large Room Floor Level Wi-fi Heat Pump (KF Series)"
    }
  },
  {
    name: "SLZM25",
    modelId: MODEL_ID,
    data: {
      sku: "SLZ-M25FA",
      model: "Classic SLZ25 Cassette Heat Pump",
      price: {
        originalPrice: 2968.90,  // SLZ-M25FA Wired: $2,699.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 2.5,
        heatingKw: 3.0,
        sizeKw: 2.5,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.88,
        starRating: 3.5,
        annualHeatingConsumptionKw: 0.78,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.5, mixedRating: 2.5 },
          coolingRating: { hotRating: 3.5, coldRating: 3.5, mixedRating: 3.5 }
        },
        energyEfficiencyRatio: 4.03,
        coefficientOfPerformance: 3.85,
        annualCoolingConsumptionKw: 0.62,
        annualCoefficientOfPerformance: 3.73
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 570,
          height: 245,
          depth: 570,
          unit: "mm",
          weight: { value: 15, unit: "kg" }
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
        outdoorUnitNoiseDb: 46,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 570,
            height: 245,
            depth: 570,
            unit: "mm",
            weight: { value: 15, unit: "kg" }
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
      displayName: "Medium Room Floor Level Wi-fi Heat Pump (KF Series)"
    }
  },
  {
    name: "SLZM35",
    modelId: MODEL_ID,
    data: {
      sku: "SLZ-M35FA",
      model: "Classic SLZ35 Cassette Heat Pump",
      price: {
        originalPrice: 3243.90,  // SLZ-M35FA Wired: $2,949.00 + 10%
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
        annualEnergyEfficiencyRatio: 3.67,
        starRating: 3.0,
        annualHeatingConsumptionKw: 1.09,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 3.0, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 3.85,
        coefficientOfPerformance: 3.67,
        annualCoolingConsumptionKw: 0.91,
        annualCoefficientOfPerformance: 3.65
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 570,
          height: 245,
          depth: 570,
          unit: "mm",
          weight: { value: 15, unit: "kg" }
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
        outdoorUnitNoiseDb: 47,
        operationType: "Single Split, Inverter"
      },
      shipping: {
        shippingCost: "Contact dealer",
        shippingTime: "Contact dealer",
        dimensions: {
          indoorUnit: {
            width: 570,
            height: 245,
            depth: 570,
            unit: "mm",
            weight: { value: 15, unit: "kg" }
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
    }
  },
  {
    name: "SLZM50",
    modelId: MODEL_ID,
    data: {
      sku: "SLZ-M50FA",
      model: "Classic SLZ50 Cassette Heat Pump",
      price: {
        originalPrice: 3738.90,  // SLZ-M50FA Wired: $3,399.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 4.6,
        heatingKw: 5.0,
        sizeKw: 4.6,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.45,
        starRating: 2.5,
        annualHeatingConsumptionKw: 1.37,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.65,
        coefficientOfPerformance: 3.65,
        annualCoolingConsumptionKw: 1.26,
        annualCoefficientOfPerformance: 3.63
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 570,
          height: 245,
          depth: 570,
          unit: "mm",
          weight: { value: 15, unit: "kg" }
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
            width: 570,
            height: 245,
            depth: 570,
            unit: "mm",
            weight: { value: 15, unit: "kg" }
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
    }
  },
  {
    name: "SLZM60",
    modelId: MODEL_ID,
    data: {
      sku: "SLZ-M60FA",
      model: "Classic SLZ60 Cassette Heat Pump",
      price: {
        originalPrice: 4288.90,  // SLZ-M60FA Wired: $3,899.00 + 10%
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 5.6,
        heatingKw: 6.0,
        sizeKw: 5.6,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.32,
        starRating: 2.0,
        annualHeatingConsumptionKw: 1.66,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.0, coldRating: 1.5, mixedRating: 1.5 },
          coolingRating: { hotRating: 2.5, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.45,
        coefficientOfPerformance: 3.61,
        annualCoolingConsumptionKw: 1.62,
        annualCoefficientOfPerformance: 3.60
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 570,
          height: 245,
          depth: 570,
          unit: "mm",
          weight: { value: 15, unit: "kg" }
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
        heatingOperatingRange: { minTemperature: "-10°C", maxTemperature: "24°C" },
        coolingOperatingRange: { minTemperature: "-10°C", maxTemperature: "52°C" },
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
            width: 570,
            height: 245,
            depth: 570,
            unit: "mm",
            weight: { value: 15, unit: "kg" }
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
    }
  },
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
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
      displayName: "Medium Room Classic High Wall Mounted Heat Pump (GS Series)"
    }
  },
  {
    name: "MLZ-25",
    modelId: MODEL_ID,
    data: {
      sku: "MLZ-KP25VF-A1",
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
      displayName: "Medium Room Cassette In-Ceiling Heat Pump (MLZ Series)"
    }
  },
  {
    name: "MLZ-35",
    modelId: MODEL_ID,
    data: {
      sku: "MLZ-KP35VF-A1",
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
      displayName: "Medium Room Cassette In-Ceiling Heat Pump (MLZ Series)"
    }
  },
  {
    name: "MLZ-50",
    modelId: MODEL_ID,
    data: {
      sku: "MLZ-KP50VF-A1",
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
      displayName: "Medium Room Cassette In-Ceiling Heat Pump (MLZ Series)"
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
      displayName: "Medium Room Surface Mounted Ceiling Heat Pump (PCA Series)"
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
      displayName: "Medium Room Surface Mounted Ceiling Heat Pump (PCA Series)"
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
      displayName: "Medium Room Surface Mounted Ceiling Heat Pump (PCA Series)"
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
      displayName: "Medium Room Surface Mounted Ceiling Heat Pump (PCA Series)"
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
      displayName: "Medium Room Surface Mounted Ceiling Heat Pump (PCA Series)"
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
      displayName: "Large Room Surface Mounted Ceiling Heat Pump (PCA Series)"
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
      displayName: "Medium Room Concealed In-Ceiling Heat Pump (SEZ Series)"
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
      displayName: "Medium Room Concealed In-Ceiling Heat Pump (SEZ Series)"
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
      displayName: "Medium Room Concealed In-Ceiling Heat Pump (SEZ Series)"
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
      displayName: "Medium Room Concealed In-Ceiling Heat Pump (SEZ Series)"
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
      displayName: "Medium Room Concealed In-Ceiling Heat Pump (SEZ Series)"
    }
  },
  {
    name: "PEAD-50",
    modelId: MODEL_ID,
    data: {
      sku: "PEAD-M50JAA",
      model: "PEAD-M50JAA Ducted",
      price: {
        originalPrice: 3738.90,  // PEAD-M50JAA: $3,399.00 + 10%
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
        annualEnergyEfficiencyRatio: 3.70,
        starRating: 2.5,
        annualHeatingConsumptionKw: 1.44,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.75,
        coefficientOfPerformance: 4.16,
        annualCoolingConsumptionKw: 1.33,
        annualCoefficientOfPerformance: 4.09
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 900,
          height: 250,
          depth: 732,
          unit: "mm",
          weight: { value: 26, unit: "kg" }
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
            width: 900,
            height: 250,
            depth: 732,
            unit: "mm",
            weight: { value: 26, unit: "kg" }
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
      displayName: "Medium Room Ducted Central Heat Pump (PEAD Series)"
    }
  },
  {
    name: "PEAD-60",
    modelId: MODEL_ID,
    data: {
      sku: "PEAD-M60JAA",
      model: "PEAD-M60JAA Ducted",
      price: {
        originalPrice: 4123.90,  // PEAD-M60JAA: $3,749.00 + 10%
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
        annualHeatingConsumptionKw: 1.84,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.52,
        coefficientOfPerformance: 3.81,
        annualCoolingConsumptionKw: 1.70,
        annualCoefficientOfPerformance: 3.75
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1100,
          height: 250,
          depth: 732,
          unit: "mm",
          weight: { value: 31, unit: "kg" }
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
            width: 1100,
            height: 250,
            depth: 732,
            unit: "mm",
            weight: { value: 31, unit: "kg" }
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
      displayName: "Medium Room Ducted Central Heat Pump (PEAD Series)"
    }
  },
  {
    name: "PEAD-71",
    modelId: MODEL_ID,
    data: {
      sku: "PEAD-M71JAA",
      model: "PEAD-M71JAA Ducted",
      price: {
        originalPrice: 4618.90,  // PEAD-M71JAA: $4,199.00 + 10%
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
        annualEnergyEfficiencyRatio: 3.61,
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
          width: 1100,
          height: 250,
          depth: 732,
          unit: "mm",
          weight: { value: 31, unit: "kg" }
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
            width: 1100,
            height: 250,
            depth: 732,
            unit: "mm",
            weight: { value: 31, unit: "kg" }
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
      displayName: "Medium Room Ducted Central Heat Pump (PEAD Series)"
    }
  },
  {
    name: "PEAD-100",
    modelId: MODEL_ID,
    data: {
      sku: "PEAD-M100JAA",
      model: "PEAD-M100JAA Ducted",
      price: {
        originalPrice: 6268.90,  // PEAD-M100JAA: $5,699.00 + 10%
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
          width: 1400,
          height: 250,
          depth: 732,
          unit: "mm",
          weight: { value: 37, unit: "kg" }
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
            width: 1400,
            height: 250,
            depth: 732,
            unit: "mm",
            weight: { value: 37, unit: "kg" }
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
      displayName: "Large Room Ducted Central Heat Pump (PEAD Series)"
    }
  },
  {
    name: "PEAD-125",
    modelId: MODEL_ID,
    data: {
      sku: "PEAD-M125JAA",
      model: "PEAD-M125JAA Ducted",
      price: {
        originalPrice: 6048.90,  // PEAD-M125JAA: $5,499.00 + 10%
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
          width: 1400,
          height: 250,
          depth: 732,
          unit: "mm",
          weight: { value: 38, unit: "kg" }
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
            width: 1400,
            height: 250,
            depth: 732,
            unit: "mm",
            weight: { value: 38, unit: "kg" }
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
      displayName: "Large Room Ducted Central Heat Pump (PEAD Series)"
    }
  },
  {
    name: "PEAD-140",
    modelId: MODEL_ID,
    data: {
      sku: "PEAD-M140JAA",
      model: "PEAD-M140JAA Ducted",
      price: {
        originalPrice: 7368.90,  // PEAD-M140JAA: $6,699.00 + 10%
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
          height: 250,
          depth: 732,
          unit: "mm",
          weight: { value: 44, unit: "kg" }
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
            height: 250,
            depth: 732,
            unit: "mm",
            weight: { value: 44, unit: "kg" }
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
      displayName: "Large Room Ducted Central Heat Pump (PEAD Series)"
    }
  },
  {
    name: "PEA-100",
    modelId: MODEL_ID,
    data: {
      sku: "PEA-M100GAA",
      model: "PEA-M100GAA Ducted",
      price: {
        originalPrice: 10448.90,
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
        annualEnergyEfficiencyRatio: 4.01,
        starRating: 3.5,
        annualHeatingConsumptionKw: 2.51,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 },
          coolingRating: { hotRating: 4.0, coldRating: 3.5, mixedRating: 3.5 }
        },
        energyEfficiencyRatio: 4.18,
        coefficientOfPerformance: 4.46,
        annualCoolingConsumptionKw: 2.39,
        annualCoefficientOfPerformance: 4.28
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1400,
          height: 400,
          depth: 634,
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
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
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
            width: 1400,
            height: 400,
            depth: 634,
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
      displayName: "Medium Room Ducted Central Heat Pump (PEA Series)"
    }
  },
  {
    name: "PEA-125",
    modelId: MODEL_ID,
    data: {
      sku: "PEA-M125GAA",
      model: "PEA-M125GAA Ducted",
      price: {
        originalPrice: 12098.90,
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
        annualEnergyEfficiencyRatio: 3.45,
        starRating: 3.0,
        annualHeatingConsumptionKw: 3.27,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 },
          coolingRating: { hotRating: 3.5, coldRating: 3.0, mixedRating: 3.0 }
        },
        energyEfficiencyRatio: 3.55,
        coefficientOfPerformance: 4.28,
        annualCoolingConsumptionKw: 3.52,
        annualCoefficientOfPerformance: 4.15
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1400,
          height: 400,
          depth: 634,
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
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
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
            width: 1400,
            height: 400,
            depth: 634,
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
      displayName: "Medium Room Ducted Central Heat Pump (PEA Series)"
    }
  },
  {
    name: "PEA-140",
    modelId: MODEL_ID,
    data: {
      sku: "PEA-M140GAA",
      model: "PEA-M140GAA Ducted",
      price: {
        originalPrice: 13088.90,
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
        annualEnergyEfficiencyRatio: 3.33,
        starRating: 2.5,
        annualHeatingConsumptionKw: 3.90,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 3.41,
        coefficientOfPerformance: 4.10,
        annualCoolingConsumptionKw: 4.10,
        annualCoefficientOfPerformance: 3.99
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 1400,
          height: 400,
          depth: 634,
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
        coolingOperatingRange: { minTemperature: "-5°C", maxTemperature: "52°C" },
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
            width: 1400,
            height: 400,
            depth: 634,
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
      displayName: "Medium Room Ducted Central Heat Pump (PEA Series)"
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
      displayName: "Medium Room Ducted Central Heat Pump (PEA Series)"
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
      displayName: "Medium Room Ducted Central Heat Pump (PEA Series)"
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
      displayName: "Medium Room Ducted Central Heat Pump (PEA Series)"
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
      displayName: "Medium Room Ducted Central Heat Pump (PEA Series)"
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
      displayName: "Large Room Ducted Central Heat Pump (PEA Series)"
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
      displayName: "Large Room Ducted Central Heat Pump (PEA Series)"
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
      displayName: "Large Room Ducted Central Heat Pump (PEA Series)"
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
        indoorUnit: {
          width: 0,
          height: 0,
          depth: 0,
          unit: "mm",
          weight: { value: 0, unit: "kg" }
        },
        outdoorUnit: {
          width: 840,
          height: 710,
          depth: 330,
          unit: "mm",
          weight: { value: 58, unit: "kg" }
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
          indoorUnit: {
            width: 0,
            height: 0,
            depth: 0,
            unit: "mm",
            weight: { value: 0, unit: "kg" }
          },
          outdoorUnit: {
            width: 840,
            height: 710,
            depth: 330,
            unit: "mm",
            weight: { value: 58, unit: "kg" }
          }
        }
      },
      displayName: "Three Port OmniCore Multi Split System"
    }
  },
  {
    name: "MXZ-4F71VGD",
    modelId: MODEL_ID,
    data: {
      sku: "MXZ-4F71VGD",
      model: "MXZ-4F71VGD Four Port OmniCore Multi",
      price: {
        originalPrice: 4948.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 7.1,
        heatingKw: 8.6,
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
        indoorUnit: {
          width: 0,
          height: 0,
          depth: 0,
          unit: "mm",
          weight: { value: 0, unit: "kg" }
        },
        outdoorUnit: {
          width: 840,
          height: 710,
          depth: 330,
          unit: "mm",
          weight: { value: 58, unit: "kg" }
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
          indoorUnit: {
            width: 0,
            height: 0,
            depth: 0,
            unit: "mm",
            weight: { value: 0, unit: "kg" }
          },
          outdoorUnit: {
            width: 840,
            height: 710,
            depth: 330,
            unit: "mm",
            weight: { value: 58, unit: "kg" }
          }
        }
      },
      displayName: "Four Port OmniCore Multi Split System (7.1kW)"
    }
  },
  {
    name: "MXZ-4F80VGD",
    modelId: MODEL_ID,
    data: {
      sku: "MXZ-4F80VGD",
      model: "MXZ-4F80VGD Four Port OmniCore Multi",
      price: {
        originalPrice: 5498.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 8.0,
        heatingKw: 9.4,
        sizeKw: 8.0,
        dehumidifyingCapacityLh: 0
      },
      energyEfficiency: {
        annualEnergyEfficiencyRatio: 3.97,
        starRating: 2.5,
        annualHeatingConsumptionKw: 2.15,
        zeroEnergyRatingLabel: {
          heatingRating: { hotRating: 2.5, coldRating: 2.0, mixedRating: 2.0 },
          coolingRating: { hotRating: 3.0, coldRating: 2.5, mixedRating: 2.5 }
        },
        energyEfficiencyRatio: 4.02,
        coefficientOfPerformance: 4.37,
        annualCoolingConsumptionKw: 1.99,
        annualCoefficientOfPerformance: 4.31
      },
      customerReviews: {
        totalReviews: 0,
        reviews: [],
        rating: 0
      },
      physicalAttributes: {
        indoorUnit: {
          width: 0,
          height: 0,
          depth: 0,
          unit: "mm",
          weight: { value: 0, unit: "kg" }
        },
        outdoorUnit: {
          width: 840,
          height: 710,
          depth: 330,
          unit: "mm",
          weight: { value: 58, unit: "kg" }
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
          indoorUnit: {
            width: 0,
            height: 0,
            depth: 0,
            unit: "mm",
            weight: { value: 0, unit: "kg" }
          },
          outdoorUnit: {
            width: 840,
            height: 710,
            depth: 330,
            unit: "mm",
            weight: { value: 58, unit: "kg" }
          }
        }
      },
      displayName: "Four Port OmniCore Multi Split System (8.0kW)"
    }
  },
  {
    name: "MXZ-5F100VGD",
    modelId: MODEL_ID,
    data: {
      sku: "MXZ-5F100VGD",
      model: "MXZ-5F100VGD Five Port OmniCore Multi",
      price: {
        originalPrice: 6598.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 10.0,
        heatingKw: 12.0,
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
        indoorUnit: {
          width: 0,
          height: 0,
          depth: 0,
          unit: "mm",
          weight: { value: 0, unit: "kg" }
        },
        outdoorUnit: {
          width: 840,
          height: 710,
          depth: 330,
          unit: "mm",
          weight: { value: 59, unit: "kg" }
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
          indoorUnit: {
            width: 0,
            height: 0,
            depth: 0,
            unit: "mm",
            weight: { value: 0, unit: "kg" }
          },
          outdoorUnit: {
            width: 840,
            height: 710,
            depth: 330,
            unit: "mm",
            weight: { value: 59, unit: "kg" }
          }
        }
      },
      displayName: "Five Port OmniCore Multi Split System"
    }
  },
  {
    name: "MXZ-6F120VGD",
    modelId: MODEL_ID,
    data: {
      sku: "MXZ-6F120VGD",
      model: "MXZ-6F120VGD Six Port OmniCore Multi",
      price: {
        originalPrice: 7698.90,
        isTaxIncluded: true,
        currency: "NZD"
      },
      stock: "In stock",
      powerCapacity: {
        coolingKw: 12.0,
        heatingKw: 14.0,
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
        indoorUnit: {
          width: 0,
          height: 0,
          depth: 0,
          unit: "mm",
          weight: { value: 0, unit: "kg" }
        },
        outdoorUnit: {
          width: 840,
          height: 710,
          depth: 330,
          unit: "mm",
          weight: { value: 59, unit: "kg" }
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
          indoorUnit: {
            width: 0,
            height: 0,
            depth: 0,
            unit: "mm",
            weight: { value: 0, unit: "kg" }
          },
          outdoorUnit: {
            width: 840,
            height: 710,
            depth: 330,
            unit: "mm",
            weight: { value: 59, unit: "kg" }
          }
        }
      },
      displayName: "Six Port OmniCore Multi Split System"
    }
  }
];