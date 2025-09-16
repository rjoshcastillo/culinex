"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts"; // for gradient
import moment from "moment";

const SlowMovingItemsChart: React.FC = () => {
  const profits = [
    { month: "2025-09-08", value: 27 },
    { month: "2025-09-09", value: 18 },
    { month: "2025-09-10", value: 14 },
    { month: "2025-09-11", value: 25 },
    { month: "2025-09-12", value: 33 },
  ];

  const months = profits.map((d) => moment(d.month).format("dd"));
  const values = profits.map((d) => d.value);

  const currentDate = new Date().toISOString().split("T")[0];
  const matchDate = profits.findIndex((a) => a.month === currentDate);

  const options = {
    xAxis: {
      type: "category",
      data: months,
      axisLabel: {
        color: (value: string, index: number) =>
          index === matchDate ? "#36c7f0" : "#4facfe46",
        fontSize: 12,
        margin: 10,
      },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLine: { show: false },
    },
    yAxis: {
      type: "value",
      splitLine: { show: false },
    },
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 23,
    },
    series: [
      {
        data: values,
        type: "bar",
        // Highlight the bar of the current date
        itemStyle: {
          color: (params: any) =>
            params.dataIndex === matchDate ? "#36c7f0" : "#4facfe46",
          borderRadius: [5, 5, 0, 0],
        },
        label: {
          show: true,
          color: "#fff",
          fontWeight: "bold",
        },
        emphasis: {
          itemStyle: {
            color: "#36c7f0",
          },
        },
      },
    ],
    tooltip: {
      show: false,
    },
  };

  return (
    <div className="w-full">
      <ReactECharts
        option={options}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default SlowMovingItemsChart;
