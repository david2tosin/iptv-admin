"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileBarChart2, MonitorDown, Users } from "lucide-react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  Rectangle,
} from "recharts";

const data = [
  {
    name: "Jan",
    products: 4000,
    views: 2400,
  },
  {
    name: "Feb",
    products: 3000,
    views: 1398,
  },
  {
    name: "Mar",
    products: 2000,
    views: 9800,
  },
  {
    name: "Apr",
    products: 2780,
    views: 3908,
  },
  {
    name: "May",
    products: 1890,
    views: 4800,
  },
  {
    name: "Jun",
    products: 2390,
    views: 3800,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Downloads</CardTitle>
            <MonitorDown />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <Users />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reports</CardTitle>
            <FileBarChart2 />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <ResponsiveContainer width="100%" height={350} className="bg-white">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar
            dataKey="products"
            fill="#e1e1ff"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="views"
            fill="#b5eeff"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
