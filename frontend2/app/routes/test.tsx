import { Line } from "react-chartjs-2";
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
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Mock Test Scores" },
  },
};

const data = {
  labels: ["Test 1", "Test 2", "Test 3", "Test 4"],
  datasets: [
    {
      label: "Score",
      data: [9, 6, 4, 6],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
    },
  ],
};

export default function ChartTest() {
  return (
    <div style={{ width: "600px", height: "400px" }}>
      <Line options={options} data={data} />
    </div>
  );
}
