import { forwardRef, ReactNode } from "react";

type InputProps = React.ComponentProps<"textarea"> & {
  children?: ReactNode;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  label?: string;
};

const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ children, iconStart, iconEnd, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && <div className="text-sm">{label}</div>}
        <textarea
          ref={ref}
          {...props}
          rows={4}
          className="w-full h-full outline-none bg-transparent  rounded-lg border px-3 w-full py-4
                   focus-within:border-blue-500 transition-colors duration-200"
        />
      </div>
    );
  }
);

export default TextArea;
