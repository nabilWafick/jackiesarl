import { VerticalBarChart } from "../../pages_/charts/VerticalBarChart";

const TotalStockCard = () => {
  return (
    <div className="h-full w-1/2 bg-slate-50 p-3 mr-1 batonnet shadow-md rounded-lg">
      <div className="flex mb-3 justify-between ">
        <p className="font-medium text-lg">Stock Total</p>
        <p className="font-bold text-xl text-secondary">7555285 tonnes</p>
      </div>
      <div className=" bg-black h-[1px] mb-[35px] w-full"></div>
      <div className=" h-3/4 w-full flex justify-center items-center content-center">
        <VerticalBarChart />
      </div>
    </div>
  );
};

export default TotalStockCard;
