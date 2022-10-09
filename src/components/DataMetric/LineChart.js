import ReactECharts from "echarts-for-react";
import { graphic } from "echarts";
import React from "react";

const LineChart = () => {
  return (
    <ReactECharts
      option={{
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "Year 1",
            "Year 2",
            "Year 3",
            "Year 4",
            "Year 5",
            "Year 6",
            "Year 7",
            "Year 8",
            "Year 9",
            "Year 10",
          ],
        },
        yAxis: {
          show: false,
          type: "value",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          show: false,
          top: "10%",
          left: "5%",
          right: "7.5%",
          bottom: "15%",
        },

        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1200, 1230, 1400],
            type: "line",
            smooth: true,
            color: "#245A44",
            height: "100%",
            areaStyle: {
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

export default LineChart;
