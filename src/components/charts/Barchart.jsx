// components/charts/BarChart.jsx
import React from "react";
import "./BarChart.css";
import ErrorMessage from "../error/ErrorMessage";
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

const BarChart = ({ data, options }) => {
  // check if the user is authorized
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      style={{
        height: "400px",
        backgroundColor: "#FFF",
        borderRadius: "12px",
        padding: "1rem",
      }}
    >
      <Bar data={data} options={{ ...defaultOptions, ...options }} />
    </div>
  );
};

export default BarChart;
