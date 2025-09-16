"use client";

import Image from "next/image";
import EmptyDataImage from "@/assets/images/empty-data.png";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { ListFilter } from "lucide-react";

type DataProps = {
  imgSrc: string;
  label: string;
  subLabel: string;
};

const LowStockItems = () => {
  const [data, setData] = useState<DataProps[]>([]);
  useEffect(() => {
    setData([
      {
        imgSrc: "",
        label: "Sample Item",
        subLabel: "12 Left",
      },
      {
        imgSrc: "",
        label: "Sample Item",
        subLabel: "5 Left",
      },
    ]);
  }, []);
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <div className="flex gap-4 justify-between items-center px-2 mb-6">
        <div className="font-bold">
          Low-Stock Items
          <p className="text-gray-400 font-normal text-sm">
            Items with limited inventory remaining.
          </p>
        </div>
        <ListFilter />
      </div>
      <div className="overflow-scroll h-[350px]">
        <table className={clsx("w-full", data.length === 0 ? "h-full" : "")}>
          <tbody>
            {data && data?.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td
                    colSpan={2}
                    className={clsx(
                      "flex justify-between hover:bg-gray-300/20 rounded-lg p-2"
                    )}
                  >
                    <div className={clsx("flex  items-center ")}>
                      <div className="w-12 h-12 bg-red-500 rounded-lg"></div>
                      <div className="ml-2">
                        <p>{item.label}</p>
                        <p className="text-gray-400 text-sm">{item.subLabel}</p>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <div
                    className={clsx(
                      "flex flex-col items-center justify-center py-6"
                    )}
                  >
                    <Image src={EmptyDataImage} width={100} alt="Empty data" />
                    <p className="text-gray-300 mt-2">No data available</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LowStockItems;
