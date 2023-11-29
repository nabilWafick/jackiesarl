import { FC } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface JSSelectProps {
  id: string;
  name: string;
  selectedOption: string;
  options: SelectOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const JSSelect: FC<JSSelectProps> = ({
  id,
  name,
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <select
      className="p-3 bg-secondary rounded-md text-white border border-gray-200 outline-none text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]"
      name={name}
      id={id}
      value={selectedOption}
      onChange={onChange}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className=" m-3 border-secondary bg-gray-200  text-tableTextColor"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default JSSelect;
