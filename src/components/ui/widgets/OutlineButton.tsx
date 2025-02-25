import { FC } from "react";
interface JsOutlineButtonProps {
  name: string;
  type: "submit" | "button" | undefined;
  onClick: () => void;
}

const JsOutlineButton: FC<JsOutlineButtonProps> = ({ name, type, onClick }) => {
  return (
    <button
      type={type}
      className={`text-secondary bg-white border-secondary py-2 px-4 border-2 shadow-md hover:border-none hover:bg-secondary hover:text-white focus:outline-none text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]`}
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
};

export default JsOutlineButton;
