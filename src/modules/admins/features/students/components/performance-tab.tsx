import { FC, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Label,
  BarChart,
  Bar,
  LabelList,
  CartesianGrid,
  XAxis,
  LineChart,
  Line,
  YAxis,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useAIPrompt, usePerformance } from "../store/hooks";

const lineChartData = [
  { month: "January", attendanceCount: 186 },
  { month: "February", attendanceCount: 305 },
  { month: "March", attendanceCount: 237 },
  { month: "April", attendanceCount: 73 },
  { month: "May", attendanceCount: 209 },
  { month: "June", attendanceCount: 214 },
];
const lineChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const barChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const barChartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

// Performance Component
const Performance: FC = ({ studentId }) => {
  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  const { data: PERFORMANCE_DATA } = usePerformance(studentId);

  const subjectColumns = useMemo(() => {
    if (!PERFORMANCE_DATA?.marks || PERFORMANCE_DATA?.marks.length === 0)
      return [];
    return Object.keys(PERFORMANCE_DATA?.marks[0]).filter(
      (key) => key !== "month"
    );
  }, [PERFORMANCE_DATA]);

  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7300",
    "#0088fe",
    "#00c49f",
    "#ff6384",
    "#36a2eb",
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {/* <Card className="flex flex-col col-span-1">
          <CardHeader className="items-center pb-0">
            <CardTitle>Overall Performance</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {totalVisitors.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Visitors
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Performance down by 5.2% this month{" "}
              <TrendingDown className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground font-semibold">
              Showing total performance for the last 6 months
            </div>
          </CardFooter>
        </Card> */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Attendance Performance</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer className="h-60 w-full" config={barChartConfig}>
              <BarChart
                accessibilityLayer
                data={PERFORMANCE_DATA?.attendances}
                margin={{
                  top: 20,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar
                  dataKey="attendanceCount"
                  fill="var(--color-desktop)"
                  radius={8}
                >
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="grid grid-cols gap-4 mt-3">
        <Card className="flex flex-col col-span-1">
          <CardHeader>
            <CardTitle>Marks Performance</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={PERFORMANCE_DATA?.marks}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis />
                <Tooltip
                  formatter={(value, name) => [value, name]}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Legend />
                {subjectColumns.map((subject, index) => (
                  <Line
                    key={subject}
                    type="monotone"
                    dataKey={subject}
                    name={subject}
                    stroke={colors[index % colors.length]}
                    activeDot={{ r: 8 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter>
            <div className="flex w-full items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  Showing total visitors for the last 6 months
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Performance;
