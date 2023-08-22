import { FC } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

interface AddingButtonProps {
  option: string;
  onClick: () => void;
}

const AddingButton: FC<AddingButtonProps> = ({ option, onClick }) => {
  return (
    <div className="w-full flex justify-end items-center hover:cursor-pointer">
      <div
        className={` rounded-lg shadow-md p-2 border-secondary  border-2 hover:border-2 text-secondary hover:border-secondary flex items-center`}
        onClick={onClick}
      >
        <div className=" flex flex-row items-center font-medium">
          Ajouter {option}
          <BsPlusCircleFill size={20} className={`ml-3 text-secondary`} />
        </div>
      </div>
    </div>
  );
};

export default AddingButton;
