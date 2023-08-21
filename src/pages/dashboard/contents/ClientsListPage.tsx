import AddingButton from "../../../components/ui/AddingButton";
import FilterOptionButton from "../../../components/ui/FilterOptionButton";
import ShowStatisticsButton from "../../../components/ui/ShowStatisticsButton";
import ClientsTable from "../../../components/ui/ClientsTable";
import "../../../assets/css/table.css";
import DateIntervall from "../../../components/ui/DateIntervall";
import ClientCard from "../../../components/ui/ClientCard";
import { Link } from "react-router-dom";

const ClientsListPage = () => {
  return (
    <div className="h-full w-full flex flex-col justify-centers items-center content-center">
      <ClientCard />
      <div className="w-full flex flex-row justify-between items-center">
        <Link to="/clients/statistiques" className="w-full">
          <ShowStatisticsButton />
        </Link>
        <AddingButton option="Client" onClick={() => {}} />
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
