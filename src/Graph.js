import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js"; // Import the specific components from chart.js
Chart.register(...registerables); // Register the necessary components

const Graph = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Store the Chart.js instance in a ref

  useEffect(() => {
    if (!data) return;

    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      // If there is an existing chart instance, destroy it before creating a new one
      chartInstance.current.destroy();
    }

    const totalAnswers = Object.values(data).reduce((total, count) => total + count, 0);
    const percentageData = Object.entries(data).reduce((result, [answer, count]) => {
      result[answer] = ((count / totalAnswers) * 100).toFixed(2);
      return result;
    }, {});

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(percentageData),
        datasets: [
          {
            data: Object.values(percentageData),
            backgroundColor: ["rgba(54, 162, 235, 0.5)", "rgba(255, 99, 132, 0.5)", "rgba(255, 206, 86, 0.5)"],
            borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)", "rgba(255, 206, 86, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10,
            },
          },
        },
      },
    });

    return () => {
      // Clean up: destroy the chart instance when the component unmounts
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default Graph;
