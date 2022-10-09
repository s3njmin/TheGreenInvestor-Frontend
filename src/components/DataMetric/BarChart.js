import React from "react";
import ReactECharts from "echarts-for-react";
import { graphic } from "echarts";
const BarChart = () => {
  return (
    <ReactECharts
      option={{
        xAxis: {
          type: "category",
          data: ["Year 10"],
        },
        yAxis: {
          show: false,
          type: "value",
        },
        grid: {
          show: false,
          top: "10%",
          left: "12.5%",
          right: "7.5%",
          bottom: "16%",
        },
        series: [
          {
            data: [120],
            type: "bar",
            itemStyle: {
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#245A44",
                },
                {
                  offset: 1,
                  color: "#75c8a6",
                },
              ]),
            },
          },
        ],
      }}
      style={{
        height: "100%",
      }}
    />
  );
};

export default BarChart;
