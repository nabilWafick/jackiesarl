import { useEffect } from "react";
import "../../../../assets/css/table.css";
import { DailySalesLineBarChart } from "../../../../components/ui/dashboard/table_bord/charts/DailySalesLineDarChart";
import useDashBoardStore from "../../../../store/table_bord/useTableBord.store";

const SellingStatisticsPage = () => {
  const fetchStatistiqueSalesHebdomadaires = useDashBoardStore(
    (state) => state.fetchStatistiqueSalesHebdomadaires
  );

  useEffect(() => {
    fetchStatistiqueSalesHebdomadaires();
  }, [fetchStatistiqueSalesHebdomadaires]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-[500px] my-16 flex justify-center">
        <DailySalesLineBarChart />
      </div>
    </div>
  );
};

export default SellingStatisticsPage;
