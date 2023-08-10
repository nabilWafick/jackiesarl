import { FC } from "react";
import { JSColors } from "../../utils/colors";

interface JsButtonProps {
  name: string;
  type: "submit" | "button" | undefined;
  onClick: () => void;
}

const JsButton: FC<JsButtonProps> = ({ name, type, onClick }) => {
  return (
    <button
      type={type}
      className={`text-white bg-[${JSColors.secondary}] shadow-md hover:border-none`}
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
};

export default JsButton;
