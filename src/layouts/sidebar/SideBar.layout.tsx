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
import {
  FaMoneyBillAlt,
  FaRegMoneyBillAlt,
  FaShoppingBasket,
} from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney, GiMoneyStack } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import useAuthenticatedEmployeStore from "../../store/authenticated_employe/useAuthenticatedEmploye.store";
import { useNavigate } from "react-router-dom";
import { authenticatedEmployee } from "../../data/GlobalData";
import AuthAPI from "../../api/auth/auth.api";
import { toggleModal } from "../../components/ui/dashboard/widgets/ToggleModal";

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

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const navigateTo = useNavigate();

  const logout = async () => {
    const response = await AuthAPI.logout(authenticatedEmployee.value!);

    if (response!.status == 200) {
      authenticatedEmployee.value = undefined;
      localStorage.removeItem("AuthenticatedEmployeStore");
      sessionStorage.clear();
      navigateTo("/se-connecter");
    } else {
      setActionResultMessage("Nous avons pas pu vous déconnecter");
      toggleModal("action-result-message");
    }
  };

  const sideBarData = [
    {
      to: "/",
      icon: <BsHouse size={20} className=" text-gray-500 sm:h-5" />,
      name: "Table de bord",
      index: 0,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/clients",
      icon: <BiUser size={20} className=" text-gray-500 sm:h-5" />,
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
      icon: <BiPackage size={20} className=" text-gray-500 sm:h-5" />,
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
      icon: <BsHandbag size={20} className=" text-gray-500 sm:h-5" />,
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
      icon: <FaMoneyBillAlt size={20} className=" text-gray-500 sm:h-5" />,
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
      icon: <GiPayMoney size={20} className=" text-gray-500 sm:h-5" />,
      name: "Avances",
      index: 5,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/achat",
      icon: <BsCart3 size={20} className=" text-gray-500 sm:h-5" />,
      name: "Achat",
      index: 6,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/modifications",
      icon: <IoMdSettings size={20} className=" text-gray-500 sm:h-5" />,
      name: "Modifications",
      index: 7,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/creances",
      icon: <GiReceiveMoney size={20} className=" text-gray-500 sm:h-5" />,
      name: "Créances",
      index: 8,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/brouillard",
      icon: <BiBook size={20} className=" text-gray-500 sm:h-5" />,
      name: "Brouillard",
      index: 9,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/depenses",
      icon: <BiWalletAlt size={20} className=" text-gray-500 sm:h-5" />,
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
      icon: <BiFile size={20} className=" text-gray-500 sm:h-5" />,
      name: "Rapports",
      index: 11,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/commandes",
      icon: <FaShoppingBasket size={20} className=" text-gray-500 sm:h-5" />,
      name: "Commandes",
      index: 12,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/soldes-courants",
      icon: <GiMoneyStack size={20} className=" text-gray-500 sm:h-5" />,
      name: "Soldes Courants",
      index: 13,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/factures-mecef",
      icon: <FaRegMoneyBillAlt size={20} className=" text-gray-500 sm:h-5" />,
      name: "Factures MECEF",
      index: 14,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/autorisations",
      icon: <BsPersonWorkspace size={20} className=" text-gray-500 sm:h-5" />,
      name: "Autorisations",
      index: 15,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
    },
    {
      to: "/se-connecter",
      icon: <BiLogOut size={20} className=" text-gray-500 sm:h-5" />,
      name: "Se Déconnecter",
      index: 16,
      isOpen: false,
      currentActiveSideBarOption: currentActiveSideBarOption,
      subOptions: [],
      onSideBarOptionClick: onSideBarOptionClick,
      logout: logout,
    },
  ];

  return (
    <aside
      className="fixed top-0 left-0 h-full w-[10vh] sm:w-[13vh] md:w-[20vh] lg:w-[30vh]  z-10 shadow-md bg-white opacity-100"
      // className="h-screen w-2/12 flex flex-col shadow-sm fixed top-0 left-0 overflow-x-hidden bg-white" previous sytle
      //style={{ width: "30vh" }}
    >
      <div className="flex flex-col h-[10%] sm:h-[15%] md:h-[15%] lg:h-[15%] md:py-2 border-b border-b-primary">
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
        {/* <p className="text-center font-bold  mb-5 text-gray-400' text-tableTextColor ">
          MENU
        </p> */}
      </div>

      <div className="h-[83%] sm:h-[78%] w-full flex flex-col sm:px-1 md:px-2 lg:px-3  py-3 overflow-scroll sidebar overflow-x-hidden">
        {sideBarData.map((sideBarOptionData, index) => {
          return (
            index != 16 && (
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
                //  logout={logout}
              />
            )
          );
        })}
      </div>
      <div className="h-[7%] w-full px-3 pt-1 flex flex-col justify-center border-t border-t-primary ">
        {/* <SideBarOption
          to={sideBarData[15].to}
          icon={sideBarData[15].icon}
          name={sideBarData[15].name}
          index={sideBarData[15].index}
          isOpen={isOpen[sideBarData[15].index]}
          currentActiveSideBarOption={
            sideBarData[15].currentActiveSideBarOption
          }
          subOptions={sideBarData[15].subOptions}
          onSideBarOptionClick={sideBarData[15].onSideBarOptionClick}
        /> */}
        <div
          className={`flex flex-col  md:flex-row lg:flex-row py-1 ${
            currentActiveSideBarOption == sideBarData[16].name &&
            "bg-primary shadow-md"
          } h-max md:h-10 rounded-md items-center content-center hover:cursor-pointer group py-1 w-max' md:w-full`}
          onClick={() => {
            logout();
          }}
        >
          <div className="h-full sm:hidden' md:block lg:block sm:mx-[1px] md:mx-[5px]  lg:mx-[12px] md:pt-[8px] lg:pt-[8px] mb-1 md:mb-2 flex justify-start items-center content-center">
            {sideBarData[16].icon}
          </div>
          <div
            className={`w-full flex  justify-center md:justify-start items-center `}
          >
            <p
              className={`text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px] font-medium flex items-center text-black  group-hover:text-black sm:pl-2 md:block lg:block text-center md:text-left`}
            >
              {sideBarData[16].name}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;

/*
  useEffect(() => {
    if (needAuth) {
      if (!authenticatedEmploye) {
        navigateTo("/se-connecter");
        sessionStorage.clear();
      } else {
        const response = AuthAPI.verifyAuthentication(authenticatedEmploye);
        if (response!.status == 202) {
          console.log("response in Auth", response);
          setIsLoading(false);
        } else {
          localStorage.removeItem("AuthenticatedEmployeStore");
          sessionStorage.clear();
          navigateTo("/se-connecter");
        }
      }
    } else {
      if (!authenticatedEmploye) {
        setIsLoading(false);
      } else {
        const response = AuthAPI.verifyAuthentication(authenticatedEmploye);
        console.log("response in Auth", response);
        if (response!.status == 202) {
          navigateTo("/");
        } else {
          setIsLoading(false);
        }
      }
    }
  }, [authenticatedEmploye, navigateTo, needAuth]);
*/
