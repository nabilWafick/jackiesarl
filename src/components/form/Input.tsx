import { FC } from "react";
interface JSInputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
}

const JSInput: FC<JSInputProps> = ({
  id,
  name,
  type,
  placeholder,
  autoComplete,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      placeholder={placeholder}
      required
      className={` w-full text-black text-md rounded-md bg-transparent py-1.5 px-2 border-2  border-gray-200 focus:outline-none focus:border-2 focus:border-secondary`}
    />
  );
};

export default JSInput;
