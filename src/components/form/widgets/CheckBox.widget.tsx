import { FC } from "react";

interface JSCheckBoxProps {}

const JSCheckBox: FC<JSCheckBoxProps> = () => {
  return (
    <input
      type="checkbox"
      className="ml-5 w-4 h-4 text-blue-600 bg-green-700 border-orange-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
      onChange={() => {}}
    />
  );
};

export default JSCheckBox;
