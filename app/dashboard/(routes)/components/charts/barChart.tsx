'use client';

import ReactApexChart from 'react-apexcharts';

const columnChart = {
  series: [
    {
      name: 'Rents',
      data: [350, 250, 200, 230, 450, 200, 200, 210, 330, 500, 300, 300],
      color: '#008ffb',
    },
  ],

  options: {
    chart: {
      type: 'bar',
      width: '100%',
      height: 'auto',

      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 2,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['transparent'],
    },
    grid: {
      show: true,
      borderColor: '#ccc',
      strokeDashArray: 2,
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      labels: {
        show: true,
        align: 'right',
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: [
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
          ],
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        align: 'right',
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: [
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
          ],
        },
      },
    },

    tooltip: {
      y: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatter: function (val: any) {
          return val;
        },
      },
    },
  },
};

const BarChart = () => {
  return (
    <div className="overflow-hidden">
      <div className="mb-4">
        <h2 className="font-bold">Rent Summery</h2>
      </div>
      <div>
        <ReactApexChart
          className="rounded-md border shadow-sm"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          options={columnChart?.options}
          series={columnChart?.series}
          type="bar"
          height={300}
        />
      </div>
    </div>
  );
};

export default BarChart;
