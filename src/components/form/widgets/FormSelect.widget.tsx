import { FC } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface JSFormSelectProps {
  id: string;
  name: string;
  selectedOption: string;
  options: SelectOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const JSFormSelect: FC<JSFormSelectProps> = ({
  id,
  name,
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <select
      className={
        ` w-[260px] text-black text-md rounded-md bg-transparent py-1.5 px-2 border-2 border-gray-200 focus:outline-none focus:border-2 focus:border-secondary` /*`bg-transparent border-secondary rounded-md focus:border-2  focus:outline-none px-2 py-1.5 border focus:border-secondary text-secondary`*/
      }
      name={name}
      id={id}
      value={selectedOption}
      onChange={onChange}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="hover:bg-secondary focus:bg-secondary"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default JSFormSelect;
