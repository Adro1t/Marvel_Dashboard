import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const CharacterChart = ({ data }) => {
  return (
    <>
      <BarChart
        width={1300}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="comics[available]" aria-placeholder="no" fill="#8884d8" />
      </BarChart>
    </>
  );
};

export default CharacterChart;
