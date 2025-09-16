"use client";

import React, { useEffect, useRef } from "react";
import ReactECharts from "echarts-for-react";
import moment from "moment";

const MonthlyProfit: React.FC = () => {
  const chartRef = useRef<any>(null);
  const profits = [
    { month: "2025-08", value: 5000 },
    { month: "2025-09", value: 3800 },
  ];

  const months = profits.map((d) => moment(d.month).format("MMM YYYY"));
  const values = profits.map((d) => d.value);

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = chartRef.current.getEchartsInstance();

    chart.resize();

    const observer = new ResizeObserver(() => {
      chart.resize();
    });
    const parent = chartRef.current?.ele?.parentNode;
    if (parent) observer.observe(parent);

    return () => observer.disconnect();
  }, []);
  const options = {
    xAxis: {
      type: "category",
      data: months,
      axisLine: {
        lineStyle: { color: "#ccc" },
      },
      axisLabel: {
        color: "#4facfe",
        fontSize: 12,
      },
      axisTick: { show: false },
    },
    yAxis: {
      type: "value",
      show: false,
    },
    grid: {
      top: 20,
      left: 0,
      right: 0,
      bottom: 0,
    },
    series: [
      {
        data: values,
        type: "bar",
        itemStyle: {
          color: [
            { offset: 0, color: "#4facfe" },
            { offset: 1, color: "#00f2fe" },
          ],
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
      trigger: "axis",
      axisPointer: { type: "shadow" },
      backgroundColor: "#fff",
      borderColor: "#ccc",
      borderWidth: 1,
      textStyle: { color: "#000" },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg  shadow-lg w-full ">
      <p>Profit</p>
      <p className="text-gray-400 text-sm">vs previous month</p>
      <ReactECharts
        ref={chartRef}
        option={options}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default MonthlyProfit;
