"use client";

import clsx from "clsx";
import { ChevronRight, CircleSmall } from "lucide-react";
import { ReactNode, useState } from "react";
import CircleIcon from "@/assets/icons/circle.svg";

type ItemProps = {
  label: string;
  value?: string;
  isActive?: boolean;
};
type SelectItem = ItemProps & {
  [key: string]: any;
};

type CollapsibleProps = ItemProps & {
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  onClick?: (url: string) => void;
  items: SelectItem[] | {};
  isActive?: boolean;
};

const Collapsible = ({
  label,
  iconStart,
  iconEnd,
  items,
  onClick,
}: CollapsibleProps): React.ReactNode => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <ul className="w-full transition-all duration-500">
      <li
        className={clsx(
          "cursor-pointer p-3 h-[44px] rounded-md flex justify-between items-center hover:bg-button-2",
          isExpanded ? "bg-button-2" : ""
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          {iconStart}
          <span className="text-sm">{label}</span>
          {iconEnd}
        </div>
        <ChevronRight
          size={18}
          className={clsx(
            "transition-all duration-300",
            isExpanded ? "rotate-90" : ""
          )}
        />
      </li>

      <div
        className={`overflow-hidden transition-all duration-300 overflow-scroll ${
          isExpanded ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className={clsx("space-y-1 mt-1")}>
          {Object.entries(items).map(([key, item]) => (
            <li
              className={clsx(
                "py-3 px-3 rounded-md  cursor-pointer transition-all duration-300",
                item.isActive
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "hover:bg-button-2"
              )}
              onClick={() => onClick?.(item.value ?? "/")}
              key={key}
            >
              <div className="flex items-center gap-2 text-sm">
                <CircleSmall size={14}/>
                {item.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ul>
  );
};

export default Collapsible;
