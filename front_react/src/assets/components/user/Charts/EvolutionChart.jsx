import React from "react";
import { Chart as ChartJS, LineElement,PointElement, LinearScale, CategoryScale, Tooltip, Legend} from "chart.js";
import { Line } from "react-chartjs-2";

// Enregistrer les éléments
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

function EvoChart({ labels = [], values = [] }) {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Poids (kg)",
        data: values,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3, // courbe arrondie
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default EvoChart;