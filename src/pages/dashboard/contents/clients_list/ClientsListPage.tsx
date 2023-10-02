import ClientCard from "../../../../components/ui/dashboard/clients/ClientCard";
import { Link } from "react-router-dom";
import ShowStatisticsButton from "../../../../components/ui/dashboard/widgets/ShowStatisticsButton";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import FilterOptionButton from "../../../../components/ui/dashboard/widgets/FilterOptionButton";
import ClientsTable from "../../../../components/ui/dashboard/clients/ClientsTable";
import "../../../../assets/css/table.css";
import ClientAdding from "../../../../components/form/forms/client_adding/ClientAdding";

const ClientsListPage = () => {
  return (
    <div className="h-full w-full flex flex-col justify-centers items-center content-center">
      <ClientCard />
      <div className="w-full flex flex-row justify-between items-center">
        <Link to="/clients/statistiques" className="w-full">
          <ShowStatisticsButton />
        </Link>
        <AddingButton
          option="Ajouter un client"
          onClick={() => {
            toggleModal("client-adding-form");
          }}
        />
        <ClientAdding
          firstname=""
          lastname=""
          ifuNumber=""
          email=""
          netValue=""
        />
      </div>
      <div className="w-full flex justify-between items-center mt-2 content-center">
        <DateIntervall />
        <FilterOptionButton />
      </div>
      <ClientsTable />
    </div>
  );
};

export default ClientsListPage;
