import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');

    // Check if a chart instance already exists
    if (chartRef.current && chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    // Create a new Chart instance
    if (ctx) {
      chartRef.current.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Label 1', 'Label 2', 'Label 3'],
          datasets: [
            {
              data: [30, 40, 30],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        },
      });
    }

    // Cleanup on component unmount
    return () => {
      if (chartRef.current && chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default PieChart;
