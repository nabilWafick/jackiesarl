import { FC } from "react";
import { JSColors } from "../../utils/colors";

interface AuthenticationButtonProps {
  name: string;
  onClick: () => void;
}

const AuthenticationButton: FC<AuthenticationButtonProps> = ({
  name,
  onClick,
}) => {
  return (
    <button
      type="submit"
      className={`flex mt-4 w-full justify-center rounded-md bg-[#D55F5A] [${JSColors.secondary}] px-3 py-1.5 text-md font-semibold text-white shadow-sm hover:shadow-lg  hover:border-none`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default AuthenticationButton;
