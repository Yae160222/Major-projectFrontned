import { useState } from "react";
import { Toolbar } from "../components/Toolbar";
import "../styles/Dashboard.css";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const leftElements = [
  {
    name: "Home",
    onClick: () => console.log("clicked on problems"),
    to: "/",
  },
  {
    name: "mock test",
    onClick: () => console.log("clicked on mock interviews"),
    to: "/Mocktest",
  },
  {
    name: "Dashboard",
    onClick: () => console.log("clicked on dashboard"),
    to: "/Dashboard",
  },
];

const rightElements = [
  {
    name: "Log in",
    onClick: () => console.log("clicked on signUp"),
    to: "/Login",
  },
];

export default function Dashboard() {
  const [DashboardOption, setDashboardOption] = useState(0);
  const cardLeftElements = [
    {
      name: "Contributed",
      onClick: () => setDashboardOption(0),
    },
    {
      name: "Attempted",
      onClick: () => setDashboardOption(1),
    },
  ];

  const mockTestData = {
    labels: ["1", "2", "3", "4"],
    datasets: [
      {
        label: "score",
        data: [9, 6, 4, 6],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Mock Test Scores",
      },
    },
  };

  return (
    <div>
      <Toolbar rightElements={rightElements} leftElements={leftElements} />
      <div className="Dashboard">
        <div className="Section" style={{ width: "20%" }}>
          <div className="Card" style={{ height: "700px", width: "100%" }}>
            <div className="Card">
              <img src="./defaultProfilePic.jpeg" alt="profilePic" />
              UserName
            </div>
          </div>
        </div>

        <div className="Section" style={{ width: "75%" }}>
          <div className="Card" style={{ height: "250px", width: "47%" }}>
            <Line options={options} data={mockTestData}></Line>
          </div>

          <div className="Card" style={{ height: "250px", width: "47%" }}>
            <Line
              options={options}
              data={mockTestData}
              height={150}
              width={300}
            ></Line>
          </div>
          <div
            className="Card"
            style={{ height: "max-content", width: "100%" }}
          >
            <Toolbar
              leftElements={cardLeftElements}
              rightElements={[]}
            ></Toolbar>
            <div className="VerticalSection">
              <div
                className="Card"
                style={{
                  height: "60px",
                  width: "calc(100%-20px)",
                  border: "0px",
                }}
              >
                Question 1
              </div>
              <div
                className="Card"
                style={{
                  height: "60px",
                  width: "calc(100%-20px)",
                  boxSizing: "border-box",
                }}
              >
                Question 1
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
