import { BsBellFill, BsChatTextFill } from "react-icons/bs";
import { JSImages } from "../utils/images";

function NavBar() {
  return (
    <div
      className=" h-[80px] w-10/12 flex flex-row items-center py-7 px-3 bg-white  fixed right-[-0.1px] shadow-sm"
      // style={{ width: "100%" }}
    >
      <div className="h-[75px] w-[100px] logo flex items-center">
        <img
          src={JSImages.logo}
          alt="logo"
          className=" object-contain flex items-center"
        />
      </div>
      <div className="main-input h-12 w-full mx-14 flex items-center shadow-md">
        <input
          type="search"
          className={`w-full h-full shadow-sm rounded-md bg-transparent border-2 focus:outline-none focus:border-secondary px-2`}
          name="searchBar"
          id="searchBar"
        />
      </div>
      <div className="actions flex flex-row items-center">
        <BsBellFill size={37} className="pr-3 text-secondary" />
        <BsChatTextFill size={37} className="pl-3 text-secondary" />
      </div>
    </div>
  );
}

export default NavBar;
