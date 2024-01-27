import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const SalesReportGraphData = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Sales Report",
        data: [31, 40, 28, 51, 42, 109, 100],
        color: "#7f56d9",
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "text",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  useEffect(() => {}, []);

  return (
    <div style={{ overflowX: "auto" }}>
      <div style={{ width: "100%" }}>
        <div id="chart" style={{ width: "100%" }}>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height={350}
            style={{ width: 1000 }}
          />
        </div>
      </div>
    </div>
  );
};

export default SalesReportGraphData;
