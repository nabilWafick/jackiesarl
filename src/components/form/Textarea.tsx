import { FC } from "react";

interface JsTextareaProps {
  id: string;
  name: string;

  placeholder: string;
  autoComplete?: string;
}

const JsTextarea: FC<JsTextareaProps> = ({
  id,
  name,
  placeholder,
  autoComplete,
}) => {
  return (
    <textarea
      id={id}
      name={name}
      autoComplete={autoComplete}
      placeholder={placeholder}
      required
      className=" w-full text-black text-md rounded-md bg-transparent py-1.5 px-2 border-2 border-gray-200 focus:outline-none focus:border-2 focus:border-secondary"
    ></textarea>
  );
};

export default JsTextarea;
