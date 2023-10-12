import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import AdvanceTable from "../../../../components/ui/dashboard/advance/AdvanceTable";
import "../../../../assets/css/table.css";

const AdvancePage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-start items-center mt-2 my-3 content-center">
        <DateIntervall />
      </div>
      <AdvanceTable />
    </div>
  );
};

export default AdvancePage;
