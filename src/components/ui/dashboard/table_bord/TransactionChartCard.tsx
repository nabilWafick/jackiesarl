import { FC } from "react";
import { DailyPaymentsLineBarChart } from "./charts/DailyPaymentsLineBarChart";

const TransactionChartCard: FC = () => {
  return (
    <div className="h-full w-full bg-slate-50 p-3 shadow-md rounded-xl courbe">
      <div className="flex mb-3 justify-between ">
        <p className="font-medium text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
          Statistique Hebdomadaire des Paiements
        </p>
      </div>
      <div className=" bg-black h-[1px] mb-[30px] w-full"></div>
      <div className=" h-3/4 w-full flex justify-center items-center content-center">
        <DailyPaymentsLineBarChart />
      </div>
    </div>
  );
};

export default TransactionChartCard;
