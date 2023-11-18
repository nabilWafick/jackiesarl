import { FC } from "react";
import SideBarOption from "../../components/ui/dashboard/widgets/SideBarOption.wiget";
import "../../assets/css/Sidebar.css";
import SideBarUserInfosCard from "../../components/ui/dashboard/widgets/SideBarUserInfosCard.widget";
import useInterfacesStore from "../../store/interfaces/useInfacesStore";
import {
  BiBook,
  BiFile,
  BiLogOut,
  BiPackage,
  BiUser,
  BiWalletAlt,
} from "react-icons/bi";
import { BsHouse, BsHandbag, BsCart3, BsPersonWorkspace } from "react-icons/bs";
import { FaMoneyBillAlt, FaShoppingBasket } from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney, GiMoneyStack } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import useAuthenticatedEmployeStore from "../../store/authenticated_employe/useAuthenticatedEmploye.store";
import { useNavigate } from "react-router-dom";

const SideBar: FC = () => {
  const isOpen = useInterfacesStore((state) => state.isOpen);

  const currentActiveSideBarOption = useInterfacesStore(
    (state) => state.currentActiveSideBarOption
  );
  const currentActiveSideBarSubOption = useInterfacesStore(
    (state) => state.currentActiveSideBarSubOption
  );
  const onSideBarOptionClick = useInterfacesStore(
    (state) => state.setCurrentActiveSideBarOption
  );
  const onSideBarSubOptionClick = useInterfacesStore(
    (state) => state.setCurrentActiveSideBarSubOption
  );

  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const navigateTo = useNavigate();

  const logout = async () => {
    localStorage.removeItem("AuthenticatedEmployeStore");
    sessionStorage.clear();
    navigateTo("/se-connecter");
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
      to: "/avances",
      icon: <GiPayMoney size={20} className=" text-gray-500" />,
      name: "Avances",
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
      subOptions: [],
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
      to: "/se-connecter",
      icon: <BiLogOut size={20} className=" text-gray-500" />,
      name: "Se Déconnecter",
      index: 15,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
      logout: logout,
    },
  ];

  return (
    <div
      className="h-screen w-2/12 flex flex-col shadow-sm fixed top-0 left-0 overflow-x-hidden bg-white"
      //style={{ width: "30vh" }}
    >
      <div className="flex flex-col h-[20%]">
        <SideBarUserInfosCard
          name={
            authenticatedEmploye != undefined
              ? `${authenticatedEmploye!.nom} ${authenticatedEmploye!.prenoms}`
              : "Utilisateur Inconnu"
          }
          position={
            authenticatedEmploye != undefined
              ? `${authenticatedEmploye!.role}`
              : "Poste Inconnu"
          }
        />
        <p className="text-center font-bold  mb-5 text-gray-400' text-tableTextColor ">
          MENU
        </p>
      </div>

      <div className="h-[80%] w-full flex flex-col px-3 overflow-scroll sidebar overflow-x-hidden">
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
            logout={logout}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
