import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export const Chart = ({ userData, title, dataKey }) => {

  /* const userData = [
    {
      name: 'Jan',
      "Active User": 2000,
    },
    {
      name: 'Feb',
      "Active User": 3000,
    },
    {
      name: 'Mar',
      "Active User": 2000,
    },
    {
      name: 'Apr',
      "Active User": 2780,
    },
    {
      name: 'May',
      "Active User": 1890,
    },
    {
      name: 'Jun',
      "Active User": 2390,
    },
    {
      name: 'Jul',
      "Active User": 3490,
    },
    {
      name: 'Aug',
      "Active User": 2490,
    },
    {
      name: 'Sep',
      "Active User": 2090,
    },
    {
      name: 'Oct',
      "Active User": 3300,
    },
    {
      name: 'Nov',
      "Active User": 2790,
    },
    {
      name: 'Dec',
      "Active User": 3490,
    },
  ]; */

  const grid = 'rgb(201, 196, 196)';
  const eje = '#105FAD';
  const graph = '#FAAE2F';

  return (
    <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={userData}>
          <XAxis dataKey="name" stroke={eje}/>
          <YAxis stroke={eje}/>
          <Line type="monotone" dataKey={dataKey} stroke={graph} />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="4 4" stroke={grid}/>
        </LineChart>

        </ResponsiveContainer>
    </div>
  )
}
