import AddingButton from "../../../components/ui/AddingButton";
import DateIntervall from "../../../components/ui/DateIntervall";
import "../../../assets/css/table.css";
import ClientCard from "../../../components/ui/ClientCard";
import ClientPaymentsTable from "../../../components/ui/ClientPaymentsTable";

const ClientPaymentsPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <ClientCard />
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton option="Achat" onClick={() => {}} />
      </div>
      <ClientPaymentsTable />
    </div>
  );
};

export default ClientPaymentsPage;
