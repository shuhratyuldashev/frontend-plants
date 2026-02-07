// features/add-plant/ui/add-plant-button.tsx
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button";

export const AddPlantButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/add")} className="gap-2">
      <Plus className="w-4 h-4" />
      Add Plant
    </Button>
  );
};
