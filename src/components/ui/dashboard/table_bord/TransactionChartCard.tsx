import { FC } from "react";
import { LineBarChart } from "../../../../pages_/charts/LineBarChart";

const TransactionChartCard: FC = () => {
  return (
    <div className="h-full w-1/2 bg-slate-50 p-3 shadow-md rounded-xl courbe">
      <div className="flex mb-3 justify-between ">
        <p className="font-medium text-lg">Statistique hebdomadaire de vente</p>
      </div>
      <div className=" bg-black h-[1px] mb-[30px] w-full"></div>
      <div className=" h-3/4 w-full flex justify-center items-center content-center">
        <LineBarChart />
      </div>
    </div>
  );
};

export default TransactionChartCard;
