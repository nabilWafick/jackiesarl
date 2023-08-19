import AddingButton from "../../../components/ui/AddingButton";
import FilterOptionButton from "../../../components/ui/FilterOptionButton";
import ShowStatisticsButton from "../../../components/ui/ShowStatisticsButton";
import ClientsTable from "../../../components/ui/ClientsTable";
import "../../../assets/css/table.css";
import DateIntervall from "../../../components/ui/DateIntervall";
import ClientCard from "../../../components/ui/ClientCard";

const ClientsListPage = () => {
  return (
    <div className="h-full w-full flex flex-col ">
      <ClientCard />
      <div className="w-full flex flex-row justify-between items-center bg-white">
        <ShowStatisticsButton />
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
