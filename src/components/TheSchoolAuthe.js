import React, { Component } from "react";
import "./DropAuth.css";
// import { schoolInfoFetch } from "../redux/schoolfetch";
import { userActions } from "../redux/useractions"
import { userActionsLogin } from "../redux/fetchmodeactions"

import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import CircularProgress from '@material-ui/core/CircularProgress';
import Select from 'react-select';
import { compose } from "redux";

import baseUrl from '../shared/baseUrl';

import ReactDOM from "react-dom";
const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));
// import data from "./data.json";
// let Data = data.dist_data;
// console.log(Data);
class The extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      districts: [],
      school_data: [],
      state_code: "",
      districts_code: "",
      school_name: '',
      view_mode: true,
      submitted: false,
      selectId: "",
      errorCallUser: "",
      planet: [],
      data: [],
    };
    this.props.dispatch(userActionsLogin.removeUser());

  }


  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   const { districts, school_data, loading, _id, id } = this.props;
  //   dispatch(schoolInfoFetch.getdistrict());
  //   dispatch(schoolInfoFetch.getschoolname())
  // }
  handleSchool = (e) => {
    console.log(e.target.value);
    this.setState({ school_name : e.target.value})
    
  }

  // componentDidMount() {
  //   console.log(this.props)
  // }
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
          districts: data.dist_data,
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

    if(school_name == !school_name || school_name === ''){
      this.setState({
        errorCallUser: "Please choose valid username "
      })
    }
   
  //   const { from } = this.props.location.state || { from: { pathname: '/schoolviz' } };
  // setTimeout(() => { 
  //   if (view_mode && localStorage.getItem('user')) return <Redirect to={from.pathname} />
  // }, 2000)


 
    //  fetch(`${baseUrl}/gettoken`, {
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/json' },
    //   body:   JSON.stringify({school_name, view_mode})
    //  })
    //  .then((response) => response.json())
    //  .then((responseJson) => {
    //    console.log(responseJson)
    //    return responseJson.user;
       
    //  })
    //  .catch((error) => {
    //    console.error(error);
    //  });
   }

   
  handleExpandClick = (e) => {
    console.log(e.target.value);

    let id = e.target.value;
    let _id = this.state.state_code;

    this.setState({ loading: true });

    fetch(`${baseUrl}/schools/${_id}/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.sch_data);

        this.setState({
          school_data: data.sch_data,
          //   planet: data.planets
          loading: false,
        });
      });
  };


// componentDidMount() {
//   const { view_mode, loggedIn, loginFailed } = this.props;
//   const { school_name, submitted, errorCall, loadding } = this.state;
//   const { from } = this.props.location.state || { from: { pathname: '/schoolviz' } };
  
  // if (view_mode &&  localStorage.getItem('user')) return <Redirect to={from.pathname} />

// }

  render() {
  const { classes } = this.props;
    // let planets = this.state.;
    // let planetsArray = planets.planets;
    // console.log(planetsArray);
    const { view_mode, loggedIn, loginFailed ,user } = this.props;
    const { school_name, submitted, errorCall, loadding } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/schoolviz' } };
    
    if ( localStorage.getItem('user') && view_mode ) return <Redirect to={from.pathname} />

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
    let planet = this.state.planet;
    let Planet = planet.map((c) => <option value={c}>{c} </option>);
    // console.log(planet);
    return (
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
        </select>
        {/* <select onChange={this.hanldeClick}> {Planet}</select> */}
        <select  disabled={!this.state.state_code}  className="select" onChange={this.handleExpandClick} required>
          {" "}
          <option selected disabled> Please select </option>
          {DistName}{" "}
        </select>
        <select  disabled={!this.state.state_code}  className="select" onChange={this.handleSchool} required>
          {" "}
          <option selected disabled={!this.state.state_code}> Please select school </option>
          {SchName}
        </select>  
         {/* <Button  variant="contained" color="primary" disabled={!this.state.state_code}>
          Submit
        </Button> */}
        <button className="selectMenuSubmit" disabled={!this.state.state_code}> submit</button>
        </form>
        {/* <select className="select" onChange={this.handleExpandClick}>             <option > Please select  </option>
   {DistName} </select>  */}
        {/* <select> <option value={films.title}> {films.title} </option></select> */}
      </div>
    );
  }
}

function mapStateToProps(state) {

  const { loggedIn,view_mode,loginFailed ,school_name, loading,user} = state.authmode;
  return {
    loggedIn,view_mode,loginFailed, school_name, loading,user
  }
}

// export default The;
export default compose(connect(mapStateToProps))(The);
