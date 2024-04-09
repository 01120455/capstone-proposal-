"use client";
import React, { useState } from "react";
import Sidemenu from "../../components/sidemenu/page";
import EmployeeAvatar from "../../components/employeeavatar/page";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Dashboard({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
    to: new Date(), // Set "to" date to current date
  });
  return (
    <div className="flex h-screen">
      <Sidemenu />
      <div className="flex-1 overflow-y-auto p-8">
        <EmployeeAvatar />
        <div className="flex items-center space-x-4 mb-4 sm:mb-0 sm:mb-4">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className={cn("grid gap-2", className)}>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full sm:w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Card className="bg-[#57ab5a] text-white">
            <CardHeader>
              <CardTitle>Gross Revenue</CardTitle>
              <CardDescription className="text-white">₱100,000</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Last Month: ₱100,000</p>
            </CardContent>
          </Card>
          <Card className="bg-[#57a0ab] text-white">
            <CardHeader>
              <CardTitle>Gross Sale</CardTitle>
              <CardDescription className="text-white">₱100,000</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Last Month: ₱100,000</p>
            </CardContent>
          </Card>
          <Card className="bg-[#ab5757] text-white">
            <CardHeader>
              <CardTitle>Items Sold</CardTitle>
              <CardDescription className="text-white">₱100,000</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Last Month: ₱100,000</p>
            </CardContent>
          </Card>
          <Card className="bg-[#ab57a0] text-white">
            <CardHeader>
              <CardTitle>Gross Margin</CardTitle>
              <CardDescription className="text-white">77%</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Last Month: 77%</p>
            </CardContent>
          </Card>
          <Card className="bg-[#a0ab57] text-white">
            <CardHeader>
              <CardTitle>Total Expense</CardTitle>
              <CardDescription className="text-white">₱100,000</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Last Month: ₱100,000</p>
            </CardContent>
          </Card>
        </div>
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Sales</h2>
          <p className="text-sm mb-4">
            Analysis of different rice varieties based on their selling
            performance
          </p>
          <LineChart className="w-full h-[300px]" />
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">
            Revenue and Profit per product
          </h2>
          <p className="text-sm mb-4">
            Analysis of Revenue and profit per product
          </p>
          <BarChart className="w-full h-[300px]" />
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">
            White Rice Varieties Sales Performance
          </h2>
          <p className="text-sm mb-4">
            Analysis of different rice varieties based on their selling
            performance
          </p>
          <BarChart className="w-full h-[300px]" />
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">
            Milled Rice Grain Production Variety
          </h2>
          <p className="text-sm mb-4">
            Analysis of Rice Grain Varieties from production
          </p>
          <BarChart className="w-full h-[300px]" />
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-4">
            Rice Production Loss (Resico)
          </h2>
          <p className="text-sm mb-4">
            Analysis of Rice Grain Loss from production
          </p>
          <BarChart className="w-full h-[300px]" />
        </section>
      </div>
    </div>
  );
}

function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function LineChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "japan",
            color: "hsl(142, 70%, 50%)",
            data: [
              {
                x: "plane",
                y: 243,
              },
              {
                x: "helicopter",
                y: 293,
              },
              {
                x: "boat",
                y: 0,
              },
              {
                x: "train",
                y: 168,
              },
              {
                x: "subway",
                y: 7,
              },
              {
                x: "bus",
                y: 22,
              },
              {
                x: "car",
                y: 29,
              },
              {
                x: "moto",
                y: 163,
              },
              {
                x: "bicycle",
                y: 112,
              },
              {
                x: "horse",
                y: 218,
              },
              {
                x: "skateboard",
                y: 159,
              },
              {
                x: "others",
                y: 59,
              },
            ],
          },
          {
            id: "france",
            color: "hsl(242, 70%, 50%)",
            data: [
              {
                x: "plane",
                y: 90,
              },
              {
                x: "helicopter",
                y: 77,
              },
              {
                x: "boat",
                y: 16,
              },
              {
                x: "train",
                y: 295,
              },
              {
                x: "subway",
                y: 50,
              },
              {
                x: "bus",
                y: 182,
              },
              {
                x: "car",
                y: 110,
              },
              {
                x: "moto",
                y: 261,
              },
              {
                x: "bicycle",
                y: 283,
              },
              {
                x: "horse",
                y: 163,
              },
              {
                x: "skateboard",
                y: 262,
              },
              {
                x: "others",
                y: 27,
              },
            ],
          },
          {
            id: "us",
            color: "hsl(286, 70%, 50%)",
            data: [
              {
                x: "plane",
                y: 186,
              },
              {
                x: "helicopter",
                y: 156,
              },
              {
                x: "boat",
                y: 201,
              },
              {
                x: "train",
                y: 28,
              },
              {
                x: "subway",
                y: 58,
              },
              {
                x: "bus",
                y: 50,
              },
              {
                x: "car",
                y: 14,
              },
              {
                x: "moto",
                y: 126,
              },
              {
                x: "bicycle",
                y: 155,
              },
              {
                x: "horse",
                y: 284,
              },
              {
                x: "skateboard",
                y: 192,
              },
              {
                x: "others",
                y: 14,
              },
            ],
          },
          {
            id: "germany",
            color: "hsl(33, 70%, 50%)",
            data: [
              {
                x: "plane",
                y: 15,
              },
              {
                x: "helicopter",
                y: 29,
              },
              {
                x: "boat",
                y: 0,
              },
              {
                x: "train",
                y: 133,
              },
              {
                x: "subway",
                y: 214,
              },
              {
                x: "bus",
                y: 193,
              },
              {
                x: "car",
                y: 56,
              },
              {
                x: "moto",
                y: 202,
              },
              {
                x: "bicycle",
                y: 40,
              },
              {
                x: "horse",
                y: 204,
              },
              {
                x: "skateboard",
                y: 203,
              },
              {
                x: "others",
                y: 112,
              },
            ],
          },
          {
            id: "norway",
            color: "hsl(59, 70%, 50%)",
            data: [
              {
                x: "plane",
                y: 29,
              },
              {
                x: "helicopter",
                y: 19,
              },
              {
                x: "boat",
                y: 271,
              },
              {
                x: "train",
                y: 101,
              },
              {
                x: "subway",
                y: 82,
              },
              {
                x: "bus",
                y: 62,
              },
              {
                x: "car",
                y: 192,
              },
              {
                x: "moto",
                y: 123,
              },
              {
                x: "bicycle",
                y: 81,
              },
              {
                x: "horse",
                y: 260,
              },
              {
                x: "skateboard",
                y: 198,
              },
              {
                x: "others",
                y: 171,
              },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        pointSize={6}
        useMesh={true}
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

export { Dashboard };
