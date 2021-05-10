import React, { Component,lazy,Suspense } from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import baseUrl from '../../shared/baseUrl';
import { Redirect } from 'react-router-dom';

//import { makeStyles } from '@material-ui/core/styles';
//import CssBaseline from '@material-ui/core/CssBaseline';
//import Drawer from '@material-ui/core/Drawer'; 
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
//import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
//import Divider from '@material-ui/core/Divider';
//import IconButton from '@material-ui/core/IconButton';
//import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
//import MenuIcon from '@material-ui/icons/Menu';
//import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//import NotificationsIcon from '@material-ui/icons/Notifications';
//import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import PieChart from './PieChartIdleDays';
// //import Deposits from './Deposits';
// //import Orders from './Orders';
// import ToolsChart from './ToolsChart';
// import ModulesChart from './ModulesChart';
import CircularProgress from '@material-ui/core/CircularProgress';

import SaveButton from '../SaveDashboard';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
//import CardMedia from '@material-ui/core/CardMedia';

import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
//import domtoimage from 'dom-to-image';
//import fileDownload from "js-file-download";

//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import SchoolImageUpload from './ImageUpload';

//import ImageUploader from 'react-images-upload';
import {
  Card,

  CardHeader,
  CardContent,
  CardActions,
  Button
} from '@material-ui/core';

import { dataActions } from '../../redux/dataactions';
import { schoolInfoActions } from '../../redux/schoolinfoactions'

import { userActionsLogin } from "../../redux/fetchmodeactions"

import { connect } from 'react-redux';
import { compose } from 'redux';




import EdiText from 'react-editext';
const Chart = lazy(()=> import("./Chart"))  

const PieChart = lazy(()=> import('./PieChartIdleDays'))


const ToolsChart = lazy(()=> import('./ToolsChart'))

const ModulesChart = lazy(()=> import('./ModulesChart'))

const RenderFallData = ()=> <div> ...Loading </div>
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
    display: '',
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
    justifyContent: 'space-between',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    // width: '150vh',
  },
  content:{
    flex: '1 0 ',	   
  },	
  cover: {
    width: 400,
    height: 250,
  },
  expand: {
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
},
expandOpen: {
  transform: 'rotate(180deg)',
},
});

function get_school_name(elem){
  const school_name1 = elem.school_name;
  return school_name1;
}

function get_state_name(elem){
  const state_name = elem.state;
  return state_name;
}

function get_state(uname){
  return uname.split('-')[1]
 }

function get_first_few_words(schoolIntroText){
  var str = schoolIntroText;
  var words = str.split(" ");
  var lengthofsentence = words.length;
  var firstFewWords = words.slice(0, 50).join(" ");
  var lastFewWords = words.slice(50, -1).join(" ");
  return [firstFewWords, lastFewWords];
}

const moreTextIndicator = {"showmore":'see more', "showless": 'see less'}
Object.freeze(moreTextIndicator)


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
             expanded:false,
             moreTextIndicator: moreTextIndicator.showmore,
             schoolDescription: null,
             schoolImage: school_image,
             isUploading: false,
             isInfoUpdating: false,
             isImageUpdating: false,
             isImageUploading: false,
             isImageHoverIn: false,
             isImageHoverOut: false,
             lastUploadTime: null,
             loading_state: false,


            //  

            loading: false,
            districts: [],
            school_data: [],
            state_code: "",
            districts_code: "",
            school_name: null,
            view_mode: true,
            submitted: false,
            selectId: "",
            error: "No school in Daatabase",
            errorCallSchool: "",
            errorCallDistrict: "",
            id: null,
            planet: [],
            data: [],
         };
         this.handleMouseIn = this.handleMouseIn.bind(this);
         this.handleMouseOut = this.handleMouseOut.bind(this);
         this.onImageUpload = this.onImageUpload.bind(this);
         this.handleChange = this.handleChange.bind(this);
         this.onDescriptionUpdate = this.onDescriptionUpdate.bind(this);
         this.handleExpandClick = this.handleExpandClick.bind(this);
       }


// 
handleSchool = (e) => {
  console.log(e.target.value);
  this.setState({ school_name : e.target.value, errorCallSchool: "", errorCallDistrict: ''})
  
}
hanldeChange = (e) => {
  console.log(e.target.value);
  let _id = e.target.value;
 
  this.setState({ loading: true });
  fetch(`${baseUrl}/districts/${_id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let state_code = data.dist_data.map((item, index) => item.state_code);
      console.log(state_code);
      this.setState({
        school_data:  [],
        error: '',
        errorCallSchool: '',
        errorCallDistrict: '',
        districts: data.dist_data,
        districts_code: data.dist_data.distirct_code,
        state_code: state_code[0][0],
        loading: false,
        //   planet: data.planets
      });
      console.log(this.state);
    });
 
    
};

handleSubmit = (e) => {
  // console.log(e.target.value);
  e.preventDefault();
 
//     fetch('/${baseUrl}/gettoken`', {
//       method: 'post',
//       headers: {'Content-Type':'application/json'},
//       body:   JSON.stringify({school_name, view_mode})
// }
// durga will give this url 
   const { school_name, view_mode } = this.state;


  this.setState({ view_mode: true, submitted:true , loading: true});
  // const { school_name, view_mode } = this.state;
  const { dispatch } = this.props;

  //const { from } = this.props.location.state || { from: { pathname: '/' } };
  //const { loggedIn } = this.props;

  if (this.state.school_name &&  this.state.view_mode) {
      dispatch(userActionsLogin.directlogin(school_name , view_mode));

  }

  if(this.state.school_data == !this.state.school_data || this.state.school_data === ''){
    this.setState({
      errorCallSchool: " Please choose valid schoolname ",
    })
  }
  if(this.state.districts == !this.state.districts || this.state.districts_code === ''){
    this.setState({
      errorCallDistrict: "Please choose valid district ",
    })
  }
 if(this.props.loginFailed){
   this.setState({
     error: "No data in database"
   })
 }
 this.setState({submitted:true , loading: false});
  
   }
   handleExpandClick = (e) => {
    console.log(e.target.value);
    
    let id = e.target.value || 0;
    let _id = this.state.state_code;

    this.setState({ loading: true });

    fetch(`${baseUrl}/schools/${_id}/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.sch_data);
        console.log(data.sch_data.distirct_code)
        this.setState({
          school_data: data.sch_data,
          error: "",
          errorCallDistrict: '',
          districts_code: data.sch_data[0].distirct_code,
          //   planet: data.planets
          loading: false,
        });
      });
      
  };













  handleMouseIn(event) {
         const { dispatch } = this.props;
         //this.setState({isImageHovering: !this.props.isImageHovering});
         dispatch(schoolInfoActions.updateimagehoverin());
       }
  handleMouseOut(event) {
         const { dispatch } = this.props;
         dispatch(schoolInfoActions.updateimagehoverout())

  }

  onImageUpload(schoolImageFiles, schoolImageDataURLs){
     //this.setState({isImageUploading: true});
     const { dispatch } = this.props;
     const { auth_token }  = JSON.parse(localStorage.getItem('user'));
     dispatch(schoolInfoActions.uploadimage(schoolImageFiles));

     //this.forceUpdate();
     //dispatch(schoolInfoActions.getimage(auth_token));
  }

  handleExpandClick () {
        this.setState({expanded: !this.state.expanded});
        this.setState({moreTextIndicator: this.state.moreTextIndicator === 'see more' ? 'see less' : 'see more'})
      };

   onDescriptionUpdate(schoolDescription) {
        const { dispatch } = this.props;
        this.setState({isInfoUpdating: true})
        dispatch(schoolInfoActions.updatedescription(schoolDescription));
        //this.setState({schoolDescription: val});
      }

   handleChange(e) {
                 const { name, value } = e.target;
                 this.setState({ [name]: value });
             }

   componentDidMount(){
     const { dispatch } = this.props;
     const { auth_token }  = JSON.parse(localStorage.getItem('user'));
     dispatch(dataActions.getdata(auth_token));
     dispatch(schoolInfoActions.getdescription(auth_token));
     dispatch(schoolInfoActions.getimage(auth_token));
    }

    componentDidUpdate(prevProps, prevState){
      const { dispatch } = this.props;
      const { auth_token }  = JSON.parse(localStorage.getItem('user'));
      if (prevProps.lastUploadTime !== this.props.lastUploadTime){
         dispatch(schoolInfoActions.getimage(auth_token));
         window.location.reload();
      }
    }
    /*componentWillReceiveProps(nextProps) {
      if (this.props.schooImage !== nextProps.schoolImage) {
          console.log(this.props)
          console.log(nextProps)
          console.log('image date has changed');
          this.forceUpdate();
      }
    }*/
  render(){
    const { classes } = this.props;
    // const { classes } = this.props;
  
    const { view_mode,loggedIn, loginFailed ,user } = this.props;
    const { school_name, submitted, errorCall, loadding } = this.state;
    // const { from } = this.props.location.state || { from: { pathname: '/schoolviz' } };
    
    // if ( localStorage.getItem('user') && view_mode ) return <Redirect to={from.pathname} />

    let districts = this.state.districts;
    let school_data = this.state.school_data;
    let DistName = districts.map((item, index) => (
      <option key={index} id={item.state_code} value={item.distirct_code}>
        {item.districtName}
      </option>
    ));
    let SchName = school_data.map((item, index) => (
      <option key={index} value={item.school_name} >
        {item.school_name}
      </option>
    ));
    // const { view_mode } = this.props;
    // const { view_mode } = this.props;

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const expandButton = clsx(classes.expand, {
            [classes.expandOpen]: this.state.expanded,
          });
    console.log(this.props)

    const schoolIntro = 'Short introduction about your school and its unique features. May be summary of interesting facts about your school in the local area. Also photo specific to school above. May be some names of the teachers and headmasters involved.';
    var schoolIntroText = this.props.schoolDescription != null ? this.props.schoolDescription : schoolIntro;

    const school_names = this.props.data_attendance.map(elem => get_school_name(elem))
    //const state_names = this.props.data_attendance.map(elem => get_state_name(elem))
    //const state_name = [...new Set(state_names)].filter(elem => {return elem !== null})
    const school_name1 = [...new Set(school_names)].filter(elem => {return elem !== null})
    const dashboard_id = 'school_board'

    const { username } = this.props;

    var state_name = new String(username)
    var state = new String(state_name.split('-')[1]);
    //console.log(state.slice(0, 2))
    if (state.slice(0, 2) === 'mz'){
      state = 'Mizoram'
    }else if (state.slice(0, 2) === 'tg') {
      state = 'Telangana'
    }else if (state.slice(0, 2) === 'rj') {
      state = 'Rajasthan'
    }else if(state.slice(0, 2) === 'ct') {
      state = 'Chattisgarh'
    }else{
      state = state_name
    }

  return(
    <>
    {/* {this.props.view_mode? 
       <div className="selectMenu">
       <form onSubmit={this.handleSubmit}>
       {this.state.loading ?       <CircularProgress  color="secondary" />
: null}
       <select  className="select"  onChange={this.hanldeChange.bind(this)} required>
         <option selected disabled>
           {" "}
           Please select State{" "}
         </option>
         <option value="1"> Chattisgarh </option>
         <option value="3"> Rajasthan</option>

         <option value="2"> Mizoram </option>

         <option value="4"> Telengana </option>
       </select> */}
       {/* <select onChange={this.hanldeClick}> {Planet}</select> */}
       {/* <div style= {{color: 'red'}} e> {this.state.errorCallDistrict} </div>
       <select defaultValue={"District"}  disabled={!this.state.state_code}  className="select" onChange={this.handleExpandClick} required="requried">
         {" "}
         <option value="District" disabled> Please select District </option>
         {DistName}{" "}
       </select>
       {loginFailed ? <div style= {{color: 'red'}} e>{this.state.error} </div> : ""}
       <div style= {{color: 'red'}} e>  {this.state.errorCallSchool} </div>
       <select  defaultValue={'schoolname'} disabled={!this.state.districts_code }  className="select" onChange={this.handleSchool} required>
         {" "}
            
         <option value="schoolname" disabled={!this.state.state_code}> Please select School </option>
         {SchName}
       </select>   */}
        {/* <Button  variant="contained" color="primary" disabled={!this.state.state_code}>
         Submit
         
       </Button> */}

       {/* <button type="submit" className="selectMenuSubmit" disabled={!this.state.state_code}> Submit</button>
       </form> */}
       {/* <select className="select" onChange={this.handleExpandClick}>             <option > Please select  </option>
  {DistName} </select>  */}
       {/* <select> <option value={films.title}> {films.title} </option></select> */}
     {/* </div> : null} */}
    
    <MuiThemeProvider theme = {theme}>
     <div className={classes.root} id={dashboard_id}>
     
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
           <Grid item xs={12} sm={12} lg={12}>
          
            <Card className={classes.card} >
             {/*<div className={classes.details}>*/}
              {/*<Grid container spacing = {5}>*/}
              {/* <Grid item >*/}
             
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className={classes.details}>
               <CardContent className={classes.content}>
                                <Typography component="h4" variant="h5">
                 {school_name1[0] ? school_name1[0] : this.props.username}
               </Typography>
               <Typography variant="subtitle1" color="textSecondary">
                {state}, {this.props.username} 
               </Typography>
               <Typography variant="subtitle2" align="left" color="textSecondary" paragraph>
                School dashboards below are generated to enable teachers access data, corresponding to their student's interactiont with CLIx platform. Live data synced from schools is processed at centralized servers to generate these dashboards. Please upload your school image and a short paragraph of anything you want to share about your school below.
               </Typography>
               {/* <Typography  variant="subtitle2" align="left" color="textSecondary" paragraph>
                 *Same student might have visited both modules or tools on any clix lab day |
               
               <br/>  **Buddy users are also not considered |
                <br/> ***Buddy users and Anonymous users are also considered
                <SaveButton id={dashboard_id}/> 
                </Typography> */}

               </CardContent>
               </div> 
             </Grid>
               {/* {view_mode ? <SchoolImageUpload schoolImage={this.props.schoolImage}
  /> :
               <SchoolImageUpload schoolImage={this.props.schoolImage}
                                  isImageUploading={this.props.isImageUploading}
                                  onImageUpload={this.onImageUpload}
                                  handleMouseIn={this.handleMouseIn}
                                  handleMouseOut={this.handleMouseOut}
                                  />} */}
     
                                  { loggedIn ?   <SchoolImageUpload schoolImage={this.props.schoolImage}
                                  isImageUploading={this.props.isImageUploading}
                                  onImageUpload={this.onImageUpload}
                                  handleMouseIn={this.handleMouseIn}
                                  handleMouseOut={this.handleMouseOut}
                                  />:<SchoolImageUpload schoolImage={this.props.schoolImage}/> }
      

        
            </Card>
            </Grid>
         
           <Grid item xs={12} sm={12} lg={12}>

           <Card >
           <CardContent className={classes.content}>
           { loggedIn ?      <Typography paragraph>
            {/* { loggedIn ?  */}
            s
              <EdiText
                showButtonsOnHover
                value={get_first_few_words(schoolIntroText)[0]}
                onSave={this.onDescriptionUpdate}
               /> 
               {/* : <EdiText      />
              } */}

               {/*<IconButton
                 className={expandButton}
                 onClick={this.handleExpandClick}
                 aria-expanded={this.state.expanded}
                 aria-label="show more"
                 >
                 <ExpandMoreIcon />
               </IconButton>
              */}
              <Link component="button"
                     variant='body2'
                     onClick={this.handleExpandClick}>
                     {this.state.moreTextIndicator}
              </Link>
               </Typography> 
               :   <Typography paragraph>
             
                 <Link component="button"
                        variant='body2'
                        onClick={this.handleExpandClick}>
                        {this.state.moreTextIndicator}
                 </Link>
                  </Typography>  }
            </CardContent>
           <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
           <CardContent>
           <Typography paragraph>
            {get_first_few_words(schoolIntroText)[1]}
           </Typography>
           </CardContent>
           </Collapse>
          </Card>
           </Grid>
<Suspense fallback={RenderFallData}>
      <Grid item xs={12} sm={12} lg={9}>
        <Paper className={fixedHeightPaper}>
        {/*Bar chart to display school attendance */}
        <Chart data={this.props.data_attendance} isPending={this.props.isPending}/>
        </Paper>
        <p>                 *Same student might have visited both modules or tools on any clix lab day |
 </p>
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
        <p>**Buddy users are also not considered |</p>
      </Grid>

      <Grid item xs={12} sm={12} lg={12}>
        <Paper className={fixedHeightPaper}>
           <ToolsChart data={this.props.data_tools} isPending={this.props.isPending}/>
        </Paper>
        <p> ***Buddy users and Anonymous users are also considered </p>
      </Grid>
      </Suspense>
      </Grid>
      </Container>
      </main>
      </div>
    </MuiThemeProvider>
    </>
 );
}
}

function mapStateToProps (state) {
  const { error, data_attendance, data_serverup, data_tools, data_modules, isPending, username } = state.fetchdata;
  const { view_mode } = state.authmode;
  const { loggedIn } = state.authenticate;
  const { schoolDescription, schoolImage, isInfoUpdating, isImageUpdating, isImageUploading,
    isImageHoverIn, isImageHoverOut, lastUploadTime } = state.fetchschoolinfo;
  return {
    error,
    data_attendance,
    data_serverup,
    data_tools,
    data_modules,
    isPending,
    loggedIn,
    view_mode,
    username,
    schoolDescription,
    schoolImage,
    isInfoUpdating,
    isImageUpdating,
    isImageUploading,
    isImageHoverIn,
    isImageHoverOut,
    lastUploadTime
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
	withStyles(useStyles),
	connect(mapStateToProps))(Dashboard);
