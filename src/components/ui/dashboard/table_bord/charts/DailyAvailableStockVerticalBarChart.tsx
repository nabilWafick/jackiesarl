import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useDashBoardStore from "../../../../../store/table_bord/useTableBord.store";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {},
};

export function DailyAvailableStockVerticalBarChart() {
  const totalStocksBonCommande = useDashBoardStore(
    (state) => state.totalStocksBonCommande
  );
  const labels = ["Stock"];

  const data = {
    labels,
    datasets: [
      {
        label: totalStocksBonCommande[0].categorie,
        data: [totalStocksBonCommande[0].total_stock_restant],
        backgroundColor: "#39C31D",
      },
      {
        label: totalStocksBonCommande[1].categorie,
        data: [totalStocksBonCommande[1].total_stock_restant],
        backgroundColor: "#1AA5D7",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
