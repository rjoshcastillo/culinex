"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import moment from "moment";

const BestSellerChart: React.FC = () => {
  const salesData = [
    { date: "2025-09-01", value: 200 },
    { date: "2025-09-02", value: 80 },
    { date: "2025-09-03", value: 250 },
    { date: "2025-09-04", value: 500 },
    { date: "2025-09-05", value: 4270 },
    { date: "2025-09-06", value: 320 },
    { date: "2025-09-07", value: 1280 },
  ];

  const periods = salesData.map((d) => d.date);
  const values = salesData.map((d) => d.value);

  const options = {
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(0,0,0,0.75)",
      borderColor: "transparent",
      padding: 10,
      textStyle: { color: "#fff" },
      formatter: (params: any) => {
        if (!params || !params[0]) return "";
        const p = params[0];
        const date = moment(p.axisValue).format("MMM DD");
        const val = p.data;
        // format with comma
        const formatted = typeof val === "number" ? val.toLocaleString() : val;
        return `${date}<br/>Sold: ${formatted}`;
      },
    },
    grid: {
      top: 0,
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
      },
    ],
  };

  return (
    <div className="w-full max-w-md">
      <ReactECharts
        option={options}
        style={{ height: "50px", width: "100%" }}
      />
    </div>
  );
};

export default BestSellerChart;
