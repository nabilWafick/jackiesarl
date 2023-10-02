import { FC } from "react";
interface JSInputProps {
  id: string;
  name: string;
  type: string;
  value?: string;
  placeholder: string;
  autoComplete?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const JSInput: FC<JSInputProps> = ({
  id,
  name,
  type,
  value,
  placeholder,
  autoComplete,
  onChange,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      autoComplete={autoComplete}
      placeholder={placeholder}
      onChange={onChange}
      //  required
      className={` w-full text-black text-md rounded-md bg-transparent py-1.5 px-2 border-2  border-gray-200 focus:outline-none focus:border-2 focus:border-secondary`}
    />
  );
};

export default JSInput;
