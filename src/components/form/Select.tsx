import { FC } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface JSSelectProps {
  id: string;
  name: string;
  options: SelectOption[];
}

const JSSelect: FC<JSSelectProps> = ({ id, name, options }) => {
  return (
    <select
      className=" bg-transparent focus:border-2 focus:outline-none py-1.5 border border-orange-400"
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

export default JSSelect;
