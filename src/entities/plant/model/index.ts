import { useQuery } from "@tanstack/react-query";
import { getPlants } from "../api";

export const usePlants = () => {
  return useQuery({
    queryKey: ["plants"],
    queryFn: getPlants,
  });
};
