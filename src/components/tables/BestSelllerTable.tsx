"use client";

import Image from "next/image";
import EmptyDataImage from "@/assets/images/empty-data.png";
import clsx from "clsx";
import { useEffect, useState } from "react";
import SalesByTime from "../charts/SalesByTime";
import BestSellerChart from "../charts/BestSellerChart";
import { ListFilter } from "lucide-react";

type DataProps = {
  imgSrc: string;
  name: string;
  category: string;
  totalSold: string;
  totalAmnt: string;
};

const BestSellerTable = () => {
  const [data, setData] = useState<DataProps[]>([]);
  useEffect(() => {
    setData([
      {
        imgSrc: "",
        name: "Sample Product",
        category: "Beverages",
        totalSold: "1k+",
        totalAmnt: "12634",
      },
      {
        imgSrc: "",
        name: "Sample Product",
        category: "Beverages",
        totalSold: "1k+",
        totalAmnt: "12634",
      },
    ]);
  }, []);
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <div className="flex gap-4 justify-between items-center px-2 mb-6">
        <div className="font-bold">
          Best Sellers
          <p className="text-gray-400 font-normal text-sm">
            Trusted by thousands of buyers.
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
                        <p>{item.name}</p>
                        <p className="text-gray-400 text-sm">{item.category}</p>
                      </div>
                    </div>
                    <div className="text-xs flex">
                      <div>
                        <BestSellerChart />
                      </div>
                      <p className="hidden">
                        {item.totalSold} Sold <br />
                        {parseInt(item.totalAmnt).toLocaleString("en-PH", {
                          style: "currency",
                          currency: "PHP",
                        })}
                      </p>
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

export default BestSellerTable;
