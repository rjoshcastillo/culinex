"use client";

import React from "react";
import ReactECharts from "echarts-for-react";

const SalesByTime: React.FC = () => {
  const salesData = [
    { period: "Breakfast", value: 1200 },
    { period: "Lunch", value: 3200 },
    { period: "Afternoon", value: 1800 },
    { period: "Dinner", value: 4000 },
    { period: "Late Night", value: 900 },
  ];

  const periods = salesData.map((d) => d.period);
  const values = salesData.map((d) => d.value);

  const options = {
    tooltip: {
      trigger: "axis",
      backgroundColor: "#fff",
      borderColor: "#ccc",
      borderWidth: 1,
      textStyle: { color: "#000" },
    },
    grid: {
      top: 30,
      left: 0,
      right: 0,
      bottom: 0,
    },
    xAxis: {
      type: "category",
      data: periods,
      axisLine: { lineStyle: { color: "#ccc" } },
      axisLabel: { color: "#4facfe", fontSize: 12 },
      axisTick: { show: false },
      show: false,
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: "rgba(0,0,0,0.1)" } },
      axisLabel: { color: "#999" },
      show: false,
    },
    series: [
      {
        data: values,
        type: "line",
        smooth: true,
        lineStyle: {
          color: "#4facfe",
          width: 3,
        },
        itemStyle: {
          color: "#00f2fe",
        },
        areaStyle: {
          color: "rgba(79,172,254,0.25)",
        },
      },
    ],
  };

  return (
    <div className="h-full bg-white rounded-lg shadow-lg p-4">
      <p>Sales by Time of Day</p>
      <p className="text-gray-400 text-xs">
        Breakfast • Lunch • Afternoon • Dinner • Late Night
      </p>
      <div>
        <ReactECharts
          option={options}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default SalesByTime;
