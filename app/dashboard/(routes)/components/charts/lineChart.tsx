'use client';

import ReactApexChart from 'react-apexcharts';

const lineChart = {
  series: [
    {
      name: 'Bookings',
      data: [350, 40, 300, 220, 500, 250, 400, 230, 500, 420, 300, 500],
      offsetY: 0,
    },
    {
      name: 'Cancel',
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400, 350, 450, 400],
      offsetY: 0,
    },
  ],

  options: {
    chart: {
      width: '100%',
      height: 'auto',
      type: 'area',
      toolbar: {
        show: false,
      },
    },

    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },

    yaxis: {
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 500,
          colors: ['#000000'],
        },
      },
    },

    xaxis: {
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 500,
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

const LineChart = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-between mb-[14px]">
        <h2 className="font-bold">Booking Summery</h2>
      </div>

      <ReactApexChart
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        options={lineChart.options}
        series={lineChart.series}
        type="area"
        height={300}
        width={'100%'}
        className="rounded-md border shadow-sm"
      />
    </div>
  );
};

export default LineChart;
