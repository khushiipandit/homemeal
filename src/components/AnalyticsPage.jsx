import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const AnalyticsPage = ({ data }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-5">Analytics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-700 p-5 rounded-lg">
          <h3 className="text-xl mb-3">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Bar dataKey="revenue" fill="#ffa500" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-700 p-5 rounded-lg">
          <h3 className="text-xl mb-3">Chef Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                dataKey="chefs"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#82ca9d"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 4]
                    }
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
