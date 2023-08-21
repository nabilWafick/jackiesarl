import DateIntervall from "../../../components/ui/DateIntervall";
import "../../../assets/css/table.css";
import AdvanceTable from "../../../components/ui/AdvanceTable";
import AddingButton from "../../../components/ui/AddingButton";

const AdvancePage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-start items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton option="Avance" onClick={() => {}} />
      </div>
      <AdvanceTable />
    </div>
  );
};

export default AdvancePage;
