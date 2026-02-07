import type { Post } from "@/shared/types/post";

export const MOCK_POSTS: Post[] = [
  {
    id: "post-1",
    author: "green_guru",
    title: "How often should you water houseplants?",
    body: "Overwatering is the most common mistake. Always check the top 2–3 cm of soil before watering. Most indoor plants prefer slightly dry soil between watering cycles.",
    imageUrl:
      "https://i.pinimg.com/736x/b7/bd/02/b7bd02f0fd57f087febc0bf2f46cf236.jpg",
    createdAt: new Date("2024-11-10"),
  },
  {
    id: "post-2",
    author: "plantlover",
    title: "Best plants for low-light apartments",
    body: "Snake plant, ZZ plant, and pothos thrive in low light. They are perfect for apartments with north-facing windows.",
    imageUrl:
      "https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?q=80&w=1200",
    createdAt: new Date("2024-11-15"),
  },
  {
    id: "post-3",
    author: "urban_jungle",
    title: "Why are my plant leaves turning yellow?",
    body: "Yellow leaves usually indicate overwatering or poor drainage. Check your pot for drainage holes and reduce watering frequency.",
    imageUrl:
      "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=1200",
    createdAt: new Date("2024-11-20"),
  },
  {
    id: "post-4",
    author: "botany_daily",
    title: "Top 5 easy plants for beginners",
    body: "Start with pothos, spider plant, peace lily, aloe vera, and snake plant. They are forgiving and adapt well to indoor conditions.",
    imageUrl:
      "https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?q=80&w=1200",
    createdAt: new Date("2024-11-25"),
  },
  {
    id: "post-5",
    author: "plantcare101",
    title: "Do plants really clean the air?",
    body: "Plants do improve air quality slightly, but their biggest benefit is psychological. They reduce stress and improve focus.",
    imageUrl:
      "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1200",
    createdAt: new Date("2024-12-01"),
  },
];
