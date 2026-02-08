import { Button } from "@/shared/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

import type { Plant } from "@/shared/types/plant";

export default function AddPlantPage() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [search, setSearch] = useState("");

  const API_KEY = import.meta.env.VITE_PERENUAL_API_KEY;

  useEffect(() => {
    axios
      .get(`https://perenual.com/api/species-list?key=${API_KEY}`)
      .then(({ data }) => setPlants(data.data));
  }, []);

  const filteredGrouped = useMemo(() => {
    const filtered = plants.filter((p) =>
      p.common_name?.toLowerCase().includes(search.toLowerCase()),
    );

    return Object.entries(
      filtered.reduce<Record<string, Plant[]>>((acc, plant) => {
        const key = plant.cycle ?? "Other";
        acc[key] ??= [];
        acc[key].push(plant);
        return acc;
      }, {}),
    ).sort(([a], [b]) => a.localeCompare(b));
  }, [plants, search]);

  return (
    <main className="container mx-auto py-10 max-w-4xl">
      <h1 className="text-3xl font-medium">Add Plant</h1>

      <form className="mt-10">
        <FieldGroup>
          <Field>
            <FieldLabel>Plant Name</FieldLabel>
            <Input placeholder="Give name to your plant" />
            <FieldDescription>Enter the name of your plant</FieldDescription>
          </Field>

          <Field>
            <FieldLabel>Choose the plant</FieldLabel>
            <Select>
              <SelectTrigger className="w-[320px]">
                <SelectValue placeholder="Choose the plant" />
              </SelectTrigger>

              {/* FIX: Добавлен position="popper".
                 Это отключает "item-aligned" поведение Radix UI, которое вызывало
                 прыжки контента при скролле и наведении, особенно при наличии поиска внутри.
              */}
              <SelectContent
                position="popper"
                className="h-[300px] overflow-y-auto p-2"
              >
                {/* Совет: Для инпутов внутри Select желательно останавливать всплытие событий клавиш,
                  чтобы нажатие пробела в поиске не выбирало элемент списка.
                */}
                <Input
                  placeholder="Search plant..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => e.stopPropagation()}
                  className="mb-2 h-8"
                />

                {filteredGrouped.map(([group, items]) => (
                  <div key={group}>
                    <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">
                      {group}
                    </div>

                    {items
                      .sort((a, b) =>
                        (a.common_name || "").localeCompare(
                          b.common_name || "",
                        ),
                      )
                      .map((plant) => (
                        <SelectItem key={plant.id} value={String(plant.id)}>
                          {plant.common_name}
                        </SelectItem>
                      ))}
                  </div>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel>Plant Location</FieldLabel>
            <Select>
              <SelectTrigger className="w-[320px]">
                <SelectValue placeholder="Choose the plant location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bed">Bed</SelectItem>
                <SelectItem value="bed">Balcony</SelectItem>
                <SelectItem value="bed">Outside</SelectItem>
                <SelectItem value="pot">Pot</SelectItem>
                <SelectItem value="window">Window</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <div className="flex cursor-pointer justify-end">
            <Button>Add Plant</Button>
          </div>
        </FieldGroup>
      </form>
    </main>
  );
}
