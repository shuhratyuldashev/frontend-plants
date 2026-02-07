import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
} from "@/shared/ui/dropdown-menu";
import { ArrowDown, Filter } from "lucide-react";

import type { FilterType } from "@/shared/types/plant";

interface PlantsFilterSortProps {
  currentSort: "asc" | "desc";
  currentFilter: FilterType;
  onSort: (order: "asc" | "desc") => void;
  onFilter: (filter: FilterType) => void;
}

export default function PlantsFilterSort({
  currentSort,
  currentFilter,
  onSort,
  onFilter,
}: PlantsFilterSortProps) {
  const filters: FilterType[] = ["All", "Succulent", "Araceae", "Low Light"];

  return (
    <div className="flex gap-4 items-center">
      {/* Sort Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon-lg" variant="ghost">
            <ArrowDown
              className={
                currentSort === "desc"
                  ? "rotate-180 transition-transform"
                  : "transition-transform"
              }
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Sort Order</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onSort("asc")}>
            Name (A → Z)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSort("desc")}>
            Name (Z → A)
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Filter Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon-lg"
            variant={currentFilter !== "All" ? "secondary" : "ghost"}
          >
            <Filter className={currentFilter !== "All" ? "text-primary" : ""} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Filter Plants</DropdownMenuLabel>
          <DropdownMenuGroup>
            {filters.map((f) => (
              <DropdownMenuCheckboxItem
                key={f}
                checked={currentFilter === f}
                onCheckedChange={() => onFilter(f)}
              >
                {f}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
