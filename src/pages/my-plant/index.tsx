import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { PlantCard } from "@/entities/plant/ui/plant-card";
import { Droplets, Refrigerator, Sprout, Check } from "lucide-react";
import type { Plant } from "@/shared/types/plant";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

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
];

type ActionType = "water" | "feed" | "repot";

interface PastAction {
  id: string;
  type: ActionType;
  at: string;
  note?: string;
}

const ICONS: Record<ActionType, React.ReactNode> = {
  water: <Droplets className="w-4 h-4 text-blue-500" />,
  feed: <Refrigerator className="w-4 h-4 text-orange-500" />,
  repot: <Sprout className="w-4 h-4 text-green-500" />,
};

const MOCK_ACTIONS: Record<string, PastAction[]> = {
  "1": [
    {
      id: "a1",
      type: "water",
      at: new Date(Date.now() - 86400000 * 3).toISOString(),
      note: "Полив 300мл",
    },
    {
      id: "a2",
      type: "feed",
      at: new Date(Date.now() - 86400000 * 10).toISOString(),
      note: "Удобрение слабое",
    },
    {
      id: "a3",
      type: "water",
      at: new Date(Date.now() - 86400000 * 13).toISOString(),
      note: "Полив 200мл",
    },
  ],
  "2": [
    {
      id: "b1",
      type: "feed",
      at: new Date(Date.now() - 86400000 * 5).toISOString(),
      note: "Органика",
    },
  ],
};

function generateHealthHistory(plantId: string, days = 14) {
  const seed = plantId.split("").reduce((s, c) => s + c.charCodeAt(0), 0);
  const data: { date: string; health: number }[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const t = Date.now() - i * 24 * 60 * 60 * 1000;
    const noise = Math.abs(Math.sin((seed + i) * 0.73)) * 10;
    const base = 70 + (seed % 10) - i * 0.3;
    const health = Math.max(20, Math.min(100, Math.round(base + noise)));
    data.push({ date: new Date(t).toISOString(), health });
  }
  return data;
}

export default function MyPlantPage(): React.ReactNode {
  const { id } = useParams<{ id: string }>();
  const plant = useMemo(() => MOCK_PLANTS.find((p) => p.id === id), [id]);

  const history = useMemo(
    () => (id ? generateHealthHistory(id, 14) : []),
    [id],
  );
  const actions = useMemo(
    () => (id && MOCK_ACTIONS[id] ? MOCK_ACTIONS[id] : []),
    [id],
  );

  if (!plant) {
    return (
      <main className="container mx-auto max-w-4xl py-8">
        <Card>
          <CardHeader>
            <CardTitle>Plant not found</CardTitle>
            <CardDescription>
              Проверьте id или вернитесь к списку растений.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Link to="/plants">
                <Button variant="secondary">Вернуться</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="container mx-auto max-w-5xl py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <aside className="md:col-span-1">
          <PlantCard plant={plant} />

          <Card className="mt-4 shadow-none">
            <CardHeader>
              <CardTitle>Actions history</CardTitle>
              <CardDescription>Последние действия по уходу</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {actions.length === 0 && (
                  <li className="text-sm text-muted-foreground">Нет записей</li>
                )}
                {actions.map((a) => (
                  <li key={a.id} className="flex items-start gap-3">
                    <div className="pt-1">{ICONS[a.type]}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium capitalize">{a.type}</div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(a.at).toLocaleString()}
                        </div>
                      </div>
                      {a.note && (
                        <div className="text-sm text-muted-foreground">
                          {a.note}
                        </div>
                      )}
                    </div>
                    <Button size="icon-xs" variant="ghost">
                      <Check />
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </aside>

        <section className="md:col-span-2 space-y-6">
          <Card className="shadow-none">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Состояние растения</CardTitle>
                  <CardDescription className="text-sm">
                    График здоровья за 14 дней
                  </CardDescription>
                </div>
                <Badge>{plant.location}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div style={{ width: "100%", height: 240 }}>
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart
                    data={history}
                    margin={{ top: 8, right: 24, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="date"
                      tickFormatter={(iso) =>
                        new Date(iso).toLocaleDateString()
                      }
                      minTickGap={20}
                    />
                    <YAxis domain={[20, 100]} />
                    <Tooltip
                      labelFormatter={(iso) => new Date(iso).toLocaleString()}
                    />
                    <Line
                      type="monotone"
                      dataKey="health"
                      stroke="#10B981"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="ghost">Экспорт CSV</Button>
            </CardFooter>
          </Card>

          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Рекомендованные действия</CardTitle>
              <CardDescription>Что делать дальше</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-muted rounded">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-5 h-5" />
                    <div>
                      <div className="text-sm font-medium">Полив</div>
                      <div className="text-xs text-muted-foreground">
                        через 1 день
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-muted rounded">
                  <div className="flex items-center gap-2">
                    <Refrigerator className="w-5 h-5" />
                    <div>
                      <div className="text-sm font-medium">Подкормка</div>
                      <div className="text-xs text-muted-foreground">
                        через 7 дней
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-muted rounded">
                  <div className="flex items-center gap-2">
                    <Sprout className="w-5 h-5" />
                    <div>
                      <div className="text-sm font-medium">Пересадка</div>
                      <div className="text-xs text-muted-foreground">
                        через 30 дней
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
