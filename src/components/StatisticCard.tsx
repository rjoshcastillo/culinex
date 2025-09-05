import clsx from "clsx";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

type StatisticCardProps = {
  label: string;
  value: number | string;
  percent?: number;
  prevValue?: number;
  formatValue?: (n: number) => string;
  className?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

const StatisticCard = ({
  label,
  value,
  percent,
  prevValue,
  formatValue,
  className,
  icon: Icon,
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
        "group relative overflow-hidden",
        "rounded-lg",
        "bg-white",
        "shadow-sm hover:shadow-md transition-shadow",
        "p-4",
        "w-full",
        className
      )}
      role="region"
      aria-label={`${label} statistic`}
    >
      <div className="text-sm text-zinc-500 truncate">{label}</div>
      <div className="mt-2 min-w-0 flex justify-between">
        <div className="text-2xl text-right sm:text-2xl font-semibold">
          {displayValue}
        </div>
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
      </div>

      <div className="mt-1 text-sm text-zinc-300 text-right">Last 24h</div>
      {Icon && (
        <div className=" absolute right-3 bottom-2">
          <Icon className="w-14 h-14  " />
        </div>
      )}
    </div>
  );
};

export default StatisticCard;
