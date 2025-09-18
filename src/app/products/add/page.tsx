"use client";

import Button from "@/components/ui/Button";
import PercentageSlider from "@/components/ui/PercentageSlider";
import TextArea from "@/components/ui/TextArea";
import TextInput from "@/components/ui/TextInput";
import clsx from "clsx";
import { useState } from "react";

const AddProduct = () => {
  const [isOver, setIsOver] = useState(false);
  const [isDropped, setIsDropped] = useState(false);
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // allow drop
  };

  const handleDragEnter = () => {
    setIsOver(true);
  };

  const handleDragLeave = () => {
    setIsOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(false);
    setIsDropped(true);

    // Optional: reset after 1 second
    setTimeout(() => setIsDropped(false), 1000);
  };

  return (
    <div className="grid gap-4 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4  bg-white shadow-lg rounded-lg p-4">
        <div className="w-full">
          <h1 className="text-2xl font-semibold">Add a new product</h1>
          <p className="text-gray-400">Enter details to add a new product.</p>
        </div>

        <div className="flex justify-start md:justify-end gap-4">
          <Button className="bg-red-400 text-white hover:bg-red-500 ">
            Discard
          </Button>
          <Button className="bg-blue-200 text-blue-500 hover:bg-blue-300 ">
            Save Draft
          </Button>
          <Button className="bg-blue-500 text-white hover:bg-blue-600 ml-auto md:ml-0">
            Publish Product
          </Button>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
        <div className="space-y-2">
          <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
            <TextInput label="Product Name" placeholder="Product Name" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextInput label="Product Code" placeholder="Product Code" />
              <TextInput label="Category" placeholder="Category" />
            </div>
            <TextArea label="Description" placeholder="Description" />
          </div>
          <div className="bg-white rounded-lg shadow-lg px-4 py-4">
            <div className="flex justify-between items-center">
              <h4>Product Image</h4>
              <Button className="text-blue-500">Add image from url</Button>
            </div>
            <div
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={clsx(
                "w-full h-64 flex items-center justify-center rounded-lg  border-dashed bg-gray-50",
                isOver ? "border-blue-500 border-2" : "border-1"
              )}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="text-1xl">Drag and drop image here</div>
                <span className="text-gray-400">or</span>
                <Button className="bg-blue-300 text-white hover:bg-blue-500">
                  Browse image
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
            <TextInput label="Ingredients" placeholder="List key ingredients" />
            <TextInput
              label="Dietary Tags"
              placeholder="e.g., Vegan, Gluten-Free"
            />
            <TextArea
              label="Cooking Instructions"
              placeholder="Kitchen notes"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="bg-white rounded-lg shadow-lg px-4 py-4 space-y-4">
            <h4 className="font-bold mb-4">Pricing</h4>
            <TextInput label="Price" placeholder="Enter Base Price" />
            <TextInput label="Serving Size" placeholder="e.g., 250g / 500ml" />
            <div className="flex gap-2 mt-4 items-center">
              <input type="checkbox" className="transform scale-130" />
              <p className="text-gray-500 text-sm">
                Charge Tax on this Product
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg px-4 py-4">
            <h4 className="font-bold mb-4">Manage</h4>
            <TextInput
              label="Preparation Time"
              placeholder="Preparation Time"
            />

            <PercentageSlider
              label="Re-stock level"
              onChange={(value) => console.log(value)}
            />

            <div className="flex gap-2 mt-4 items-center">
              <input type="checkbox" className="transform scale-130" />
              <p className="text-gray-500 text-sm">Track Stock</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
