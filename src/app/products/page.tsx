"use client";

import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import { EllipsisVertical, Pencil } from "lucide-react";

const Products = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="grid grid-cols-1">
        <div className="w-full bg-white shadow-lg rounded-lg px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center py-4 gap-2">
            {/* Search */}
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg border h-[48px] px-3 focus:border-violet-500 focus:outline-none transition-colors duration-200 w-full"
            />

            {/* Right side (Dropdown + Button) */}
            <div className="flex justify-between gap-4 w-full">
              <div className="flex items-center gap-4">
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
              <Button className="bg-violet-400 hover:bg-violet-600 text-white whitespace-nowrap">
                Add Product
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4">
                    <input type="checkbox" className="transform scale-130" />
                  </th>
                  <th className="p-4">#</th>
                  <th className="p-4 whitespace-nowrap">Product Name</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Unit</th>
                  <th className="p-4 whitespace-nowrap">Preparation Time</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="transform scale-130" />
                  </td>
                  <td className="p-4 text-violet-400">#24566</td>
                  <td className="p-4">Sample</td>
                  <td className="p-4">Drinks</td>
                  <td className="p-4">12.44</td>
                  <td className="p-4">Cup</td>
                  <td className="p-4">3 mins</td>
                  <td className="p-4 flex items-center justify-center space-x-4 whitespace-nowrap">
                    <button className="text-gray-600 hover:underline">
                      <Pencil size={20} />
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="text-gray-600 hover:underline">
                      <EllipsisVertical size={20} />
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

export default Products;
