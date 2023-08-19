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
      className="bg-transparent border-secondary rounded-md focus:border-2  focus:outline-none px-2 py-1.5 border focus:border-secondary text-secondary"
      name={name}
      id={id}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="hover:bg-secondary"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default JSSelect;
