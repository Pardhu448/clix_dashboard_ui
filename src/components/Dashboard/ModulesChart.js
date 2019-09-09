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


export default function ModulesChart(data, isPending) {

  const classes = useStyles();
  const [state, setState] = React.useState({
    month: 'All months',
    name: 'hai',
  });

if (data.data === undefined || data.data.length == 0){
    return (
      <React.Fragment>
      <p>{'No Modules logs data available for this school.'}</p>
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

const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
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

  function get_final_data(elem){
   var elem_new = elem;
   for (var prop1 in elem){
     elem_new[prop1] = elem[prop1] || 0;
   }
  return elem_new;
  }

  function get_module_names(item){
   var item_modules = [];
   for (var prop1 in item){
     if (prop1.split('_')[0] === 'module'){
        item_modules.push(prop1)
     }
   }
   return item_modules;
  }

  const data_new = data.data.filter((elem) => get_monthly_data(elem));
  const data_final = data_new.map((elem) => get_final_data(elem));

  const modules = [...new Set(data_final.map(item => get_module_names(item))[0])];
  const colors = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e",
  "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707"]

  var modules_with_colors = [];
  modules.forEach((key, i) => (
    modules_with_colors.push(
      {'module' :key,
        'color': colors[i]})
  ));

  function createlabel(moduleinfo) {
        return (<Bar dataKey={moduleinfo.module} stackId="a" fill={moduleinfo.color} />)
   };

  function createlabels(modules_with_colors) {
     return modules_with_colors.map(createlabel);
   };


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
        Students Visiting Different Modules*
      </Typography>
      </div>
      <p>{!isPending ? 'Fetching School Data...' : ''}</p>
      <ResponsiveContainer>
        <BarChart
        data={data_final}
        margin={{
          top: 5, right: 10, left: 14, bottom: 0,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <Legend verticalAlign="bottom" height={16}/>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        {createlabels(modules_with_colors)};
      </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
