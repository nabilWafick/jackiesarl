import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import useDashBoardStore from "../../../../../store/table_bord/useTableBord.store";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DailyTraitedOrdersDoughnutChart() {
  const totalCommandesTraitees = useDashBoardStore(
    (state) => state.totalCommandesTraitees
  );
  const data = {
    labels: totalCommandesTraitees.map((data) => data.categorie),
    datasets: [
      {
        //  label: "# of Votes",
        data: totalCommandesTraitees.map((data) => data.total_commande_traitee),
        backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
}
