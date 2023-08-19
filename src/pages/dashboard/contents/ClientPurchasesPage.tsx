import AddingButton from "../../../components/ui/AddingButton";
import DateIntervall from "../../../components/ui/DateIntervall";
import ClientPurchasesTable from "../../../components/ui/ClientPurchasesTable";
import "../../../assets/css/table.css";
import ClientCard from "../../../components/ui/ClientCard";

const ClientPurchasesPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <ClientCard />
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton option="Achat" onClick={() => {}} />
      </div>
      <ClientPurchasesTable />
    </div>
  );
};

export default ClientPurchasesPage;
