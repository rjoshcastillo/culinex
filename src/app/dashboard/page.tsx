"use client";

import React, { useState } from "react";
import StatisticCard from "@/components/StatisticCard";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const series = [
    {
      name: "Revenue",
      data: [
        120000, 150000, 130000, 170000, 160000, 180000, 200000, 190000, 210000,
        220000, 230000, 250000,
      ],
    },
  ];

  const options = {
    chart: {
      id: "revenue-line",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    colors: ["#10B981"],
    tooltip: {
      y: {
        formatter: (val: number) =>
          val.toLocaleString("en-PH", { style: "currency", currency: "PHP" }),
      },
    },
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Statistic Cards */}
      <div className="grid w-full gap-4 sx:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        <StatisticCard
          label="Revenue"
          value={326}
          prevValue={300}
          formatValue={(n) =>
            n.toLocaleString("en-PH", { style: "currency", currency: "PHP" })
          }
        />
        <StatisticCard label="Order" value={423} prevValue={123} />
        <StatisticCard
          label="Revenue"
          value={123}
          prevValue={300}
          formatValue={(n) =>
            n.toLocaleString("en-PH", { style: "currency", currency: "PHP" })
          }
        />
        <StatisticCard label="Order" value={423} prevValue={123} />
        <StatisticCard
          label="Revenue"
          value={444}
          prevValue={300}
          formatValue={(n) =>
            n.toLocaleString("en-PH", { style: "currency", currency: "PHP" })
          }
        />
      </div>

      {/* Dashboard Grid: Small Cards + Big Chart */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {/* Small cards grid */}
        <div className="grid grid-cols-2 gap-4 md:col-span-1">
          <div className="bg-blue-500 p-4 rounded-lg shadow-lg h-34 w-full">
            Small 1
          </div>
          <div className="bg-green-500 p-4 rounded-lg shadow-lg h-34 w-full">
            Small 2
          </div>
          <div className="bg-yellow-500 p-4 rounded-lg shadow-lg h-34 w-full">
            Small 3
          </div>
          <div className="bg-purple-500 p-4 rounded-lg shadow-lg h-34 w-full">
            Small 4
          </div>
        </div>

        {/* Big chart */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:row-span-2 md:col-span-2">
          <Chart options={options} series={series} type="line" height={400} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-500 rounded-lg min-h-100 shadow-lg">Col 1</div>
        <div className="bg-purple-500 rounded-lg shadow-lg">Col 2</div>
        <div className="bg-yellow-500 rounded-lg shadow-lg">Col 3</div>
      </div>
      <div className="w-full bg-yellow-500 shadow-lg rounded-lg min-h-150">
        Table
      </div>
    </div>
  );
};

export default Dashboard;
