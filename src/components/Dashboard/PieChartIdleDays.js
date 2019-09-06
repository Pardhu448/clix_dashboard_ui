import React from 'react';
import Title from './Title';
import {
  PieChart, Pie, Sector, Legend, Cell,ResponsiveContainer,
} from 'recharts';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function convert_piechart_data (elem) {
  const elem_new = [
    {name: 'Idle', value: elem.days_server_idle},
    {name: 'Tools', value: elem.days_server_tools},
    {name: 'Modules', value: elem.days_server_modules},
    {name: 'Tools and Modules', value: elem.days_server_tools_modules},
  ];
  return elem_new;
};

const COLORS = ['#DB4437', '#F4B400', '#4285F4', '#0F9D58'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
cx, cy, midAngle, innerRadius, outerRadius, percent, index, value
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {value != 0 ? `${value}(${(percent * 100).toFixed(0)}%)` : ''}
    </text>
  );
};
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function PieChartServer(data1, isPending) {
  const classes = useStyles();

  if (data1.data === undefined || data1.data.length == 0){
    return (
      <React.Fragment>
      <p>{'No Server log data available for this school.'}</p>
      </React.Fragment>
    );
  }
  const data_new = data1.data.map((elem) => convert_piechart_data(elem))

  console.log(data_new[0])
  return (
    <React.Fragment>
     <p>{!isPending ? 'Fetching School Data...' : ''}</p>
      <Typography variant="h5" color="textSecondary">
        Server Up Days overall
      </Typography>
        <PieChart width={260} height={260}>
        <Pie
          data={data_new[0]}
          cx={100}
          cy={100}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          legendType='rect'
        >
          {
            data_new[0].map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Legend verticalAlign='top'/>
      </PieChart>
    </React.Fragment>
  );
}
