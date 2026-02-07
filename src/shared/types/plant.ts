// entities/plant/model/types.ts
export type PlantLocation = "home" | "balcony" | "outside";
export type ActionType = "water" | "feed" | "repot";
export type FilterType = "All" | "Succulent" | "Araceae" | "Low Light";

export interface Plant {
  id: string;
  name: string;
  location: PlantLocation;
  nextAction?: {
    type: ActionType;
    dueAt: string;
  };
}
