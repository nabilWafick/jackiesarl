import { useState } from "react";
import SideBarOption from "../components/ui/dashboard/SideBarOption";
import jackieSarlLogo from "./../assets/images/logo.png";
import { BsBellFill, BsChatTextFill, BsPlusCircleFill } from "react-icons/bs";

function Dashboard() {
  const [isOpen, setIsOpen] = useState<boolean[]>([false, false, false]);

  const toggleDropdown = (index: number) => {
    const isOpenState = isOpen.map((value, i) =>
      i === index ? !value : false
    );
    setIsOpen(isOpenState);
  };

  return (
    <div className=" h-screen w-screen flex flex-row">
      {/*=============================== SIDEBAR ==============================*/}
      <div className="h-full w-[280px] flex flex-col bg-white  shadow-md sticky overflow-scroll overflow-x-hidden overflow-y-hidden">
        <div className="h-24 flex flex-row justify-evenly content-center shadow-sm items-center">
          <div className=" h-16 w-16 rounded-full bg-gray-300 shadow-md">
            {/* 
              <img
                 src={administrateur}
              src=""
              className=" object-contain"
               alt="User Image"
            /> 
            */}
          </div>
          <div className="">
            <h2 className=" text-xs mb-1">ADMINISTRATEUR</h2>
            <h3 className="text-xs font-bold">Koffi Jean Paul</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center px-3">
          <h2 className=" self-center mt-5 mb-3 font-bold  text-gray-400">
            MENU
          </h2>
          <SideBarOption
            index={0}
            isOpen={isOpen[0]}
            toggleDropdown={toggleDropdown}
          />
          <SideBarOption
            index={1}
            isOpen={isOpen[1]}
            toggleDropdown={toggleDropdown}
          />
          <SideBarOption
            index={2}
            isOpen={isOpen[2]}
            toggleDropdown={toggleDropdown}
          />
        </div>
      </div>
      {/*================================== MAIN ==================================*/}

      <div className="flex flex-col w-full">
        {/*============================= NAVBAR ===========================*/}
        <div className="h-[80px] shadow-sm w-full flex flex-row items-center p-7">
          <div className="logo flex items-center">
            <img
              src={jackieSarlLogo}
              alt="logo"
              className="h-[150px] w-[150px] object-contain flex items-center"
            />
          </div>
          <div className="main-input h-12 bg-blue-500 w-full mx-20 flex items-center shadow-md">
            <input
              type="search"
              className="w-full h-full shadow-md bg-gray-400 border-orange-500"
              name=""
              id=""
            />
          </div>
          <div className="actions flex flex-row items-center">
            <BsBellFill size={37} className="pr-3" />
            <BsChatTextFill size={37} className="pl-3" />
          </div>
        </div>
        {/*==================== ADDING BUTTON ====================*/}
        <div className="w-full flex flex-row justify-center my-4 items-center">
          <button
            className=" ronded-sm shadow-md p-2 border-[#d55f5a] border-2 text-[#d55f5a] hover:outline-none hover:border-[#d55f5a]"
            type="button"
          >
            <div className="flex items-center">
              Ajouter un nouveau
              <BsPlusCircleFill className="ml-3 text-[#d55f5a]" />
            </div>
          </button>
        </div>
        {/*==================== DATE INTERVAL ====================*/}

        <div className="flex justify-between items-center w-full px-5">
          <div className="w-max my-3 flex p-2 border border-gray-200 justify-between items-center date-config">
            <p className="">Définissez votre intervalle : </p>
            <p className="mx-3">Du</p>
            <select
              className="px-2.5 py-1 bg-transparent border border-gray-200 outline-none"
              name="first-date"
              id="first-date"
            >
              <option value="date1">Date 1</option>
              <option value="date2">Date 2</option>
              <option value="date3">Date 3</option>
              <option value="date4">Date 4</option>
            </select>
            <p className="mx-3">Au</p>
            <select
              className="px-2.5 py-1 bg-transparent border border-gray-200 outline-none"
              name="first-date"
              id="first-date"
            >
              <option value="date1">Date 1</option>
              <option value="date2">Date 2</option>
              <option value="date3">Date 3</option>
              <option value="date4">Date 4</option>
            </select>
          </div>
          <select
            className="px-3 py-2 bg-[#d55f5a] rounded-md text-white border border-gray-200 outline-none"
            name="first-date"
            id="first-date"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
        {/* ======================== FORM CARD ======================== */}

        <div
          className="flex flex-col self-center justify-center items-center my-10 w-[300px] p-3 shadow-lg
"
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-[#d55f5a] text-white">
            Remise de chèque
          </div>

          <div className="my-2 w-full">
            <input
              id="date"
              name="date"
              type="date"
              autoComplete="date"
              placeholder="Date"
              required
              className="w-full text-black text-md rounded-sm bg-transparent py-1.5 px-2 border border-orange-400 focus:rounded-sm focus:bg-[#d55f5a]  focus:outline-none focus:border-2  cursor-orange-400 "
            />
          </div>
          <div className="my-2 w-full">
            <textarea
              id="description"
              name="description"
              autoComplete="description"
              placeholder="Description"
              required
              className="w-full text-black text-md rounded-sm bg-transparent py-1.5 px-2 border border-orange-400 focus:rounded-sm focus:bg-[#d55f5a]  focus:outline-none focus:border-2  cursor-orange-400 "
            ></textarea>
          </div>
          <div className="my-2 w-full">
            <input
              id="banque"
              name="banque"
              type="text"
              autoComplete="banque"
              placeholder="Banque"
              required
              className="w-full text-black text-md rounded-sm bg-transparent py-1.5 px-2 border border-orange-400 focus:rounded-sm focus:bg-[#d55f5a]  focus:outline-none focus:border-2  cursor-orange-400 "
            />
          </div>
          <div className="my-2 w-full">
            <input
              id="montant"
              name="montant"
              type="text"
              autoComplete="montant"
              placeholder="Montant"
              required
              className="w-full text-black text-md rounded-sm bg-transparent py-1.5 px-2 border border-orange-400 focus:rounded-sm focus:bg-[#d55f5a]  focus:outline-none focus:border-2  cursor-orange-400 "
            />
          </div>
          <div className="my-2 w-full">
            <input
              id="reste"
              name="reste"
              type="text"
              autoComplete="reste"
              placeholder="Reste"
              required
              className="w-full text-black text-md rounded-sm bg-transparent py-1.5 px-2 border border-orange-400 focus:rounded-sm focus:bg-[#d55f5a]  focus:outline-none focus:border-2  cursor-orange-400 "
            />
          </div>

          <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
            <button
              type="button"
              className="text-white bg-[#d55f5a] shadow-md hover:border-none"
            >
              Annuler
            </button>
            <button
              type="button"
              className="text-white bg-[#d55f5a] shadow-md hover:border-none"
            >
              Valider
            </button>
          </div>
        </div>

        <div className="my-5">Space</div>
      </div>
    </div>
  );
}

export default Dashboard;
