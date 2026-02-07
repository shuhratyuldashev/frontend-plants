// entities/plant/api/plant.api.ts
import type { Plant } from "@/shared/types/plant";
import { MOCK_PLANTS } from "@/shared/mock/plants";

const SLEEP_MS = 1000;

export const getPlants = async (): Promise<Plant[]> => {
  // Имитация задержки сети
  await new Promise((resolve) => setTimeout(resolve, SLEEP_MS));

  // Имитация ошибки (раскомментируйте для теста Error State)
  // if (Math.random() > 0.8) throw new Error("Server is unreachable");

  return [...MOCK_PLANTS];

  // Имитация пустого списка (раскомментируйте для теста Empty State)
  // return [];
};
