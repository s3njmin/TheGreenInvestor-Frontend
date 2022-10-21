import React, { useEffect, useState } from "react";
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

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Carbon Emission Caused by Different Fuel Types",
    },
  },
};

const labels = ["BIT", "MSW", "LIG"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [9862.6, 11541.99, 5583.21],
      borderColor: ["#245A44", "#677C72", "#5387AA"],
      backgroundColor: ["#245A44", "#677C72", "#5387AA"],
    },
  ],
};

export default function HorizontalBarChart({ data }) {
 
  return (
    <div className="h-full w-1/3">
      <Bar
        options={options}
        data={{
          labels,
          datasets: [
            {
              label: "Carbon Emissions",
              data: data,
              borderColor: ["#245A44", "#677C72", "#5387AA"],
              backgroundColor: ["#245A44", "#677C72", "#5387AA"],
            },
          ],
        }}
      />
    </div>
  );
}
