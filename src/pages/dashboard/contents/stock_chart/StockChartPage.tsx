import { FaCalendar } from "react-icons/fa";
import { LineBarChart } from "../../../../pages_/charts/LineBarChart";

const StockChartsPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="my-5">
        <div className="flex my-1 justify-between items-center">
          <p className="text-lg   ">Évolution des Stocks CIM BENIN</p>
          <div className="flex flex-row text-sm p-2 bg-white border border-primary items-center    ">
            Juin 2023 <FaCalendar size={25} className="pl-3 text-secondary" />
          </div>
        </div>
        <div className="h-[400px] w-full my-3 flex justify-center object-cover">
          <LineBarChart />
        </div>
      </div>
      <div className="my-5">
        <div className="flex my-1 justify-between items-center">
          <p className="text-lg   ">Évolution des Stocks NOCIBE</p>
          <div className="flex flex-row text-sm p-2 bg-white border border-primary items-center    ">
            Juin 2023 <FaCalendar size={25} className="pl-3 text-secondary" />
          </div>
        </div>
        <div className="h-[400px] w-full my-3 flex justify-center">
          <LineBarChart />
        </div>
      </div>
    </div>
  );
};

export default StockChartsPage;
