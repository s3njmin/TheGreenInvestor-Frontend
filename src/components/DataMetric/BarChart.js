import React, { useEffect, useRef, useState } from "react";
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

export default function BarChart({ data, morale }) {
  const didMount = useRef(false);
  const [yearNumber, setYearNumber] = useState(2);

  const [state, setState] = useState({
    labels: ["Year 1"],
    data: morale ? [100] : [150],
  });

  useEffect(() => {
    if (didMount.current) {
      setYearNumber(yearNumber + 1);
      setState({
        labels: [`Year ${yearNumber}`],
        data: data,
      });
    } else {
      didMount.current = true;
    }
  }, [data]);

  return (
    <Bar
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
            min: 0,
            max: morale ? 100 : 500,
          },
        },
      }}
      data={{
        labels: state.labels,
        datasets: [
          {
            data: state.data,
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 200);
              gradient.addColorStop(0, "#245A44");
              gradient.addColorStop(1, "#75c8a6");
              return gradient;
            },
          },
        ],
      }}
    />
  );
}
