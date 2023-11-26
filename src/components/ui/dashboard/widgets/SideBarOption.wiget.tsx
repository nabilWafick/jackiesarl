import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Clients from "../../../../models/clients/clients.model";
import useClientsStore from "../../../../store/clients/useClients.store";
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
  onSideBarOptionClick: (
    index: number,
    name: string,
    selectedClient: Clients | undefined
  ) => void;
  logout?: () => void;
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
  //  logout,
}) => {
  const selectedClient = useClientsStore((state) => state.selectedClient);
  return (
    <div className="my-1.5 md:my-0">
      <Link
        to={to}
        onClick={() => {
          //  name == "Se Déconnecter" ? logout!() : "";
          onSideBarOptionClick(index, name, selectedClient);
        }}
      >
        <div
          className={`flex flex-col  md:flex-row lg:flex-row py-1 ${
            currentActiveSideBarOption == name && "bg-primary shadow-md"
          } h-max md:h-10 rounded-md items-center content-center hover:cursor-pointer group py-1 w-max' md:w-full`}
        >
          <div className="h-full sm:hidden' md:block lg:block sm:mx-[1px] md:mx-[5px]  lg:mx-[12px] md:pt-[8px] lg:pt-[8px] mb-1 md:mb-2 flex justify-start items-center content-center">
            {icon}
          </div>
          <div
            className={`w-full flex  justify-center md:justify-start items-center `}
          >
            <p className="text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px] flex items-center text-black  group-hover:text-black sm:pl-2 md:block lg:block text-center md:text-left">
              {name}
            </p>
          </div>
          {subOptions.length != 0 && (
            <div className="h-[14px] w-[17px] mx-1.5 hidden md:block">
              {!isOpen && (
                <IoIosArrowDown
                  size={17}
                  className=" text-gray-500 sm:h-[10px] md:h-[15px]"
                />
              )}
              {isOpen && (
                <IoIosArrowUp
                  size={17}
                  className=" text-gray-500 sm:h-[10px] md:h-[15px]"
                />
              )}
            </div>
          )}
        </div>
      </Link>
      {isOpen && subOptions.length != 0 && (
        <div className="flex flex-col my-1 w-full">
          {subOptions.map((subOption) => (
            <Link
              to={subOption.to}
              key={subOption.name}
              className={`md:ml-[22px] lg:ml-[30px] md:my-[1px]' lg:my-[2px]  py-2 sm:px-auto md:pl-[17px] lg:pl-[23px]  rounded-md flex justify-center content-center md:justify-start items-center text-[8px] sm:text-[8px] md:text-[10px] lg:text-[12px] ${
                subOption.currentActiveSideBarSubOption == subOption.name &&
                "bg-primary"
              } hover:cursor-pointer font-normal text-black hover:text-black text-center md:text-left`}
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
