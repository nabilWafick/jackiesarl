import { LineBarChart } from "../components/ui/dashboard/table_bord/charts/DailyPaymentsLineBarChart";

const Charts: React.FC = () => {
  return (
    <div className=" w-screen h-screen flex flex-col justify-center content-center items-center p-5">
      <h5 className=" my-3">Mon Diagramme en Bâton</h5>
      <LineBarChart />
    </div>
  );
};

export default Charts;
