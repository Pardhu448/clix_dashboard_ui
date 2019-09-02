import React from 'react';
import Title from './Title';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function convert_null (elem) {
  const elem_new = elem;
  if (elem.attendance_tools === undefined || elem.attendance_tools === null) {
       elem_new.attendance_tools = 0;
    }
  if (elem.attendance_modules === undefined || elem.attendance_modules === null) {
       elem_new.attendance_modules = 0;
    }
  return elem_new;
};

export default function Chart(data, isPending) {
  const data_new = data.data.map((elem) => convert_null(elem));
  return (
    <React.Fragment>
     <p>{!isPending ? 'Fetching School Data...' : ''}</p>
      <Title>Aug-2019</Title>
      <ResponsiveContainer>
        <BarChart
        data={data_new}
        margin={{
          top: 5, right: 10, left: 14, bottom: 0,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <Legend verticalAlign="bottom" height={16}/>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="attendance_tools" stackId="a" fill="#8884d8" />
        <Bar dataKey="attendance_modules" stackId="a" fill="#82ca9d" />
      </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
