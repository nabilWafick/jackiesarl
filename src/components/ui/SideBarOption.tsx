import { FaHome } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface SideBarOptionProps {
  index: number;
  isOpen: boolean;
  toggleDropdown: (index: number) => void;
}

const SideBarOption: React.FC<SideBarOptionProps> = ({
  index,
  isOpen,
  toggleDropdown,
}) => {
  return (
    <div>
      <div
        className="flex flex-row bg-gray-200 h-14 items-center content-center"
        onClick={() => toggleDropdown(index)}
      >
        <div className=" w-[60px] h-full bg-blue-400 flex justify-center items-center content-center">
          <FaHome size={20} className=" text-gray-400" />
        </div>
        <span className="w-full flex flex-row justify-between items-center">
          <span className="text-[15px] flex items-center ">
            Tableau de bord
          </span>
          <div className="h-[14px] w-[17px]">
            {!isOpen && <IoIosArrowDown size={17} className=" text-gray-400" />}
            {isOpen && <IoIosArrowUp size={17} className=" text-gray-400" />}
          </div>
        </span>
      </div>
      {isOpen && (
        <div className="flex flex-col w-full">
          <span className="pl-[48px] flex items-center text-[12px] h-8 bg-orange-300">
            Achat
          </span>
          <span className="pl-[48px]  h-8 flex items-center  text-[12px] bg-orange-300">
            Paiement
          </span>
          <span className="pl-[48px]  h-8 flex items-center  text-[12px] bg-orange-300">
            Soldes
          </span>
        </div>
      )}
    </div>
  );
};

export default SideBarOption;
