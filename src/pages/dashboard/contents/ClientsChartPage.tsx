import { BiArrowBack } from "react-icons/bi";
import { FaArrowRight, FaCalendar } from "react-icons/fa";
import { LineBarChart } from "../../../pages_/charts/LineBarChart";
import { Link } from "react-router-dom";

const ClientsChartPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Link
        to="/clients"
        className="w-max font-normal text-black hover:text-black"
      >
        <div className="my-3 flex self-start items-center p-2 border-2 border-primary text-sm">
          <BiArrowBack className="mr-3 text-secondary" size={20} /> Retour à la
          page de liste des clients
        </div>
      </Link>
      <div className="flex my-1 justify-between items-center">
        <p className="text-lg   ">Clients totals inscrits</p>
        <div className="flex flex-row text-sm p-2 bg-white border border-primary items-center    ">
          Juin 2023 <FaCalendar size={25} className="pl-3 text-secondary" />
        </div>
      </div>

      <div className="h-[400px] w-full my-3 flex justify-center">
        <LineBarChart />
      </div>

      <Link
        to="/clients/liste-tonnage"
        className="w-max font-normal text-black hover:text-black"
      >
        <div className="my-10 flex self-start items-center p-2 border-2 border-primary text-sm">
          Retour à la page de liste des clients classés par ordre de tonnage
          <div className="flex items-center  p-1 rounded-sm border border-primary ml-5 shadow-sm text-secondary ">
            Aller à la page <FaArrowRight className="ml-3 p-1" size={20} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ClientsChartPage;
