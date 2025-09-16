"use client";

import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import CircleIcon from "@/assets/icons/circle.svg";

type ItemProps = {
  label: string;
  value?: string;
};
type SelectItem = ItemProps & {
  [key: string]: any;
};

type CollapsibleProps = ItemProps & {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: (url: string) => void;
  items: SelectItem[] | {};
};

const Collapsible = ({
  label,
  icon: Icon,
  items,
  onClick,
}: CollapsibleProps): React.ReactNode => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <ul className="w-full transition-all duration-500">
      <li
        className={clsx(
          "cursor-pointer p-3 h-[48px] rounded-md flex justify-between items-center hover:bg-button-2",
          isExpanded ? "bg-button-2" : ""
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-5 h-5 stroke-current fill-current" />}
          <span>{label}</span>
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
              className="py-3 px-3 rounded-md hover:bg-button-2 cursor-pointer transition-all duration-300"
              onClick={() => onClick?.(item.value ?? "/")}
              key={key}
            >
              <div className="flex items-center gap-2">
                <CircleIcon className="h-3 w-3" />
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
