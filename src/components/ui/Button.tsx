import { FC } from "react";

interface JsButtonProps {
  name: string;
  type: "submit" | "button" | undefined;
  onClick?: () => void;
}

const JsButton: FC<JsButtonProps> = ({ name, type, onClick }) => {
  return (
    <button
      type={type}
      className={`text-white bg-secondary shadow-md py-2 px-4 border-2 border-secondary hover:border-none focus:outline-none`}
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
};

export default JsButton;
