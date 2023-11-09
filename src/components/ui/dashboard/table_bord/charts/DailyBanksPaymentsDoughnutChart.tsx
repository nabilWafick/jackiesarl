import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import useDashBoardStore from "../../../../../store/table_bord/useTableBord.store";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DailyBanksPaymentsDoughnutChart() {
  const totalPaiementsBanques = useDashBoardStore(
    (state) => state.totalPaiementsBanques
  );
  const data = {
    labels: totalPaiementsBanques.map((data) => data.banque),
    datasets: [
      {
        //  label: "# of Votes",
        data: totalPaiementsBanques.map((data) => data.total_paiement),
        backgroundColor: [
          "rgba(255, 199, 132,1)",
          "rgba(254, 162, 235, 1)",
          "rgba(155, 99, 132,1)",
          "rgba(54, 132, 35, 1)",
          "rgba(155, 199, 132,1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderColor: [
          "rgba(255, 199, 132,1)",
          "rgba(254, 162, 235, 1)",
          "rgba(155, 99, 132,1)",
          "rgba(54, 132, 35, 1)",
          "rgba(155, 199, 132,1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
}
