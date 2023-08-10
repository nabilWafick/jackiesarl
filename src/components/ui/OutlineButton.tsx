import { FC } from "react";
import { JSColors } from "../../utils/colors";

interface JsOutlineButtonProps {
  name: string;
  type: "submit" | "button" | undefined;
  onClick: () => void;
}

const JsOutlineButton: FC<JsOutlineButtonProps> = ({ name, type, onClick }) => {
  return (
    <button
      type={type}
      className={`text-[${JSColors.secondary}] bg-white border-[${JSColors.secondary}] border-2 shadow-md hover:border-none`}
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
};

export default JsOutlineButton;
