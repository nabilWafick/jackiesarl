import { FC } from "react";

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
      className={`flex mt-4 w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-md font-semibold text-white shadow-sm hover:shadow-lg hover:outline-none focus:outline-none  hover:border-none text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default AuthenticationButton;
