import { BsBellFill, BsChatTextFill } from "react-icons/bs";
import { JSImages } from "../../utils/images";
import { FC } from "react";
import JSSearchInput from "../../components/form/widgets/SearchInput";

const NavBar: FC = () => {
  return (
    <nav
      className="fixed top-0 left-[10vh] sm:left-[13vh] md:left-[20vh] lg:left-[30vh] h-[12vh] right-[5px] flex items-center justify-between px-4 z-10 shadow-sm bg-white opacity-100 "
      //  className=" h-[80px] w-[83%] flex flex-row items-center px-3 bg-white  fixed top-0  right-1. shadow-sm" previous style
      // style={{ width: "100%" }}
    >
      <div className="h-[75px] w-[100px] logo flex items-center">
        <img
          src={JSImages.logo}
          alt="logo"
          className=" object-contain flex items-center"
        />
      </div>
      <div className="main-input h-12 w-full mx-7 sm:mx-8 md:mx-10 lg:mx-14 flex  items-center shadow-md opacity-100 bg-white">
        <JSSearchInput />
      </div>
      <div className="actions flex flex-row items-center text-5 sm:text-7 md:text-10 lg:text-12">
        <BsBellFill
          size={35}
          className="pr-1 sm:pr-3 md:pr-3 text-secondary h-5 sm:h-7 md:h-10 lg:h-12"
        />
        <BsChatTextFill
          size={35}
          className="pl-1 sm:pl-3 md:pl-3 text-secondary h-5 sm:h-7 md:h-10 lg:h-12"
        />
      </div>
    </nav>
  );
};

export default NavBar;
