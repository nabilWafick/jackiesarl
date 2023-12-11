import { FC } from "react";
interface JSInputProps {
  id: string;
  name: string;
  type: "text" | "number" | "file" | "email" | "password" | "date";
  value?: string | number | readonly string[];
  placeholder: string;
  autoComplete?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onKeyDown?: (e: React.KeyboardEventHandler<HTMLInputElement>) => void;
}

const JSInput: FC<JSInputProps> = ({
  id,
  name,
  type,
  value,
  placeholder,
  autoComplete,
  disabled,
  onChange,
  //onKeyDown,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      autoComplete={autoComplete}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      //  required
      className={` w-full text-black text-md rounded-md  bg-backgroundColor -z-10 py-1.5 px-2 border-2  border-gray-200 focus:outline-none focus:border-2 focus:border-secondary text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]`}
    />
  );
};

export default JSInput;
