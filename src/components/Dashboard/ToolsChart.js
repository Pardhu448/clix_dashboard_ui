import React from 'react';
//import Title from './Title';
import { BarChart, Bar, XAxis, YAxis, Label, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';

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
  if (data.data === undefined || data.data.length === 0 || data.data[0] == null){
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
function get_final_data(elem){
   var elem_new = elem;
   for (var prop1 in elem){
     elem_new[prop1] = elem[prop1] || 0;
   }
  return elem_new;
  }

  function get_tool_names(item){
   var item_modules = [];
   for (var prop1 in item){
     if (prop1.split('_')[0] === 'tool'){
        item_modules.push(prop1)
     }
   }
   return item_modules;
  }

  function get_ridof_tool_tag(elem){
   var elem_new = new Array();
   var prop_new;
   for (var prop1 in elem){
     if (prop1.split('_')[0] === 'tool'){
       prop_new = prop1.split('_').splice(1, 6).join(' ');
       elem_new[prop_new] = elem[prop1];
     }
     else{
       elem_new[prop1] = elem[prop1];
     }
   }
   return elem_new;
  }

  function get_tool_names1(item){
   var item_modules = [];
   for (var prop1 in item){
     if (['id', 'state', 'district', 'school_server_code', 'date'].includes(prop1) === false){
        item_modules.push(prop1)
     }
   }
   return item_modules;
  }

  const data_new = data.data.filter((elem) => get_monthly_data(elem));
  const data_final = data_new.map((elem) => get_final_data(elem));
  const data_final1 = data_final.map((elem) => get_ridof_tool_tag(elem));

  //const tools = [...new Set(data_final.map(item => get_tool_names(item))[0])];
  const tools1 = [...new Set(data_final1.map(item => get_tool_names1(item))[0])];

  const colors = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e",
  "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707"]

  var tools_with_colors = [];
  tools1.forEach((key, i) => (
    tools_with_colors.push(
      {'tool' :key,
        'color': colors[i]})
  ));

  function createlabel(toolinfo) {
        return (<Bar dataKey={toolinfo.tool} stackId="a" fill={toolinfo.color} />)
   };

  function createlabels(tools_with_colors) {
     return tools_with_colors.map(createlabel);
   };

const CustomTooltipContent = function(props){

    if(props.payload != null && props.payload[0] != null){
     const newPayload = [];
      props.payload.forEach(function(k){
        if (k['value'] !== 0){
          newPayload.push(k)
        }
      });
     return <DefaultTooltipContent {...props} payload={newPayload} />;
  }
  return <DefaultTooltipContent {...props}/>;
 }

  //{/*const data_new = data.data.map((elem) => convert_null(elem));*/}
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
              Students Engagement with Tools***
            </Typography>
            </div>
     <p>{!isPending ? 'Fetching School Data...' : ''}</p>
      <ResponsiveContainer>
        <BarChart
        data={data_final1}
        margin={{
          top: 0, right: 5, left: 10, bottom: 5
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <Legend align="right" layout= 'vertical' height= {360} width={230}/>
        <XAxis dataKey="date">
          <Label value="Day of CLIx Lab" offset={0} position="insideBottom" />
         </XAxis>
        <YAxis label={{ value: 'Number of Students', angle: -90, position: 'insideLeft'}}/>
        <Tooltip content = {<CustomTooltipContent />}/>
        {createlabels(tools_with_colors)}
      </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
