import { forwardRef, useState } from "react";

type SliderProps = {
  label: string;
  onChange: (value: number) => void;
};
const PercentageSlider = forwardRef<HTMLInputElement, SliderProps>(
  ({ label, onChange }, ref) => {
    const [value, setValue] = useState<number>(50);
    const onSlide = (value: number) => {
      onChange(value);
      setValue(value);
    };
    return (
      <div className="mt-4">
        <span>Re-order level</span>
        <div className="flex items-center gap-4">
          {/* Slider */}
          <input
            type="range"
            min="0"
            max="100"
            onChange={(e) => onSlide(Number(e.target.value))}
            className="
              w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
              accent-blue-500
            "
          />

          <span className="w-16 text-center font-bold text-blue-600">
            {value}%
          </span>
        </div>
      </div>
    );
  }
);

export default PercentageSlider;
