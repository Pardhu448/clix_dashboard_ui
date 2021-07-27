import React from 'react';
//import Title from './Title';
import {
  PieChart, Pie, Legend, Tooltip, Cell,
} from 'recharts';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function addUp_property(data_array, prop){
  var total = data_array.reduce(function(prev, cur) {
    return prev + cur[prop];
  }, 0);
  return total;
}

function get_agg_data(lab_usage_data){
  const agg_lab_usage = [
    {name: 'Idle', value: addUp_property(lab_usage_data, 'days_server_idle')},
    {name: 'Tools', value: addUp_property(lab_usage_data, 'days_server_tools')},
    {name: 'Modules', value: addUp_property(lab_usage_data, 'days_server_modules')},
    {name: 'Tools and Modules', value: addUp_property(lab_usage_data, 'days_server_tools_modules')},
  ];
  return agg_lab_usage;
}

function convert_piechart_data (elem) {
  const elem_new = [
    {name: 'Idle', value: Math.floor(elem.days_server_idle)},
    {name: 'Tools', value: Math.floor(elem.days_server_tools)},
    {name: 'Modules', value: Math.floor(elem.days_server_modules)},
    {name: 'Tools and Modules', value: Math.floor(elem.days_server_tools_modules)},
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
	  {value !== 0 ? `${value}(${(percent * 100).toFixed(0)}%)` : ''}
    </text>
  );
};
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const getIntroOfPage = (label) => {
	  if (label === 'Idle') {
		      return "clix-server up but no activity";
		    }
	  if (label === 'Tools') {
		      return "only tools used days";
	            }
	  if (label === 'Modules') {
		      return "only modules used days";
		   }
	 if (label === 'Tools and Modules') {
		      return 'days both modules and tools are used';
		  }
};


const CustomTooltip = ({ active, payload, label }) => {
	  if (active) {
		      return (
			            <div className="custom-tooltip">
			              <p className="label">{`${payload[0].name}:${payload[0].value}`}</p>
			              <p className="intro">{getIntroOfPage(`${payload[0].name}`)}</p>
			            </div>
			          );
		    }

	  return null;
};


export default function PieChartServer(data1, isPending) {
  const classes = useStyles();
  if (data1.data === undefined || data1.data.length === 0 || data1.data[0] == null){
    return (
      <React.Fragment>
      <p>{'No Server log data available for this school.'}</p>
      <p> {`if you have tried syncthing data please check after 1day`} </p>  

      </React.Fragment>
    );
  }

  //const data_aggr = get_agg_data(data1.data)
  console.log(data1.data)
  const data_new = data1.data.map((elem) => convert_piechart_data(elem))
  //console.log(data1)
  //console.log(data_new[0])	
  //const data_aggr = get_agg_data(data1.data)
  //console.log(data_aggr)
  return (
    <React.Fragment>
     <p>{!isPending ? 'Fetching School Data...' : ''}</p>
      <Typography variant="h5" color="textSecondary">
        CLIx Server Usage
      </Typography>
        <PieChart width={260} height={260}>
        <Pie
          data={data_new[0]}
          cx={100}
          cy={100}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
	  isAnimationActive={false}
          fill="#8884d8"
          dataKey="value"
          legendType='rect'
        >
          {
            data_new[0].map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Legend verticalAlign='top'/>
        <Tooltip content={<CustomTooltip />}/>
      </PieChart>
	<Typography variant="subtitle2" color="textSecondary">
	  - Only days when clix-server was on are considered, not all calendar days
      </Typography>
  <Typography variant="subtitle2" color="textSecondary">
	  - Period considered is from 1st June, 2018 to current date
      </Typography>
    </React.Fragment>
  );
}
