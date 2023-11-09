import { FaCalendar } from "react-icons/fa";
import { DailyPaymentsLineBarChart } from "../../../../components/ui/dashboard/table_bord/charts/DailyPaymentsLineBarChart";
import "../../../../assets/css/table.css";

const SellingStatisticsPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex my-1 justify-between items-center">
        <p className="text-lg   ">Statistique des ventes</p>
        <div className="flex flex-row text-sm p-2 bg-white border border-primary items-center    ">
          Juin 2024 <FaCalendar size={25} className="pl-3 text-secondary" />
        </div>
      </div>
      <div className="h-[400px] w-12/12 my-3 flex justify-center">
        <DailyPaymentsLineBarChart />
      </div>
    </div>
  );
};

export default SellingStatisticsPage;
