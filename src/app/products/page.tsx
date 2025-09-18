"use client";

import ProductStatCard from "@/components/common/ProductStatCard";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import TextInput from "@/components/ui/TextInput";
import { EllipsisVertical, Pencil, Search } from "lucide-react";

const Products = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="grid grid-cols-1">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 mb-4 gap-4">
            <ProductStatCard
              label="Total Products"
              tooltip=""
              subLabel="by category"
              value="42"
            />
            <ProductStatCard
              label="Revenue (Selected)"
              tooltip=""
              subLabel="vs previously selected"
              value="12"
            />
            <ProductStatCard
              label="Total Sold"
              tooltip=""
              subLabel="vs previously selected"
              value="124"
            />
          </div>
          <div className="bg-white px-4 py-4 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
              {/* Search */}
              <TextInput placeholder="Search" iconStart={<Search />} />

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
                <Button className="bg-blue-400 hover:bg-blue-600 text-white whitespace-nowrap">
                  Add Product
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-4">
                      <input type="checkbox" className="transform scale-130" />
                    </th>
                    <th className="p-4 text-blue-400">#</th>
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
                    <td className="p-4 text-blue-400">#24566</td>
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
    </div>
  );
};

export default Products;
