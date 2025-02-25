import { FC } from "react";

interface JsTextareaProps {
  id: string;
  name: string;
  value?: string;
  placeholder: string;
  autoComplete?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const JsTextarea: FC<JsTextareaProps> = ({
  id,
  name,
  value,
  placeholder,
  autoComplete,
  onChange,
}) => {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      autoComplete={autoComplete}
      placeholder={placeholder}
      onChange={onChange}
      cols={24}
      className=" w-full text-black text-md rounded-md bg-white py-1.5 px-2 border-2  border-gray-200 focus:outline-none focus:border-2 focus:border-secondary"
    ></textarea>
  );
};

export default JsTextarea;
