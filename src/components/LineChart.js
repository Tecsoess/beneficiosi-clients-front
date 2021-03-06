import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = (props) => {

  const { title, values } = props;

  const [series] = useState(
    [{
      name: "ARS",
      data: values
    }]
  );

  const [options] = useState(
    {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        colors: ['#EF4444']
      },
      title: {
        text: title,
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: Array.from(Array(32).keys()).splice(1).map((n) => {
          var valor = n;
          if (n < 10) {
            valor = '0' + n;
          }
          return valor;
        }),
      }
    }
  );

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );

};

export default LineChart;