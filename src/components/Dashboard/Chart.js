import React from 'react';
//import Title from './Title';
import { BarChart, Bar, Cell, XAxis, YAxis, Label, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//import Button from '@material-ui/core/Button';
//import SaveIcon from '@material-ui/icons/Save';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
//import SaveButton from '../PrintButton1';

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
  button: {
    margin: theme.spacing(2),
    float: 'right',
  },
}));

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
if (data.data === undefined || data.data.length === 0){
    return (
      <React.Fragment>
      <p>{'No Modules logs data available for this school.'}</p>
      </React.Fragment>
    );
  }

var moment = require('moment');
const months_available = [...new Set(data.data.map(item => moment(item.date, 'YYYYMMDD').format('MMM YYYY')))];
let closeImg = {cursor:'pointer', float:'right', marginTop: '5px', width: '20px'};

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
  const data_new = data.data.map((elem) => convert_null(elem));
  const data_new_monthly = data.data.filter((elem) => get_monthly_data(elem));

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
      <Typography style={{ marginRight: 270 }} variant="h5" color="textSecondary">
        Attendance for Modules and Tools*
      </Typography>
     </div>

     <p>{!isPending ? 'Fetching School Data...' : ''}</p>
      <ResponsiveContainer >
        <BarChart
        data={data_new_monthly}
        margin={{
          top: 5, right: 10, left: 14, bottom: 5,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <Legend verticalAlign="bottom" height={16}/>
        <XAxis dataKey="date">
          <Label value="Day of CLIx Lab" offset={0} position="insideBottom" />
         </XAxis>
        <YAxis label={{ value: 'Number of Students', angle: -90, position: 'insideLeft'}}/>
        <Tooltip />
        <Bar dataKey="attendance_tools" stackId="a" fill="#F4B400" />
        <Bar dataKey="attendance_modules" stackId="a" fill="#4285F4" />
      </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
