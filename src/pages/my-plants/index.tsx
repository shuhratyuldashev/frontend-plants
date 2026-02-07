// pages/plants/list/ui/plants-page.tsx




import { PlantCard } from "@/entities/plant/ui/plant-card";

import { MOCK_PLANTS } from "@/shared/mock/plants";
import { AddPlantButton } from "@/widgets/add-plant-button/ui";

export const MyPlantsPage = () => {
  //   const { data: plants, isLoading, isError, error } = usePlants();

  return (
    <main className="container mx-auto py-10 max-w-4xl">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-medium">My Plants</h1>
        <AddPlantButton />
      </header>

      {/* {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-[200px] w-full rounded-xl" />
          ))}
        </div>
      )} */}

      {/* {isError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error instanceof Error ? error.message : "Failed to load plants."}
          </AlertDescription>
        </Alert>
      )} */}

      {/* {!isLoading && !isError && plants?.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed rounded-xl">
          <Leaf className="w-12 h-12 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold">No plants yet</h3>
          <p className="text-muted-foreground mb-6">Start your collection today!</p>
          {/* <AddPlantButton /> 
        </div>
      )} */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PLANTS?.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </main>
  );
};
