enum ProcessingMethod {
  WASHED = "washed",
  NATURAL = "natural",
  WET_HULLED = "wet-hulled",
  HONEY = "honey",
  ANAEROBIC = "anaerobic",
  CARBONIC = "carbonic",
  PULPED_NATURAL = "pulped natural",
}

enum RoastLevel {
  LIGHT = "light",
  MEDIUM_LIGHT = "medium-light",
  MEDIUM = "medium",
  MEDIUM_DARK = "medium-dark",
  DARK = "dark-roast",
  ULTRA_DARK = "ultra-dark",
}

enum Certification {
  FAIR_TRADE = "fair trade",
  RAINFOREST_ALLIANCE = "rainforest alliance",
  ORGANIC = "organic",
  BIRD_FRIENDLY = "bird-friendly",
}

enum RoastLevelDetail {
  CINNAMON = "cinnamon",
  NEW_ENGLAND = "new england",
  CITY = "city",
  FULL_CITY = "full city",
  VIENNA = "vienna",
  FRENCH = "french",
  ITALIAN = "italian",
  SPANISH = "spanish",
}

enum BeanType {
  ARABICA = "arabica",
  ROBUSTA = "robusta",
  LIBERICA = "liberica",
  EXCELSA = "excelsa",
  ARABICA_ROBUSTA_MIX = "arabica-robusta mix",
}

export interface SpecialtyCoffee {
  id: string;
  name: string;
  originType: "single origin" | "blend";
  singleOriginName?: { country: string; region: string; farmName?: string };
  beanType: BeanType;
  blendRatio?: string;
  roastingLocation: string;
  brewMethods: "filter" | "espresso";
  roastLevel: RoastLevel;
  roastLevelDetail?: RoastLevelDetail;
  processingMethod: ProcessingMethod;
  elevation: number;
  certifications: Certification[];
  decaf: boolean;
  primaryFlavors: string[];
  secondaryFlavors: string[];
  body: "light" | "medium" | "full";
  acidity: "low" | "medium" | "high";
  priceFor250g: number;
  priceFor1kg: number;
}
