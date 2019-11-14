import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import PieChart from './PieChartIdleDays';
import Deposits from './Deposits';
import Orders from './Orders';
import ToolsChart from './ToolsChart';
import ModulesChart from './ModulesChart';

import SaveButton from '../SaveDashboard';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import domtoimage from 'dom-to-image';
import fileDownload from "js-file-download";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button
} from '@material-ui/core';

import { dataActions } from '../../redux/dataactions';

import { connect } from 'react-redux';
import { compose } from 'redux';

const school_image = require('../../shared/student_logs_group.jpeg');
const drawerWidth = 0;

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

const useStyles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',

  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 430,
  },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 390,
    height: 250
  },
});

function get_school_name(elem){
  const school_name = elem.school_name;
  return school_name;
}

function get_state_name(elem){
  const state_name = elem.state;
  return state_name;
}

function get_state(uname){
  return uname.split('-')[1]

 }

class Dashboard extends Component {

   constructor(props) {
         super(props);

         this.state = {
             isPending: false,
             data_attendance: [],
             data_serverup: [],
             data_tools: [],
             data_modules: [],
             username: null,
 
         };
         this.handleChange = this.handleChange.bind(this);
       }

   handleChange(e) {
                 const { name, value } = e.target;
                 this.setState({ [name]: value });
             }

   componentDidMount(){
     const { dispatch } = this.props;
     const { auth_token }  = JSON.parse(localStorage.getItem('user'));
     dispatch(dataActions.getdata(auth_token));
    }



  render(){
    const { classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const school_names = this.props.data_attendance.map(elem => get_school_name(elem))
    //const state_names = this.props.data_attendance.map(elem => get_state_name(elem))
    //const state_name = [...new Set(state_names)].filter(elem => {return elem !== null})
    const school_name = [...new Set(school_names)].filter(elem => {return elem !== null})
    const dashboard_id = 'school_board'

    const { username } = this.props;
    var state_name = new String(username)
    var state = new String(state_name.split('-')[1]);
    console.log(state.slice(0, 2))   
    if (state.slice(0, 2) == 'mz'){
      state = 'Mizoram'
    }else if (state.slice(0, 2) == 'tg') {
      state = 'Telangana'
    }else if (state.slice(0, 2) == 'rj') {
      state = 'Rajasthan'
    }else if(state.slice(0, 2) == 'ct') {
      state = 'Chattisgarh'
    }else{
      state = state_name
    }

    return(
    <MuiThemeProvider theme = {theme}>
     <div className={classes.root} id={dashboard_id}>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} lg={12}>
             <Card  className={classes.card} >
              <div className={classes.details}>
              <CardContent className={classes.content}>
               <Typography component="h4" variant="h5">
                 {school_name[0] ? school_name[0] : this.props.username}
               </Typography>
               <Typography variant="subtitle1" color="textSecondary">
                {state}
               </Typography>

               <Typography variant="h5" align="left" color="textSecondary" paragraph>
                  Short introduction about the school and its unique features. May be summary of key parameters. Also photo specific to school.
                  May be some names of the teachers and headmasters involved.
               </Typography>
              <Typography  variant="h8" align="left" color="textSecondary" paragraph>
                *Same student might have visited both modules or tools on any clix lab day |
                **Buddy users are also considered |
                **Buddy users and Anonymous users are also considered
               <SaveButton id={dashboard_id}/>
               </Typography>
              </CardContent>
             </div>
            <CardMedia
              className={classes.cover}
              image= {school_image}
              title={this.props.username}
            />
            </Card>
           </Grid>

      {/* Chart */}
      <Grid item xs={12} sm={12} lg={9}>
        <Paper className={fixedHeightPaper}>
        {/*Bar chart to display school attendance */}
        <Chart data={this.props.data_attendance} isPending={this.props.isPending}/>
        </Paper>
      </Grid>
      {/* Server Up days  */}
      <Grid item xs={12} sm={12} lg={3}>
        <Paper className={fixedHeightPaper}>
          <PieChart data={this.props.data_serverup} isPending={this.props.isPending}/>
        </Paper>
      </Grid>

      {/* Recent Orders */}
      <Grid item xs={12} sm={12} lg={12}>
        <Paper className={fixedHeightPaper}>
           <ModulesChart data={this.props.data_modules} isPending={this.props.isPending}/>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={12} lg={12}>
        <Paper className={fixedHeightPaper}>
           <ToolsChart data={this.props.data_tools} isPending={this.props.isPending}/>
        </Paper>
      </Grid>
      </Grid>
      </Container>
      </main>
      </div>
    </MuiThemeProvider>
 );
}
}

function mapStateToProps (state) {
  const {error, data_attendance, data_serverup, data_tools, data_modules, isPending, username} = state.fetchdata;
  return {
    error,
    data_attendance,
    data_serverup,
    data_tools,
    data_modules,
    isPending,
    username
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
	withStyles(useStyles),
	connect(mapStateToProps))(Dashboard);
