import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import { forwardRef, useState } from "react";

type ItemProps = {
  label: string;
  value: string | number;
};
type SelectItem = ItemProps & {
  [key: string]: any;
};
type DropdownProps = React.ComponentProps<"div"> & {
  items: SelectItem[];
  defaultValue?: SelectItem | string | number;
  onSelect?: (item: SelectItem) => void;
};

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ items, className, onSelect, defaultValue }, ref) => {
    const defaultItem =
      typeof defaultValue === "object"
        ? (defaultValue as SelectItem)
        : items.find((i) => i.label === defaultValue);

    const [selected, setSelected] = useState<SelectItem | undefined>(
      defaultItem
    );
    const [toggle, setToggle] = useState<boolean>(false);

    return (
      <div
        onMouseLeave={() => setToggle(false)}
        onClick={() => setToggle(true)}
        ref={ref}
        className={clsx("relative cursor-pointer")}
      >
        <div
          className={clsx(
            "text-sm flex gap-2 items-center rounded-lg px-2 h-[44px] justify-between whitespace-nowrap",
            className
          )}
        >
          {selected?.label ?? "Select..."}
          <ChevronRight
            size={18}
            className={clsx(
              "transition-all duration-300",
              toggle ? "rotate-90" : ""
            )}
          />
        </div>
        <div
          className={clsx(
            "flex flex-col bg-white border transition-all duration-300 border-blue-500 shadow-lg absolute right-0 md:left-0 w-fit rounded z-10",
            toggle
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          )}
        >
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                onSelect?.(item);
                setSelected(item);
                setToggle(false); // ✅ close after select
              }}
              className={clsx(
                "transition-all duration-300 whitespace-nowrap",
                "pl-2 pr-6 py-2 hover:bg-blue-500/70"
              )}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default Dropdown;
