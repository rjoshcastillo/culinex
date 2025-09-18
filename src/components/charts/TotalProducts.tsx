"use client";

import React from "react";
import ReactECharts from "echarts-for-react";

const TotalProducts: React.FC = () => {
  const salesData = [
    { period: "Coffee", value: 1200 },
    { period: "Foods", value: 3200 },
    { period: "Pastry", value: 1800 },
    { period: "Drinks", value: 4000 },
    { period: "Others", value: 900 },
  ];

  const periods = salesData.map((d) => d.period);
  const values = salesData.map((d) => d.value);

  const options = {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      backgroundColor: "#fff",
      borderColor: "#ccc",
      borderWidth: 1,
      textStyle: { color: "#000" },
    },
    grid: {
      top: 30,
      left: 0,
      right: 0,
      bottom: -15,
      containLabel: true,
    },
    xAxis: {
      show: false,
      type: "category",
      data: periods,
      axisLine: { lineStyle: { color: "#ccc" } },
      axisLabel: { color: "#4facfe", fontSize: 12 },
      axisTick: { show: false },
    },
    yAxis: {
      show: false,
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: "rgba(0,0,0,0.1)" } },
      axisLabel: { color: "#999" },
    },
    series: [
      {
        data: values,
        type: "bar",
        barWidth: "50%",
        itemStyle: {
          color: (params: any) => {
            const colors = [
              "#0f0f0fff",
              "#4facfe",
              "#0f0f0fff",
              "#4facfe",
              "#0f0f0fff",
            ];
            return colors[params.dataIndex % colors.length];
          },
        },
      },
    ],
  };

  return (
    <ReactECharts option={options} style={{ height: "100%", width: "150px" }} />
  );
};

export default TotalProducts;
