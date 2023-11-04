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
  plugins: {
    /*
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },*/
  },
};

const labels = ["Stock"];

const data = {
  labels,
  datasets: [
    {
      label: "CIM BENIN",
      data: [300],
      backgroundColor: "#39C31D",
    },
    {
      label: "NOCIBE",
      data: [400],
      backgroundColor: "#1AA5D7",
    },
  ],
};

export function VerticalBarChart() {
  return <Bar options={options} data={data} />;
}
