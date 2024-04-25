import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";

const Graphchart = ({ data }) => {
  return (
    <ResponsiveContainer width="90%" height={200}>
      <AreaChart className="chart" data={data}>
        <Area
          type="monotone"
          dataKey="value"
          stroke="orange"
          strokeWidth={5}
          fill="#feecd2"
        />

        <Tooltip />
        {/* <Legend /> */}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Graphchart;
