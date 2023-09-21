import { useState } from "react";
import SideBarOption from "../components/ui/SideBarOption";
import "../assets/css/Sidebar.css";
import { BsCart3, BsHandbag, BsHouse, BsPersonWorkspace } from "react-icons/bs";
import {
  BiBook,
  BiFile,
  BiLogOut,
  BiPackage,
  BiUser,
  // BiUser,
  BiWalletAlt,
} from "react-icons/bi";
import { FaMoneyBillAlt, FaShoppingBasket } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { GiMoneyStack, GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import SideBarUserInfosCard from "../components/ui/SideBarUserInfosCard";

function SideBar() {
  const [isOpen, setIsOpen] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [currentActiveSideBarOption, setCurrentActiveSideBarOption] =
    useState("");
  const [currentActiveSideBarSubOption, setCurrentActiveSideBarSubOption] =
    useState("");

  const toggleSideBarOptionDropdown = (index: number) => {
    const isOpenState = isOpen.map((value, i) =>
      i === index ? !value : false
    );
    setIsOpen(isOpenState);
  };

  const onSideBarOptionClick = (index: number, name: string) => {
    toggleSideBarOptionDropdown(index);
    setCurrentActiveSideBarOption(name);
  };

  const onSideBarSubOptionClick = (name: string) => {
    setCurrentActiveSideBarSubOption(name);
  };

  const sideBarData = [
    {
      to: "/",
      icon: <BsHouse size={20} className=" text-gray-500" />,
      name: "Table de bord",
      index: 0,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/clients",
      icon: <BiUser size={20} className=" text-gray-500" />,
      name: "Clients",
      index: 1,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [
        {
          to: "/clients/achats",
          name: "Achats",
          currentActiveSideBarSubOption: currentActiveSideBarSubOption,
          onSideBarSubOptionClick: onSideBarSubOptionClick,
        },
        {
          to: "/clients/paiements",
          name: "Paiements",
          currentActiveSideBarSubOption: currentActiveSideBarSubOption,
          onSideBarSubOptionClick: onSideBarSubOptionClick,
        },
        {
          to: "/clients/soldes",
          name: "Soldes",
          currentActiveSideBarSubOption: currentActiveSideBarSubOption,
          onSideBarSubOptionClick: onSideBarSubOptionClick,
        },
        {
          to: "/clients/remise-de-cheque",
          name: "Remises de chèque",
          currentActiveSideBarSubOption: currentActiveSideBarSubOption,
          onSideBarSubOptionClick: onSideBarSubOptionClick,
        },
      ],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/stock",
      icon: <BiPackage size={20} className=" text-gray-500" />,
      name: "Stock",
      index: 2,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [
        {
          to: "/stock/bon-commande",
          name: "Stock Bon Commande",
          currentActiveSideBarSubOption: currentActiveSideBarSubOption,
          onSideBarSubOptionClick: onSideBarSubOptionClick,
        },
        {
          to: "/stock/camion",
          name: "Stock Camion",
          currentActiveSideBarSubOption: currentActiveSideBarSubOption,
          onSideBarSubOptionClick: onSideBarSubOptionClick,
        },
      ],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/vente",
      icon: <BsHandbag size={20} className=" text-gray-500" />,
      name: "Vente",
      index: 3,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [
        {
          to: "/vente/statistiques",
          name: "Statistiques",
          currentActiveSideBarSubOption: currentActiveSideBarSubOption,
          onSideBarSubOptionClick: onSideBarSubOptionClick,
        },
      ],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/paiements",
      icon: <FaMoneyBillAlt size={20} className=" text-gray-500" />,
      name: "Paiements",
      index: 4,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [
        {
          to: "/paiements/validations",
          name: "Validations",
          currentActiveSideBarSubOption: currentActiveSideBarSubOption,
          onSideBarSubOptionClick: onSideBarSubOptionClick,
        },
      ],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/avance",
      icon: <GiPayMoney size={20} className=" text-gray-500" />,
      name: "Avance",
      index: 5,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/achat",
      icon: <BsCart3 size={20} className=" text-gray-500" />,
      name: "Achat",
      index: 6,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/modifications",
      icon: <IoMdSettings size={20} className=" text-gray-500" />,
      name: "Modifications",
      index: 7,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [
        /*  {
          to: "/modifications/ce-mois",
          name: "Ce Mois",
          currentActiveSideBarSubOption: currentActiveSideBarSubOption,
          onSideBarSubOptionClick: onSideBarSubOptionClick,
        },
      */
      ],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/creances",
      icon: <GiReceiveMoney size={20} className=" text-gray-500" />,
      name: "Créances",
      index: 8,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/brouillard",
      icon: <BiBook size={20} className=" text-gray-500" />,
      name: "Brouillard",
      index: 9,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/depenses",
      icon: <BiWalletAlt size={20} className=" text-gray-500" />,
      name: "Dépenses",
      index: 10,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [
        {
          to: "/depenses/validations",
          name: "Validations",
          currentActiveSideBarSubOption: currentActiveSideBarSubOption,
          onSideBarSubOptionClick: onSideBarSubOptionClick,
        },
      ],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/rapports",
      icon: <BiFile size={20} className=" text-gray-500" />,
      name: "Rapports",
      index: 11,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/commandes",
      icon: <FaShoppingBasket size={20} className=" text-gray-500" />,
      name: "Commandes",
      index: 12,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/soldes-courants",
      icon: <GiMoneyStack size={20} className=" text-gray-500" />,
      name: "Soldes Courants",
      index: 13,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/autorisations",
      icon: <BsPersonWorkspace size={20} className=" text-gray-500" />,
      name: "Autorisations",
      index: 14,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/se-deconnecter",
      icon: <BiLogOut size={20} className=" text-gray-500" />,
      name: "Se Déconnecter",
      index: 15,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
  ];

  return (
    <div
      className="h-screen w-2/12 flex flex-col shadow-lg  bg-white fixed top-0 left-0 overflow-scroll overflow-x-hidden sidebar "
      //style={{ width: "30vh" }}
    >
      <div className="h-28 w-2/12 bg-white fixed z-0">
        <SideBarUserInfosCard
          name="KOFFI Jean Paul"
          position="ADMINISTRATEUR"
        />
        <p className="flex w-full justify-center items-center font-bold  text-gray-400 bg-white">
          MENU
        </p>
      </div>

      <div className="flex flex-col mt-40  justify-center px-3">
        {sideBarData.map((sideBarOptionData) => (
          <SideBarOption
            key={sideBarOptionData.name}
            to={sideBarOptionData.to}
            icon={sideBarOptionData.icon}
            name={sideBarOptionData.name}
            index={sideBarOptionData.index}
            isOpen={isOpen[sideBarOptionData.index]}
            currentActiveSideBarOption={
              sideBarOptionData.currentActiveSideBarOption
            }
            subOptions={sideBarOptionData.subOptions}
            onSideBarOptionClick={sideBarOptionData.onSideBarOptionClick}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
