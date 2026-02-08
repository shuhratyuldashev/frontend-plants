import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import { ScrollArea } from "@/shared/ui/scroll-area";
import { Bookmark } from "lucide-react";

import PlantsFilterSort from "./ui/plants-filter-bar";
import axios from "axios";
import type { Plant, FilterType } from "@/shared/types/plant";

export default function PlantsGuidePage() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const [filter, setFilter] = useState<FilterType>("All");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const API_KEY = import.meta.env.VITE_PERENUAL_API_KEY;

  useEffect(() => {
    axios
      .get(`https://perenual.com/api/species-list?key=${API_KEY}`)
      .then(({ data }) => setPlants(data.data))
      .then(() => console.log(plants));
  }, []);

  const filteredPlants = plants
    .filter((p) => {
      if (filter === "All") return true;

      const familyMatch = p.family_common_name === filter;
      const lightMatch = p.specifications?.light?.includes(filter);

      return familyMatch || lightMatch;
    })
    .sort((a, b) => {
      const nameA =
        a.common_name ||
        (Array.isArray(a.scientific_name)
          ? a.scientific_name[0]
          : a.scientific_name) ||
        "";
      const nameB =
        b.common_name ||
        (Array.isArray(b.scientific_name)
          ? b.scientific_name[0]
          : b.scientific_name) ||
        "";
      return sort === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });

  return (
    <main className="container mx-auto py-8 max-w-4xl">
      <header className="mb-4 flex justify-between items-center">
        <h1 className="font-medium text-3xl">Plants Guide</h1>
        <PlantsFilterSort
          currentSort={sort}
          currentFilter={filter}
          onSort={setSort}
          onFilter={setFilter}
        />
      </header>

      <ScrollArea className="h-[calc(100vh-150px)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-10">
          {filteredPlants.map((plant) => (
            <Card
              key={plant.id}
              className="cursor-pointer p-0 hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            >
              <CardHeader className="p-0 relative">
                {plant.default_image?.medium_url ? (
                  <div className="w-full h-40 overflow-hidden bg-secondary">
                    <img
                      src={plant.default_image.medium_url}
                      alt={plant.common_name}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-full h-40 bg-secondary flex items-center justify-center text-muted-foreground">
                    No Image
                  </div>
                )}
                <Button
                  size="icon-sm"
                  variant="secondary"
                  className="absolute top-2 right-2 z-10 opacity-80 hover:opacity-100"
                >
                  <Bookmark className="w-4 h-4" />
                </Button>
              </CardHeader>

              <CardContent className="space-y-1 p-4 flex-grow">
                <h3
                  className="font-semibold text-lg truncate"
                  title={plant.common_name}
                >
                  {plant.common_name}
                </h3>
                <p className="text-sm text-muted-foreground italic truncate">
                  {Array.isArray(plant.scientific_name)
                    ? plant.scientific_name.join(", ")
                    : plant.scientific_name}
                </p>{" "}
                <div className="pt-2 text-sm">
                  <span className="font-medium">Type:</span>{" "}
                  {plant.family_common_name || "N/A"}
                </div>
              </CardContent>

              <CardFooter className="border-t p-3 bg-secondary/20 mt-auto">
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => setSelectedPlant(plant)}
                >
                  See Details
                </Button>
              </CardFooter>
            </Card>
          ))}

          {filteredPlants.length === 0 && (
            <div className="col-span-full text-center py-10 text-muted-foreground">
              No plants found matching "{filter}".
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Details Modal */}
      {selectedPlant && (
        <Dialog
          open={!!selectedPlant}
          onOpenChange={(open) => !open && setSelectedPlant(null)}
        >
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {selectedPlant.common_name}{" "}
                <span className="text-muted-foreground font-normal text-sm ml-2">
                  (
                  {Array.isArray(selectedPlant.scientific_name)
                    ? selectedPlant.scientific_name.join(", ")
                    : selectedPlant.scientific_name}
                  )
                </span>{" "}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {selectedPlant.default_image?.medium_url && (
                <div className="w-full h-64 overflow-hidden rounded-md bg-secondary">
                  <img
                    src={selectedPlant.default_image.medium_url}
                    alt={selectedPlant.common_name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold">Category</p>
                  <p className="text-muted-foreground">
                    {selectedPlant.family_common_name || "N/A"}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Watering</p>
                  <p className="text-muted-foreground">
                    {selectedPlant.specifications?.watering || "N/A"}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="font-semibold">Sunlight</p>
                  <p className="text-muted-foreground">
                    {selectedPlant.specifications?.light
                      ? selectedPlant.specifications.light.join(", ")
                      : "N/A"}
                  </p>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-1">Description</p>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedPlant.main_species?.description ||
                    "No description available"}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </main>
  );
}
