import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useDashBoardStore from "../../../../../store/table_bord/useTableBord.store";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {},
};

export function DailySalesLineBarChart() {
  const statistiqueVentesHebdomadaires = useDashBoardStore(
    (state) => state.statistiqueVentesHebdomadaires
  );

  const labels = statistiqueVentesHebdomadaires.map((data) => data.jour);

  const sales = statistiqueVentesHebdomadaires.map((data) => data.total_vente);

  const data = {
    labels,
    datasets: [
      {
        label: "Ventes",
        data: sales,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "#D55F5A", //"rgba(255, 99, 132, 1)",
      },
    ],
  };

  return <Line options={options} data={data} className="w-full" />;
}
