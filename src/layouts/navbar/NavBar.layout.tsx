import { BsBellFill, BsChatTextFill } from "react-icons/bs";
import { JSImages } from "../../utils/images";
import { FC } from "react";
import JSSearchInput from "../../components/form/widgets/SearchInput";

const NavBar: FC = () => {
  return (
    <nav
      className="fixed top-0 left-[33vh] h-[12vh] right-1 flex items-center justify-between px-4 z-10 shadow-sm bg-white opacity-100 "
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
      <div className="main-input h-12 w-full mx-14 flex  items-center shadow-md opacity-100 bg-white">
        <JSSearchInput />
      </div>
      <div className="actions flex flex-row items-center">
        <BsBellFill size={37} className="pr-3 text-secondary" />
        <BsChatTextFill size={37} className="pl-3 text-secondary" />
      </div>
    </nav>
  );
};

export default NavBar;
