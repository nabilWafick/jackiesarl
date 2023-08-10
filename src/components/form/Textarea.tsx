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
      className="w-full text-black text-md rounded-sm bg-transparent py-1.5 px-2 border border-orange-400 focus:rounded-sm focus:bg-[#d55f5a]  focus:outline-none focus:border-2  cursor-orange-400 "
    ></textarea>
  );
};

export default JsTextarea;
