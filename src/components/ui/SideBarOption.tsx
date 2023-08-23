import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
//import { JSColors } from "../../utils/colors";

interface SideBarSubOption {
  to: string;
  name: string;
  currentActiveSideBarSubOption: string;
  onSideBarSubOptionClick: (name: string) => void;
}

interface SideBarOptionProps {
  to: string;
  icon: ReactElement;
  name: string;
  index: number;
  isOpen: boolean;
  currentActiveSideBarOption: string;
  subOptions: SideBarSubOption[];
  onSideBarOptionClick: (index: number, name: string) => void;
}

const SideBarOption: React.FC<SideBarOptionProps> = ({
  to,
  icon,
  name,
  index,
  isOpen,
  currentActiveSideBarOption,
  subOptions,
  onSideBarOptionClick,
}) => {
  return (
    <div>
      <Link to={to}>
        <div
          className={`flex flex-row ${
            currentActiveSideBarOption == name && "bg-primary"
          } h-10 rounded-md items-center content-center hover:cursor-pointer group`}
          onClick={() => onSideBarOptionClick(index, name)}
        >
          <div className="h-full mx-[12px] flex justify-start items-center content-center">
            {icon}
          </div>
          <div className={`w-full flex flex-row justify-between items-center`}>
            <p className=" text-[15px] flex items-center text-black  group-hover:text-black ">
              {name}
            </p>
            {subOptions.length != 0 && (
              <div className="h-[14px] w-[17px] mx-1.5">
                {!isOpen && (
                  <IoIosArrowDown size={17} className=" text-gray-500" />
                )}
                {isOpen && (
                  <IoIosArrowUp size={17} className=" text-gray-500" />
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
      {isOpen && subOptions.length != 0 && (
        <div className="flex flex-col my-1 w-full">
          {subOptions.map((subOption) => (
            <Link
              to={subOption.to}
              key={subOption.name}
              className={`ml-[40px] my-[2px] py-2 pl-[10px] rounded-md flex items-center text-[12px] ${
                subOption.currentActiveSideBarSubOption == subOption.name &&
                "bg-primary"
              } hover:cursor-pointer font-normal text-black hover:text-black`}
              onClick={() => {
                subOption.onSideBarSubOptionClick(subOption.name);
              }}
            >
              {subOption.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBarOption;
