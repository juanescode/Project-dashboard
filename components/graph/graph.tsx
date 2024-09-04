"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Company = {
  id: string;
  name: string;
  createdAt: string;
};

type CompaniesByDateChartProps = {
  companies: Company[];
};

const CustomTooltip = ({
  active,
  payload,
}: {
  active: boolean;
  payload: any[];
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#f9f9f9",
          border: `1px solid #8884d8`,
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <p
          className="label"
          style={{ color: "#8884d8", fontWeight: "bold" }}
        >{`Fecha: ${payload[0].payload.date}`}</p>
        <p style={{ color: "#333", fontWeight: "450" }}>
          {`Número de empresas: ${payload[0].value}`}
        </p>
      </div>
    );
  }

  return null;
};

export function CompaniesByDateChart({ companies }: CompaniesByDateChartProps) {
  const dataChart = companies.reduce((acc: any, company) => {
    const date = new Date(company.createdAt).toLocaleDateString();
    const existingDate = acc.find((item: any) => item.date === date);
    if (existingDate) {
      existingDate.count += 1;
    } else {
      acc.push({ date, count: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="h-[550px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={dataChart}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip content={<CustomTooltip active={true} payload={[]} />} />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}