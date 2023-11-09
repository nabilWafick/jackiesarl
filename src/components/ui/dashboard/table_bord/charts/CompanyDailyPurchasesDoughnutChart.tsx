import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import useDashBoardStore from "../../../../../store/table_bord/useTableBord.store";

ChartJS.register(ArcElement, Tooltip, Legend);

export function CompanyDailyPurchasesDoughnutChart() {
  const totalAchatsEntreprise = useDashBoardStore(
    (state) => state.totalAchatsEntreprise
  );
  const data = {
    //["CIM BENIN", "NOCIBE"],
    labels: totalAchatsEntreprise.map((data) => data.categorie),
    datasets: [
      {
        // label: "# of Votes",
        data: totalAchatsEntreprise.map((data) => data.total_achat),
        backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
}
