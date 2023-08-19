import { BsBellFill, BsChatTextFill } from "react-icons/bs";
import { JSImages } from "../../utils/images";

function NavBar() {
  return (
    <div
      className="h-[80px] w-full flex flex-row items-center p-7 shadow-sm bg-white"
      //style={{ width: "30vh" }}
    >
      <div className="logo flex items-center">
        <img
          src={JSImages.logo}
          alt="logo"
          className="h-[150px] w-[150px] object-contain flex items-center"
        />
      </div>
      <div className="main-input h-12 w-full mx-20 flex items-center shadow-md">
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
