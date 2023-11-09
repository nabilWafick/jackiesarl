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

export function DailyPaymentsLineBarChart() {
  const statistiquePaiementsHebdomadaires = useDashBoardStore(
    (state) => state.statistiquePaiementsHebdomadaires
  );

  const labels = statistiquePaiementsHebdomadaires.map((data) => data.jour);

  const payments = statistiquePaiementsHebdomadaires.map(
    (data) => data.total_paiement
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Transactions",
        data: payments,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "#D55F5A", //"rgba(255, 99, 132, 1)",
      },
    ],
  };

  return <Line options={options} data={data} className="w-full" />;
}
