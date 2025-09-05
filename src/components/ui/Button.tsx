"use client";

import clsx from "clsx";
import { ReactElement, ReactNode, SVGProps } from "react";

type ButtonProps = {
  className?: string;
  icon?: React.FC<SVGProps<SVGSVGElement>>;
  children?: ReactNode;
  onClick: () => void;
};
const Button = ({ children, icon: Icon, className, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "cursor-pointer p-3 rounded-md flex gap-2 items-center hover:bg-button-2 w-full",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-5 h-5 stroke-current fill-current" />}
      </div>

      {children}
    </button>
  );
};

export default Button;
