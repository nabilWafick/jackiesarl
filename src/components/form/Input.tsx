import { FC } from "react";

interface JsInputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
}

const JsInput: FC<JsInputProps> = ({
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
      className="w-full text-black text-md rounded-sm bg-transparent py-1.5 px-2 border border-orange-400 focus:rounded-sm focus:bg-[#d55f5a]  focus:outline-none focus:border-2  cursor-orange-400 "
    />
  );
};

export default JsInput;
