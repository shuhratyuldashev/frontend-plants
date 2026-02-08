// entities/plant/ui/plant-card.tsx
import {
  Flower2,
  Droplets,
  Refrigerator,
  Sprout,
  MapPin,
  Edit,
  Trash2,
  Check,
  ArrowUpRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import type { ActionType, Plant } from "@/shared/types/plant";
import { Button } from "@/shared/ui/button";
import { Link } from "react-router-dom";

interface PlantCardProps {
  plant: Plant;
}

const actionIcons = {
  water: <Droplets className="w-4 h-4 text-blue-500" />,
  feed: <Refrigerator className="w-4 h-4 text-orange-500" />,
  repot: <Sprout className="w-4 h-4 text-green-500" />,
};

export const PlantCard = ({ plant }: PlantCardProps) => {
  const isAttention =
    plant.nextAction && new Date(plant.nextAction.dueAt) < new Date();

  return (
    <Card
      className={`overflow-hidden shadow-none ${isAttention ? "border-destructive shadow-2xl shadow-red-50 dark:shadow-red-800" : ""}`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-primary/10 rounded-full">
            <Flower2 className="w-5 h-5 text-primary" />
          </div>
          <CardTitle className="text-lg font-semibold">{plant.name}</CardTitle>
          <CardDescription>{plant.common_name}</CardDescription>
        </div>
        <Badge variant={isAttention ? "destructive" : "secondary"}>
          {isAttention ? "attention" : "ok"}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center text-sm text-muted-foreground gap-1">
          <MapPin className="w-4 h-4" />
          <span className="capitalize">{plant.location}</span>
        </div>

        {plant.nextAction ? (
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg text-sm">
            <div className="flex items-center gap-2">
              {actionIcons[plant.nextAction.type as ActionType]}
              <span className="font-medium capitalize">
                {plant.nextAction.type}
              </span>
            </div>
            <span className="text-muted-foreground">
              {new Date(plant.nextAction.dueAt).toLocaleDateString()}
            </span>
            <Button size="icon-xs" variant="outline">
              <Check />
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg text-sm">
            <span>Plant is healthy</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t flex gap-4">
        <Link className="flex-1" to={`/plants/${plant.id}`}>
          <Button className="w-full" variant="secondary">
            See Progress <ArrowUpRight />
          </Button>
        </Link>
        <Button variant="ghost">
          <Edit />
        </Button>
        <Button
          variant="ghost"
          className="text-destructive hover:text-destructive"
        >
          <Trash2 />
        </Button>
      </CardFooter>
    </Card>
  );
};
