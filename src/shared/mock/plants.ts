import type { Plant } from "@/shared/types/plant";

export const MOCK_PLANTS: Plant[] = [
  {
    id: "1",
    name: "Monstera Deliciosa",
    location: "home",
    nextAction: {
      type: "water",
      dueAt: new Date(Date.now() - 86400000).toISOString(), // Вчера (Attention)
    },
  },
  {
    id: "2",
    name: "Golden Pothos",
    location: "balcony",
    nextAction: {
      type: "feed",
      dueAt: new Date(Date.now() + 172800000).toISOString(), // Через 2 дня (OK)
    },
  },
  {
    id: "3",
    name: "Snake Plant",
    location: "outside",
    nextAction: {
      type: "repot",
      dueAt: new Date(Date.now() + 604800000).toISOString(), // Через неделю (OK)
    },
  },
  {
    id: "4",
    name: "Fiddle Leaf Fig",
    location: "home",
    // Без действия (OK)
  },
];
