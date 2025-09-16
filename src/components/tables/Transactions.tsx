"use client";

import Image from "next/image";
import EmptyDataImage from "@/assets/images/empty-data.png";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { ListFilter } from "lucide-react";
import SlowMovingItemsChart from "../charts/SlowMovingItemsChart";

type DataProps = {
  imgSrc: string;
  name: string;
  category: string;
  totalSold: string;
  totalAmnt: string;
};

const Transactions = () => {
  const [data, setData] = useState<DataProps[]>([]);
  useEffect(() => {
    setData([
      {
        imgSrc: "",
        name: "Sample Product",
        category: "Beverages",
        totalSold: "16",
        totalAmnt: "12634",
      },
      {
        imgSrc: "",
        name: "Sample Product",
        category: "Beverages",
        totalSold: "16",
        totalAmnt: "12634",
      },
      {
        imgSrc: "",
        name: "Sample Product",
        category: "Beverages",
        totalSold: "16",
        totalAmnt: "12634",
      },
    ]);
  }, []);
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg h-fit">
      <div className="flex gap-4 justify-between items-center px-2 mb-6">
        <div className="font-bold">
          Transactions
          <p className="text-gray-400 font-normal text-sm">
            Total 58 transactions done in month.
          </p>
        </div>
        <ListFilter />
      </div>
      <div className="overflow-scroll min-h-[350px] max-h-[500px]">
        <table className={clsx("w-full", data.length === 0 ? "h-full" : "")}>
          <tbody>
            {data && data?.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td
                    colSpan={2}
                    className={clsx(
                      "flex justify-between items-center hover:bg-gray-300/20 rounded-lg p-2"
                    )}
                  >
                    <div className={clsx("flex  items-center ")}>
                      <div className="w-12 h-12 bg-red-500 rounded-lg"></div>
                      <div className="ml-2">
                        <p>{item.name}</p>
                        <p className="text-gray-400 text-sm">{item.category}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {item.totalSold} Sold <br />
                    </p>
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

export default Transactions;
