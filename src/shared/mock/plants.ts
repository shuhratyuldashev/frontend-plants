import type { Plant } from "@/shared/types/plant";

export const MOCK_PLANTS: Plant[] = [
  {
    id: "1",
    name: "Flora",
    common_name: "Monstera Deliciosa",
    location: "home",
    nextAction: {
      type: "water",
      dueAt: new Date(Date.now() - 86400000).toISOString(),
    },
  },
  {
    id: "2",
    name: "Lili",
    common_name: "Golden Pothos",
    location: "balcony",
    nextAction: {
      type: "feed",
      dueAt: new Date(Date.now() + 172800000).toISOString(),
    },
  },
  {
    id: "3",
    name: "John Doe",
    common_name: "Snake Plant",
    location: "outside",
    nextAction: {
      type: "repot",
      dueAt: new Date(Date.now() + 604800000).toISOString(),
    },
  },
  {
    id: "4",
    name: "John Doe",
    common_name: "Fiddle Leaf Fig",
    location: "home",
    // Без действия (OK)
  },
];
