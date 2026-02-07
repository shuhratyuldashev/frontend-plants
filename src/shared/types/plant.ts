// entities/plant/model/types.ts
export type PlantLocation = "home" | "balcony" | "outside";
export type ActionType = "water" | "feed" | "repot";
export type FilterType = "All" | "Succulent" | "Araceae" | "Low Light";

export interface DefaultImage {
  medium_url: string;
}

export interface Specifications {
  watering?: string;
  light?: string[];
}

export interface MainSpecies {
  description?: string;
}

export interface Plant {
  id: string;
  name?: string; // Made optional if common_name is used primarily
  common_name?: string;
  scientific_name?: string[];
  family_common_name?: string;
  cycle?: string;
  specifications?: Specifications;
  default_image?: DefaultImage;
  main_species?: MainSpecies;
  location?: PlantLocation; // Made optional as it's not always present in the mock data
  nextAction?: {
    type: ActionType;
    dueAt: string;
  };
}

