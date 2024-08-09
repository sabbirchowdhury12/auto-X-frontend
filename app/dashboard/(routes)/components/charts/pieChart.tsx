import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const chart = (
  <ResponsiveContainer width="100%" height="100%">
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

const PieCharts = () => {
  return (
    <div className="featured flex-2 shadow-lg p-4">
      <div className="top flex items-center justify-between text-gray-500">
        <h1 className="title text-lg font-medium">Order</h1>
      </div>
      <div className="bottom py-5 flex flex-col items-center justify-center gap-4">
        <div className="rounded-full h-52 w-52">{chart}</div>

        <p className="title font-medium text-gray-500">Total Complete</p>
        <p className="amount text-2xl">$420</p>
        <p className="description font-light text-xs text-gray-500 text-center">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary w-full flex items-center justify-between">
          <div className="item text-center">
            <div className="itemTitle text-sm text-gray-500">Pending</div>
            <div className="itemResult flex items-center mt-2 text-sm text-red-500">
              <div className="resultAmount">$1.4k</div>
            </div>
          </div>
          <div className="item text-center">
            <div className="itemTitle text-sm text-gray-500">Complete</div>
            <div className="itemResult flex items-center mt-2 text-sm text-green-500">
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item text-center">
            <div className="itemTitle text-sm text-gray-500">End</div>
            <div className="itemResult flex items-center mt-2 text-sm text-green-500">
              <div className="resultAmount">$6.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
