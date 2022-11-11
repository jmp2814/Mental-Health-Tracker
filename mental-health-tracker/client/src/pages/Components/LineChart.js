import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My Mood",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [2, 1, 2, 3, 4, 5, 5],
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
