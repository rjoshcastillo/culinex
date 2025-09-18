"use client";

import clsx from "clsx";
import { forwardRef, ReactElement, ReactNode, SVGProps } from "react";

type ButtonProps = React.ComponentProps<"button"> & {
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  children?: ReactNode;
};
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, iconStart, iconEnd, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={clsx(
          "cursor-pointer p-3 h-[44px] rounded-md flex gap-2 items-center transition-all duration-300",
          className
        )}
      >
        <div className="flex items-center w-full gap-2">
          {iconStart}
          <span className="text-sm">{children}</span>
          {iconEnd && <div className="ml-auto">{iconEnd}</div>}
        </div>
      </button>
    );
  }
);

export default Button;
