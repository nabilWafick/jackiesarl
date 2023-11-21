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
    <div className="h-full w-1/2 bg-slate-50 p-3 mr-1.5 batonnet shadow-md rounded-lg">
      <div className="flex mb-3 justify-between ">
        <p className="font-medium text-lg">Stock Total</p>
        <p className="font-bold text-xl text-secondary">
          {totalStocksBonCommande[0].total_stock_restant +
            totalStocksBonCommande[1].total_stock_restant}
          tonnes
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
