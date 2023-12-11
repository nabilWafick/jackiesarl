import { DailyAvailableStockVerticalBarChart } from "../../../../components/ui/dashboard/table_bord/charts/DailyAvailableStockVerticalBarChart";

const StockChartsPage = () => {
  return (
    <div className="h-full w-full flex ">
      <div className="h-[400px] w-full  flex justify-center ">
        <DailyAvailableStockVerticalBarChart />
      </div>
    </div>
  );
};

export default StockChartsPage;
