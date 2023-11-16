import { DailyAvailableStockVerticalBarChart } from "../../../../components/ui/dashboard/table_bord/charts/DailyAvailableStockVerticalBarChart";

const StockChartsPage = () => {
  return (
    <div className="h-full w-full flex ">
      <div className="h-[500px] w-full my-16 flex justify-center object-cover">
        <DailyAvailableStockVerticalBarChart />
      </div>
    </div>
  );
};

export default StockChartsPage;
