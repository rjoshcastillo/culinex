import clsx from "clsx";
import { InfoIcon } from "lucide-react";
import TotalProducts from "../charts/TotalProducts";
type ProductStatCard = {
  label: string;
  tooltip: string;
  subLabel: string;
  value: string;
};
const ProductStatCard = ({
  label,
  tooltip,
  subLabel,
  value,
}: ProductStatCard) => {
  return (
    <div className="w-full grid grid-cols-2 bg-white shadow-lg rounded-lg p-4">
      <div className="flex flex-col justify-between h-full">
        <div className="text-zinc-500 flex items-center gap-2">
          {label}
          {tooltip && (
            <div className="group/tooltip relative">
              <InfoIcon size={16} className="cursor-pointer" />
              <div
                className={clsx(
                  "pointer-events-none",
                  "absolute -translate-x-1/4 -top-8",
                  "bg-black/80 text-gray-200 text-xs rounded-md px-2 py-2",
                  "opacity-0 group-hover/tooltip:opacity-100 transition-opacity",
                  "min-w-[200px] z-10"
                )}
                role="tooltip"
              >
                {tooltip}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center flex-1">
          <p className="text-4xl font-bold py-2">{value}</p>
        </div>
        <p className="text-sm text-gray-400">{subLabel}</p>
      </div>
      <div className="flex items-center justify-end">
        <TotalProducts />
      </div>
    </div>
  );
};

export default ProductStatCard;
