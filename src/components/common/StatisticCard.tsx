"use client";

import clsx from "clsx";
import { ArrowDownRight, ArrowUpRight, InfoIcon } from "lucide-react";
import Dropdown from "../ui/Dropdown";

type Duration = { label: string; value: string | number };

type StatisticCardProps = {
  label: string;
  value: number | string;
  percent?: number;
  prevValue?: number;
  formatValue?: (n: number) => string;
  className?: string;
  showDifference?: boolean;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  tooltip?: string;
  durations?: Duration[];
};

const StatisticCard = ({
  label,
  value,
  percent,
  prevValue,
  formatValue,
  className,
  showDifference = true,
  icon: Icon,
  tooltip,
  durations,
}: StatisticCardProps) => {
  const numericValue = typeof value === "number" ? value : undefined;
  const derivedPercent =
    percent !== undefined
      ? percent
      : numericValue !== undefined && prevValue
      ? ((numericValue - prevValue) / prevValue) * 100
      : undefined;

  const pct =
    typeof derivedPercent === "number" && isFinite(derivedPercent)
      ? Number(derivedPercent.toFixed(2))
      : undefined;

  const isUp = pct !== undefined ? pct >= 0 : true;
  const ArrowIcon = isUp ? ArrowUpRight : ArrowDownRight;

  const displayValue =
    typeof value === "number" && formatValue ? formatValue(value) : value;

  return (
    <div
      className={clsx(
        "group",
        "rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow",
        "p-4 w-full",
        className
      )}
      role="region"
      aria-label={`${label} statistic`}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-zinc-500 flex items-center gap-2">
          {label}

          <div className="group/tooltip relative">
            <InfoIcon size={14} className="cursor-pointer" />
            {tooltip && (
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
            )}
          </div>
        </div>
        {durations && (
          <Dropdown
            items={durations}
            onSelect={(item) => console.log(item)}
            defaultValue={"Last 24H"}
          />
        )}
      </div>

      {/* Value + % difference */}
      <div className="mt-8 min-w-0 flex justify-between">
        <div className="text-2xl sm:text-2xl font-semibold">{displayValue}</div>
        {showDifference && (
          <div
            className={clsx(
              "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-medium w-auto",
              isUp
                ? "bg-green-500 text-green-500 dark:bg-green-500/20"
                : "bg-rose-500 text-rose-700 dark:bg-rose-500/20"
            )}
            aria-live="polite"
          >
            {pct !== undefined ? (
              <>
                <ArrowIcon className="h-4 w-4" aria-hidden />
                <span>{Math.abs(pct)}%</span>
              </>
            ) : (
              <span className="text-zinc-500 dark:text-zinc-400">—</span>
            )}
          </div>
        )}
      </div>

      {/* Background icon */}
      {Icon && (
        <div className="absolute right-3 bottom-2">
          <Icon className="w-14 h-14" />
        </div>
      )}
    </div>
  );
};

export default StatisticCard;
