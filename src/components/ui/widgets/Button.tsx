import { FC } from "react";

interface JsButtonProps {
  name: string;
  type?: "submit" | "button" | undefined;
  enable?: boolean;
  onClick?: () => void;
}

const JsButton: FC<JsButtonProps> = ({ name, type, onClick, enable }) => {
  return (
    <button
      type={type}
      className={`text-white bg-secondary shadow-md py-2 px-4 border-2 border-secondary hover:border-none focus:outline-none text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]`}
      onClick={
        enable != null && enable == true
          ? () => {
              onClick == null ? () => {} : () => onClick();
            }
          : () => {}
        //  () => onClick()
      }
    >
      {name}
    </button>
  );
};

export default JsButton;
