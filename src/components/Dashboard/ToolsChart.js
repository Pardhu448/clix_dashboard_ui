import React from 'react';
import Title from './Title';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ToolsChart(data, isPending) {

  const classes = useStyles();
  const [state, setState] = React.useState({
    month: 'All months',
    name: 'hai',
  });

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  console.log(data)
  if (data.data === undefined || data.data.length == 0){
    return (
      <React.Fragment>
      <p>{'No Tools log data available for this school.'}</p>
      </React.Fragment>
    );
  }

var moment = require('moment');
const months_available = [...new Set(data.data.map(item => moment(item.date, 'YYYYMMDD').format('MMM YYYY')))];

function createOption(month) {
     const month_integer = moment(month, 'MMM YYYY').format('YYYYMM');
     return (<option value={month_integer}>{month}</option>);
   };

function createOptions(months) {
     return months.map(createOption);
   };

function get_monthly_data(elem){
   const month_selected = state.month
   if (month_selected === 'All months'){
     return true
   }
   else {
     return moment(elem.date, 'YYYYMMDD').format('YYYYMM') === month_selected;
   }
 }

  const data_new = data.data.filter((elem) => get_monthly_data(elem));
  console.log(data_new)

  {/*const data_new = data.data.map((elem) => convert_null(elem));*/}
  return (
    <React.Fragment>
    <div className={classes.root}>
           <FormControl className={classes.formControl}>
             <InputLabel htmlFor="month2-simple">Month</InputLabel>
             <Select
               native
               value={state.month}
               onChange={handleChange('month')}
               inputProps={{
                 name: 'month',
                 id: 'month2-simple',
               }}
             >
               <option value={'All months'}>All Months</option>
               {createOptions(months_available)}

             </Select>
            </FormControl>
            <Typography variant="h5" color="textSecondary">
              Tools Visited by Students
            </Typography>
            </div>
     <p>{!isPending ? 'Fetching School Data...' : ''}</p>
      <ResponsiveContainer>
        <BarChart
        data={data.data}
        margin={{
          top: 5, right: 10, left: 14, bottom: 0,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <Legend verticalAlign="bottom" height={16}/>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="e_num_tools" stackId="a" fill="#DB4437" />
        <Bar dataKey="m_num_tools" stackId="a" fill="#4285F4" />
        <Bar dataKey="s_num_tools" stackId="a" fill="#0F9D58" />
      </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
