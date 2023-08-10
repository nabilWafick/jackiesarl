import { FC } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface JSCategorySelectProps {
  id: string;
  name: string;
  options: SelectOption[];
}

const JSCategorySelect: FC<JSCategorySelectProps> = ({ id, name, options }) => {
  return (
    <select
      className="px-3 py-2 bg-[#d55f5a] rounded-md text-white border border-gray-200 outline-none"
      name={name}
      id={id}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default JSCategorySelect;
