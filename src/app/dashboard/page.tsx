"use client";

import React from "react";
import StatisticCard from "@/components/common/StatisticCard";
import WeeklySales from "@/components/charts/WeeklySales";
import MonthlyProfit from "@/components/charts/MonthlyProfit";
import SalesByTime from "@/components/charts/SalesByTime";
import FoodCostVsSales from "@/components/charts/FoodCostVsSales";
import { STATS_DURATIONS } from "@/utils/constants";
import BestSellerTable from "@/components/tables/BestSelllerTable";
import SlowMovingItems from "@/components/tables/SlowMovingItems";
import LowStockItems from "@/components/tables/LowStockItems";
import Dropdown from "@/components/ui/Dropdown";
import Transactions from "@/components/tables/Transactions";
import Banner from "@/components/common/Banner";

const Dashboard = () => {
  const durations = [
    { label: "Last Year", value: STATS_DURATIONS.LAST_YEAR },
    { label: "Last Month", value: STATS_DURATIONS.LAST_MONTH },
    { label: "Last 7 Days", value: STATS_DURATIONS.LAST_WEEK },
    { label: "Last 24H", value: STATS_DURATIONS.LAST_24H },
    { label: "YTD", value: STATS_DURATIONS.YTD },
    { label: "All Time", value: STATS_DURATIONS.ALLTIME },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Banner Section */}
      <Banner />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <StatisticCard
          label="Total Sales"
          tooltip="Revenue is the total income earned during this period."
          value={326}
          prevValue={300}
          formatValue={(n) =>
            n.toLocaleString("en-PH", { style: "currency", currency: "PHP" })
          }
          durations={durations}
        />
        <StatisticCard
          label="Avg Order Value"
          tooltip="Expenses are the costs your business pays to operate, such as salaries, rent, and utilities."
          value={423}
          prevValue={123}
          durations={durations}
          formatValue={(n) =>
            n.toLocaleString("en-PH", { style: "currency", currency: "PHP" })
          }
        />
        <StatisticCard
          label="Customers (New)"
          tooltip="Number of new customers per period"
          durations={durations}
          value={123}
          prevValue={300}
        />
        <StatisticCard
          label="Pending orders"
          tooltip="Number of pending orders"
          value={423}
          prevValue={123}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col w-full gap-4">
            <div className="h-full">
              <MonthlyProfit />
            </div>
            <SalesByTime />
          </div>
          <FoodCostVsSales />
        </div>
        <WeeklySales />
      </div>

      {/* Bottom 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* Top Row */}
        <BestSellerTable />
        <SlowMovingItems />
        <LowStockItems />
        <Transactions />

        {/* Bottom Right (span 2 columns on xl, 1 column on md) */}
        <div className="w-full bg-white shadow-lg rounded-lg p-4 min-h-[300px]  md:col-span-2 xl:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <span>Show:</span>
              <Dropdown
                className="border py-3"
                defaultValue="10"
                items={[
                  { label: "10", value: 10 },
                  { label: "50", value: 50 },
                  { label: "100", value: 100 },
                ]}
              />
            </div>
            <Dropdown
              className="border py-3"
              defaultValue="Products"
              items={[
                { label: "Reference", value: 10 },
                { label: "Products", value: 50 },
                { label: "Status", value: 100 },
              ]}
            />
          </div>

          <div className="overflow-y-scroll max-h-[500px]">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4">
                    <input type="checkbox" className="transform scale-130" />
                  </th>
                  <th className="p-4 text-blue-400">#</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Products</th>
                  <th className="p-4">Date</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* sample rows */}
                <tr className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="transform scale-130" />
                  </td>
                  <td className="p-4 text-blue-400">#24566</td>
                  <td className="p-4 font-semibold">
                    <div className="py-1 px-2 rounded-full w-fit bg-red-300 text-red-600 text-xs">
                      Cancelled
                    </div>
                  </td>
                  <td className="p-4">Sample</td>
                  <td className="p-4 whitespace-nowrap">13 Sep 2025</td>
                  <td className="p-4 space-x-4 text-center whitespace-nowrap">
                    <button className="text-blue-400 hover:underline">
                      View
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="text-red-400 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="transform scale-130" />
                  </td>
                  <td className="p-4 text-blue-400">#24565</td>
                  <td className="p-4 font-semibold">
                    <div className="py-1 px-2 rounded-full w-fit bg-green-300 text-green-600 text-xs">
                      Completed
                    </div>
                  </td>
                  <td className="p-4">Sample</td>
                  <td className="p-4 whitespace-nowrap">13 Sep 2025</td>
                  <td className="p-4 space-x-4 text-center whitespace-nowrap">
                    <button className="text-blue-400 hover:underline">
                      View
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="text-red-400 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="transform scale-130" />
                  </td>
                  <td className="p-4 text-blue-400">#24566</td>
                  <td className="p-4 font-semibold">
                    <div className="py-1 px-2 rounded-full w-fit bg-red-300 text-red-600 text-xs">
                      Cancelled
                    </div>
                  </td>
                  <td className="p-4">Sample</td>
                  <td className="p-4 whitespace-nowrap">13 Sep 2025</td>
                  <td className="p-4 space-x-4 text-center whitespace-nowrap">
                    <button className="text-blue-400 hover:underline">
                      View
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="text-red-400 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="transform scale-130" />
                  </td>
                  <td className="p-4 text-blue-400">#24565</td>
                  <td className="p-4 font-semibold">
                    <div className="py-1 px-2 rounded-full w-fit bg-green-300 text-green-600 text-xs">
                      Completed
                    </div>
                  </td>
                  <td className="p-4">Sample</td>
                  <td className="p-4 whitespace-nowrap">13 Sep 2025</td>
                  <td className="p-4 space-x-4 text-center whitespace-nowrap">
                    <button className="text-blue-400 hover:underline">
                      View
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="text-red-400 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="transform scale-130" />
                  </td>
                  <td className="p-4 text-blue-400">#24566</td>
                  <td className="p-4 font-semibold">
                    <div className="py-1 px-2 rounded-full w-fit bg-red-300 text-red-600 text-xs">
                      Cancelled
                    </div>
                  </td>
                  <td className="p-4">Sample</td>
                  <td className="p-4 whitespace-nowrap">13 Sep 2025</td>
                  <td className="p-4 space-x-4 text-center whitespace-nowrap">
                    <button className="text-blue-400 hover:underline">
                      View
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="text-red-400 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="transform scale-130" />
                  </td>
                  <td className="p-4 text-blue-400">#24565</td>
                  <td className="p-4 font-semibold">
                    <div className="py-1 px-2 rounded-full w-fit bg-gray-300 text-gray-600 text-xs">
                      Pending
                    </div>
                  </td>
                  <td className="p-4">Sample</td>
                  <td className="p-4 whitespace-nowrap">13 Sep 2025</td>
                  <td className="p-4 space-x-4 text-center whitespace-nowrap">
                    <button className="text-blue-400 hover:underline">
                      View
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="text-red-400 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="transform scale-130" />
                  </td>
                  <td className="p-4 text-blue-400">#24566</td>
                  <td className="p-4 font-semibold">
                    <div className="py-1 px-2 rounded-full w-fit bg-red-300 text-red-600 text-xs">
                      Cancelled
                    </div>
                  </td>
                  <td className="p-4">Sample</td>
                  <td className="p-4 whitespace-nowrap">13 Sep 2025</td>
                  <td className="p-4 space-x-4 text-center whitespace-nowrap">
                    <button className="text-blue-400 hover:underline">
                      View
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="text-red-400 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="transform scale-130" />
                  </td>
                  <td className="p-4 text-blue-400">#24565</td>
                  <td className="p-4 font-semibold">
                    <div className="py-1 px-2 rounded-full w-fit bg-gray-300 text-gray-600 text-xs">
                      Pending
                    </div>
                  </td>
                  <td className="p-4">Sample</td>
                  <td className="p-4 whitespace-nowrap">13 Sep 2025</td>
                  <td className="p-4 space-x-4 text-center whitespace-nowrap">
                    <button className="text-blue-400 hover:underline">
                      View
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="text-red-400 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="transform scale-130" />
                  </td>
                  <td className="p-4 text-blue-400">#24566</td>
                  <td className="p-4 font-semibold">
                    <div className="py-1 px-2 rounded-full w-fit bg-red-300 text-red-600 text-xs">
                      Cancelled
                    </div>
                  </td>
                  <td className="p-4">Sample</td>
                  <td className="p-4 whitespace-nowrap">13 Sep 2025</td>
                  <td className="p-4 space-x-4 text-center whitespace-nowrap">
                    <button className="text-blue-400 hover:underline">
                      View
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="text-red-400 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="transform scale-130" />
                  </td>
                  <td className="p-4 text-blue-400">#24565</td>
                  <td className="p-4 font-semibold">
                    <div className="py-1 px-2 rounded-full w-fit bg-green-300 text-green-600 text-xs">
                      Completed
                    </div>
                  </td>
                  <td className="p-4">Sample</td>
                  <td className="p-4 whitespace-nowrap">13 Sep 2025</td>
                  <td className="p-4 space-x-4 text-center whitespace-nowrap">
                    <button className="text-blue-400 hover:underline">
                      View
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="text-red-400 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
