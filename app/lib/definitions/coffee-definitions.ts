import { Product } from "@/app/lib/definitions/shared";

export type SpecialtyCoffee = Product & {
  originType: OriginType;
  singleOriginName?: SingleOriginName;
  beanType: BeanType;
  blendRatio?: string;
  roastingLocation: string;
  brewMethod: BrewMethod;
  roastLevel: RoastLevel;
  roastLevelDetail?: RoastLevelDetail;
  processingMethod: ProcessingMethod;
  /*
        Elevation in meters.
        Array of one number gives an approximate elevation.
        Array of two numbers gives a range.
      */
  elevation?: number[];
  certifications: Certification[];
  isDecaf: boolean;
  primaryFlavors: string[];
  secondaryFlavors?: string[];
  body: Body;
  acidity: Acidity;
  priceFor250g: number;
  priceFor1kg: number;
};

type OriginType = "single origin" | "blend";

type BrewMethod = "filter" | "espresso";

type Body = "light" | "medium" | "full";

type Acidity = "light" | "medium" | "high";

type SingleOriginName = {
  country: string;
  region: string;
  farm?: string;
};

type ProcessingMethod =
  | "washed"
  | "natural"
  | "wet-hulled"
  | "honey"
  | "anaerobic"
  | "carbonic"
  | "pulped natural";

type RoastLevel =
  | "light"
  | "medium light"
  | "medium"
  | "medium dark"
  | "dark"
  | "ultra dark";

type Certification =
  | "fair trade"
  | "rainforest alliance"
  | "organic"
  | "bird-friendly";

type RoastLevelDetail =
  | "cinnamon"
  | "new england"
  | "city"
  | "full city"
  | "vienna"
  | "french"
  | "italian"
  | "spanish";

type BeanType =
  | "arabica"
  | "robusta"
  | "liberica"
  | "excelsa"
  | "arabica-robusta mix";
