import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import ClientsTonnageListTable from "../../../../components/ui/dashboard/clients_tonnage_list/ClientsTonnageListTable";
import "../../../../assets/css/table.css";

const ClientsTonnageListPage = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Link
        to="/clients/statistiques"
        className="flex self-start w-max font-normal text-black hover:text-black"
      >
        <div className="my-3 flex self-start items-center p-2 border-2 border-primary text-sm">
          <BiArrowBack className="mr-3 text-secondary" size={20} /> Retour à la
          page des statistiques
        </div>
      </Link>
      {/* <div className="w-full flex justify-between items-center mt-2 content-center">
        <DateIntervall />
        <FilterOptionButton />
      </div> */}
      <ClientsTonnageListTable />
    </div>
  );
};

export default ClientsTonnageListPage;
