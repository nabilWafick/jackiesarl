import DateIntervall from "../../../components/ui/DateIntervall";
import "../../../assets/css/table.css";
import ClientCard from "../../../components/ui/ClientCard";
import ClientCheckRemittanceTable from "../../../components/ui/ClientCheckRemittanceTable";
//import JSCategorySelect from "../../../components/form/CategorySelect";
import AddingButton from "../../../components/ui/AddingButton";

const ClientCheckRemittancePage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <ClientCard />
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton option="Remise de Chèque" onClick={() => {}} />
      </div>
      <ClientCheckRemittanceTable />
    </div>
  );
};

export default ClientCheckRemittancePage;
