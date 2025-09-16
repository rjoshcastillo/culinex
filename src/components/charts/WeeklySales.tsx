"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import moment from "moment";

const WeeklySales: React.FC = () => {
  const sales = [
    { date: "2025-09-01", value: 200 },
    { date: "2025-09-02", value: 180 },
    { date: "2025-09-03", value: 250 },
    { date: "2025-09-04", value: 300 },
    { date: "2025-09-05", value: 270 },
    { date: "2025-09-06", value: 320 },
    { date: "2025-09-07", value: 280 },
  ];
  const dates = sales.map((d) => moment(d.date).format("MM/DD"));
  const values = sales.map((d) => d.value);

  const options = {
    title: {
      text: "Weekly Sales Trend",
      left: "center",
      textStyle: { color: "#0f172a", fontWeight: 600 },
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(0,0,0,0.75)",
      borderColor: "transparent",
      padding: 10,
      textStyle: { color: "#fff" },
      formatter: (params: any) => {
        if (!params || !params[0]) return "";
        const p = params[0];
        const date = p.axisValue;
        const val = p.data;
        // format with comma
        const formatted = typeof val === "number" ? val.toLocaleString() : val;
        return `${date}<br/>Sales: ${formatted}`;
      },
    },
    grid: {
      left: "3%",
      right: "5%",
      bottom: "5%",
      top: "15%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: dates,
      boundaryGap: false,
      axisLine: { lineStyle: { color: "#e6e9ef" } },
      axisLabel: {
        color: "#475569",
        margin: 20,
        formatter: (v: string) => v,
      },
      axisTick: { show: false },
    },

    yAxis: {
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { color: "#475569" },
    },

    series: [
      {
        name: "Sales",
        type: "line",
        data: values,
        smooth: true,
        symbol: "circle",
        symbolSize: 6,
        lineStyle: {
          width: 3,
          color: {
            colorStops: [
              { offset: 0, color: "#06b6d4" }, // teal-ish
              { offset: 1, color: "#10b981" }, // green
            ],
          },
          shadowColor: "rgba(16,185,129,0.18)",
          shadowBlur: 8,
        },
        // Points style
        itemStyle: {
          color: "#ffffff",
          borderColor: "#10b981",
        },
        // Area style (gradient fill)
        areaStyle: {
          origin: "start",
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(16,185,129,0.22)" }, // near line
              { offset: 0.4, color: "rgba(16,185,129,0.12)" },
              { offset: 1, color: "rgba(16,185,129,0.02)" }, // near bottom
            ],
          },
        },

        // Hover/emphasis style
        emphasis: {
          focus: "series",
          itemStyle: { borderColor: "#06b6d4", borderWidth: 2 },
          lineStyle: { width: 3.5 },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(6,182,212,0.28)" },
                { offset: 1, color: "rgba(16,185,129,0.04)" },
              ],
            },
          },
        },

        // Disable symbols on large datasets if needed
        showSymbol: values.length <= 50,
      },
    ],

    // Make chart responsive and compact
    responsive: true,
  };

  return (
    <div className="w-full h-[380px] bg-white shadow-lg pt-6 rounded-md">
      <ReactECharts
        option={options}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default WeeklySales;
