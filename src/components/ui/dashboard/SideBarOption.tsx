import { FaHome } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
//import { JSColors } from "../../utils/colors";

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
        className={`flex flex-row bg-[${
          "" /*JSColors.primary*/
        }] h-10 items-center content-center`}
        onClick={() => toggleDropdown(index)}
      >
        <div className=" w-[60px] h-full  flex justify-center items-center content-center">
          <FaHome size={20} className=" text-gray-500" />
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <p className="text-[15px] flex items-center ">Tableau de bord</p>
          <div className="h-[14px] w-[17px]">
            {!isOpen && <IoIosArrowDown size={17} className=" text-gray-500" />}
            {isOpen && <IoIosArrowUp size={17} className=" text-gray-500" />}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col my-1 w-full">
          <span className="ml-[45px] my-[2px] py-2 px-3 rounded-md flex items-center text-[12px] bg-[#FAE5E5]">
            Achat
          </span>
          <span className="ml-[45px] my-[2px] py-2 px-3 rounded-md flex items-center  text-[12px] bg-[#FAE5E5]">
            Paiement
          </span>
          <span className="ml-[45px] my-[2px] py-2 px-3 rounded-md flex items-center  text-[12px] bg-[#FAE5E5]">
            Soldes
          </span>
        </div>
      )}
    </div>
  );
};

export default SideBarOption;
