"use client";

import React from "react";
import ReactECharts from "echarts-for-react";

const FoodCostVsSales: React.FC = () => {
  const sales = 10000;
  const foodCost = 3500;
  const profit = sales - foodCost;

  const options = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
    },
    legend: {
      bottom: 20,
      left: "center",
      textStyle: { color: "#555" },
    },
    series: [
      {
        name: "Food Cost vs Sales",
        type: "pie",
        radius: ["40%", "70%"],
        center: ["50%", "45%"],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        labelLine: {
          show: true,
        },
        data: [
          {
            value: foodCost,
            name: "Food Cost",
            itemStyle: { color: "#ff7675" },
          },
          {
            value: profit,
            name: "Gross Profit",
            itemStyle: { color: "#55efc4" },
          },
        ],
      },
    ],
  };

  return (
    <div className="w-full shadow-lg bg-white h-[380px] rounded-md">
      <div className="text-center pt-5">
        <p>Food Cost vs Sales</p>
        <p className="text-gray-400 text-xs">Breakdown of total revenue</p>
      </div>
      <ReactECharts option={options} style={{ width: "100%" }} />
    </div>
  );
};

export default FoodCostVsSales;
