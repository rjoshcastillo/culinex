"use client";

import clsx from "clsx";
import { forwardRef, ReactElement, ReactNode, SVGProps } from "react";

type ButtonProps = React.ComponentProps<"button"> & {
  icon?: React.FC<SVGProps<SVGSVGElement>>;
  children?: ReactNode;
};
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, icon: Icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={clsx(
          "cursor-pointer p-3 h-[48px] rounded-md flex gap-2 items-center transition-all duration-300",
          className
        )}
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-5 h-5 stroke-current fill-current" />}
        </div>
        <span className="mr-2">{children}</span>
      </button>
    );
  }
);

export default Button;
