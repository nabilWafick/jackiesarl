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

export function DailySalesQuantityLineBarChart() {
  const statistiqueQuantitesVentesHebdomadaires = useDashBoardStore(
    (state) => state.statistiqueQuantitesVentesHebdomadaires
  );

  const labels = statistiqueQuantitesVentesHebdomadaires.map(
    (data) => data.jour
  );

  const salesQuantity = statistiqueQuantitesVentesHebdomadaires.map(
    (data) => data.total_quantite_vente
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Quantités",
        data: salesQuantity,
        borderColor: "rgb(25, 170, 230)",
        backgroundColor: "#19AAE6", //"rgb(25, 170, 230)",
      },
    ],
  };

  return <Line options={options} data={data} className="w-full" />;
}
