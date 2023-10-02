import SellingTable from "../../../../components/ui/dashboard/selling/SellingTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import "../../../../assets/css/table.css";

const SellingPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-start items-center mt-2 my-3 content-center">
        <DateIntervall />
      </div>
      <SellingTable />
    </div>
  );
};

export default SellingPage;
