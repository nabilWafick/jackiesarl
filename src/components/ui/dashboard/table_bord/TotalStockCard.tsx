import { FC, useEffect } from "react";
import { DailyAvailableStockVerticalBarChart } from "./charts/DailyAvailableStockVerticalBarChart";
import useDashBoardStore from "../../../../store/table_bord/useTableBord.store";

const TotalStockCard: FC = () => {
  const totalStocksBonCommande = useDashBoardStore(
    (state) => state.totalStocksBonCommande
  );
  const isToday = useDashBoardStore((state) => state.isToday);
  const fetchTotalStocksBonCommande = useDashBoardStore(
    (state) => state.fetchTotalStocksBonCommande
  );

  useEffect(() => {
    fetchTotalStocksBonCommande(isToday);
  }, [fetchTotalStocksBonCommande, isToday]);

  return (
    <div className="h-[500px] w-full sm:h-[500px] sm:w-full md:h-[500px] md:w-full lg:h-full lg:w-1/2 bg-slate-50 p-3 mr-1.5 batonnet shadow-md rounded-lg">
      <div className="flex mb-3 justify-between text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
        <p className="font-medium ">Stock Total</p>
        <p className="font-bold text-secondary">
          {totalStocksBonCommande[0].total_stock_restant +
            totalStocksBonCommande[1].total_stock_restant}
          <i> t</i>
        </p>
      </div>
      <div className=" bg-black h-[1px] mb-[35px] w-full"></div>
      <div className=" h-3/4 w-full flex justify-center items-center content-center">
        <DailyAvailableStockVerticalBarChart />
      </div>
    </div>
  );
};

export default TotalStockCard;
