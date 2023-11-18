import { useEffect } from "react";
import "../../../../assets/css/table.css";
import { DailySalesLineBarChart } from "../../../../components/ui/dashboard/table_bord/charts/DailySalesLineBarChart";
import useDashBoardStore from "../../../../store/table_bord/useTableBord.store";

const SellingStatisticsPage = () => {
  const fetchStatistiqueVentesHebdomadaires = useDashBoardStore(
    (state) => state.fetchStatistiqueVentesHebdomadaires
  );

  useEffect(() => {
    fetchStatistiqueVentesHebdomadaires();
  }, [fetchStatistiqueVentesHebdomadaires]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-[500px] my-16 flex justify-center">
        <DailySalesLineBarChart />
      </div>
    </div>
  );
};

export default SellingStatisticsPage;
