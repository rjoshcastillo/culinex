import { forwardRef, ReactNode } from "react";

type InputProps = React.ComponentProps<"input"> & {
  children?: ReactNode;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  label?: string;
};

const TextInput = forwardRef<HTMLInputElement, InputProps>(
  ({ children, iconStart, iconEnd, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && <div className="text-sm">{label}</div>}
        <div
          className="group flex justify-between gap-2 items-center rounded-lg border h-[44px] px-3 w-full
                   focus-within:border-blue-500 transition-colors duration-200"
        >
          <div className="flex items-center gap-2 w-full">
            {iconStart && (
              <div className="text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200">
                {iconStart}
              </div>
            )}
            <input
              ref={ref}
              {...props}
              type="text"
              className="w-full h-full outline-none bg-transparent"
            />
          </div>
          {iconEnd && (
            <div className="text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200">
              {iconEnd}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default TextInput;
