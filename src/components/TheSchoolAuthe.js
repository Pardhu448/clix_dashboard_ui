import React, { Component,lazy,Suspense } from "react";
import "./DropAuth.css";
// import { schoolInfoFetch } from "../redux/schoolfetch";
import { userActions } from "../redux/useractions";
import { userActionsLogin } from "../redux/fetchmodeactions";
import { ButtonToggle } from "reactstrap";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import StateHome from "./StateHome";
import CircularProgress from "@material-ui/core/CircularProgress";
// import TabGlance from "./TheCLIxM";
import Grid from "@material-ui/core/Grid";
import Select from "react-select";
import { Helmet } from "react-helmet";
import { compose } from "redux";
import thebannerc from "../shared/BannerforDashboard.png";

import baseUrl from "../shared/baseUrl";
import ReactDOM from "react-dom";

const StateHome  = lazy(()=> import('./StateHome'))
const TabGlance = lazy(()=> import('./TheCLIxM'))

const RenderFall = ()=> <div> ...Loading </div>
const useStyles = makeStyles((theme) => ({
  progress: {
    margin: theme.spacing(2),
  },
}));
const styles = {
  container: base => ({
    ...base,
    flex: 1
  }),

};

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
    this.props.dispatch(userActionsLogin.removeUser());
  }

  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   const { districts, school_data, loading, _id, id } = this.props;
  //   dispatch(schoolInfoFetch.getdistrict());
  //   dispatch(schoolInfoFetch.getschoolname())
  // }
  handleSchool = (e) => {
    // console.log(e.target.value);
   
    this.setState({
      // school_name: e.target.value,
      school_name: e.value,
      errorCallSchool: "",
      errorCallDistrict: "",
    });
  };

  // componentDidMount() {
  //   console.log(this.props)
  // }
  hanldeChange = (e) => {
    // console.log(e.target.value);
    // let _id = e.target.value;
    let _id = e.value;
    this.setState({ loading: true });
    fetch(`${baseUrl}/districts/${_id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let state_code = data.dist_data.map((item, index) => item.state_code);
        console.log(state_code);
        this.setState({
          school_name: "",
          error: "",
          errorCallSchool: "",
          errorCallDistrict: "",
          districts: data.dist_data,
          districts_code: data.dist_data.distirct_code,
          state_code: state_code[0][0],
          loading: false,
          school_data: [],

          //   planet: data.planets
        });

        console.log(this.state);
      });
    // .catch((error) =>{
    //   console.log(error)
    //   this.setState({
    //     loading: false,
    //     error: "failed to fetch data"
    //   })
    // });
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

    this.setState({ view_mode: true, submitted: true, loading: true });
    // const { school_name, view_mode } = this.state;
    const { dispatch } = this.props;

    //const { from } = this.props.location.state || { from: { pathname: '/' } };
    //const { loggedIn } = this.props;

    if (this.state.school_name && this.state.view_mode) {
      dispatch(userActionsLogin.directlogin(school_name, view_mode));
    }

    if (
      this.state.school_data == !this.state.school_data ||
      this.state.school_name === ""
    ) {
      this.setState({
        errorCallSchool: " Please choose valid schoolname ",
      });
    }
    if (
      this.state.districts == !this.state.districts ||
      this.state.districts_code === ""
    ) {
      this.setState({
        errorCallDistrict: "Please choose valid district ",
      });
    }
    if (this.props.loginFailed) {
      this.setState({
        error: "No data in database",
      });
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
    this.setState({ submitted: true, loading: false });
  };

  handleExpandClick = (e) => {
    // console.log(e.target.value);

    // let id = e.target.value || 0;
    let _id = this.state.state_code;
    let id = e.value || 0;

    this.setState({ loading: true });
    try {
    } catch (error) {}
    fetch(`${baseUrl}/schools/${_id}/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.sch_data);
        console.log(data.sch_data.distirct_code);
        this.setState({
          school_data: data.sch_data,
          error: "",
          errorCallDistrict: "",
          districts_code: data.sch_data[0].distirct_code,
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

    const { view_mode, loggedIn, loginFailed, user } = this.props;
    const { school_name, submitted, errorCall, loadding } = this.state;
    const { from } = this.props.location.state || {
      from: { pathname: "/schoolviz" },
    };

    if (localStorage.getItem("user") && view_mode)
      return <Redirect to={from.pathname} />;
    {
      /* <Select 
            
isSearchable={true}
isDisabled={false}
defaultValue="State"
 options={thestate}
 onChange={this.hanldeChange.bind(this)}

          />   
         let ArrayState = [
      { value: "1", label:' Chattisgarh'},
      { value: "2", label: 'Mizoram'},
      { value: "3", label: 'Rajasthan'},
      { value: "4", label: 'Telengana'}

    ];
    let thestate = ArrayState.map(state => {
      return {value : state.value , label: state.label} })*/
    }
    let ArrayState = [
      { value: "1", label: " Chattisgarh" },
      { value: "2", label: "Mizoram" },
      { value: "3", label: "Rajasthan" },
      { value: "4", label: "Telengana" },
    ];
    let thestate = ArrayState.map((state) => {
      return { value: state.value, label: state.label };
    });
    let districts = this.state.districts;
    let school_data = this.state.school_data;
    let DistName = districts.map((item, index) => (
      <option key={index} id={item.state_code} value={item.distirct_code}>
        {item.districtName}
      </option>
    ));
    let TheState = districts.map((item) => {
      return { value: item.distirct_code, label: item.districtName   };
    });
    // let SchName = school_data.map((item, index) => (
    //   <option
    //     key={index}
    //     value={item.school_name}
    //     disabled={item.school_name.includes("Not synced")}
    //   >
    //     {item.school_name}
    //   </option>

    // ));
    let SchoolName = school_data.map((item, index) => {
        let udicode =  item.school_udisce_code;
       
      return { value: item.school_name, label: udicode === null ? item.school_name :  item.school_name + "-" + udicode};
    });
    // <option
    //   key={index}
    //   value={item.school_name}
    //   disabled={item.school_name.includes("Not synced")}
    // >
    //   {item.school_name}
    // </option>
    let planet = this.state.planet;
    let Planet = planet.map((c) => <option value={c}>{c} </option>);

    // console.log(planet);
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: 300,
        
            backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${thebannerc})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <Typography
            variant="h1"
            align="center"
            color="primary"
            className="thename"
            style={{ color: "#fff", fontSize:'3rem', fontWeight: '400', lineHeight: 1 }}
          >
             CLIx Dashboard 
          </Typography>
          {/* <Typography variant="" align="center">
                  Live School Implemation 
                </Typography> */}
          <form
            onSubmit={this.handleSubmit}
            align="center"
            justify="center"
            id="themenu"
          >  
            <Grid
              // direction="row"
              // alignItems="center"
              justfiy="center"
              style={{ display: "inline-block" }}
            >
              {this.state.loading ? (
                <div class="background-wrok">
                  {" "}
                  <CircularProgress color="secondary" />{" "}
                </div>
              ) : null}
           <div class="label-div" style={{ display: "inline-block" }}>
                           <label styles={styles} id="state" htmlFor="aria-state-input" className="cust-select">
                Select State
              </label>
              <Select  
                // label="select state"
                 aria-labelledby="state"
                 inputId="aria-state-input"
                 name="aria-live-state"
                className="react-select"
                isSearchable={true}
                isDisabled={false}
                defaultValue="State"
                placeholder="State"
                options={thestate.sort((a,b) => a > b)}
                onChange={this.hanldeChange.bind(this)}
              />
 

                </div>
              {/* <select
              className="select"
              onChange={this.hanldeChange.bind(this)}
              required
            
            >
              <option selected disabled>
                {" "}
            State{" "}
              </option>
              <option value="1"> Chattisgarh </option> */}

              {/* <option value="3"> Rajasthan</option>        */}
              {/* <option value="2"> Mizoram </option>
                     <option value="3"> Rajasthan</option>       


              <option value="4"> Telengana </option>
            </select> */}
              {/* <select onChange={this.hanldeClick}> {Planet}</select> */}
              <div class="label-div" style={{ display: "inline-block" }}>
              <label styles={styles} id="district" htmlFor="aria-district-input" className="cust-select">
                Select District
              </label>
              <Select               className="react-select"
    a  ria-labelledby="district"
    inputId="aria-district-input"
    name="aria-live-district"
              styles={styles}
                key={this.state.distirct_code || this.state.state_code}
                isSearchable={true}
                isDisabled={!this.state.state_code}
                defaultValue={{ label: "District", value: 0 }}
                placeholder="District"
                options={TheState.sort((a,b)=> a.label > b.label ? 1: -1)}
              
                onChange={this.handleExpandClick.bind(this)}
              />
 </div>
               
              {/* <select
              defaultValue={"District"}
              disabled={!this.state.state_code}
              className="select"
              onChange={this.handleExpandClick}
              required="requried"
            >
              {" "}
              <option value="District" selected={this.state.districts_code == undefined} disabled>
                {" "}
        District {" "}
              </option>
              {DistName}{" "}
                </select> */}
                <div class="label-div" style={{ display: "inline-block" }}>
 <label styles={styles} id="school" htmlFor="aria-school-input" className="cust-select">
                Select School
              </label>
              <Select               className="react-select" 
             id="react-select"
               aria-labelledby="school"
                 inputId="aria-school-input"
                 name="aria-live-school"
             styles={styles}
                key={`secret-unique-key${this.state.districts_code}`}
                isSearchable={true}
                isDisabled={!this.state.districts_code}
                defaultValue={{ label: "School", value: 0 }}
                placeholder="School"
            
                options={SchoolName.sort((a,b)=> a.label> b.label? 1: -1)}
                isOptionDisabled={(option) =>
                  option.label.includes("Not synced")
                }
                onChange={this.handleSchool.bind(this)}
              />
               </div>
              {/* <select 
              defaultValue={"schoolname"}
              disabled={!this.state.districts_code}
              className="select"
              onChange={this.handleSchool}
              required
            >
              {" "}
              <option value="schoolname" disabled={!this.state.state_code} selected={this.state.school_data}>
                {" "}
            School{" "}
              </option>
              {SchName}
            </select> */}

              {/* <Button  variant="contained" color="primary" disabled={!this.state.state_code}>
          Submit
          
        </Button> */}
              <button
                type="submit"
                color="primary"
                aria-label="submit"
                className="selectMenuSubmit"
                disabled={!this.state.school_name && !this.state.state_code}
                style={{ margin: "0 auto" }}
              >
                {" "}
                Submit
              </button>
              <Grid item xs={12} md={12}>
                <p style={{ color: "#fff", marginTop: 4 , fontSize: '0.8rem'}} align="center">
                  {" "}
                  <span style={{ color: "red" }} >
                    {" "}
                  {this.state.errorCallSchool}{" "}
                  </span>
                  <span style={{ color: "red" }} >
                    {" "}
                    {/* {this.state.error} */}
                    {this.state.errorCallDistrict}{" "}
                  </span>
                  {loginFailed ? (
                    <div style={{ color: "red" }} >
                      {this.state.error}{" "}
                    </div>
                  ) : (
                    ""
                  )}
                  Note: Access school level visuals using above menus{" "}
                </p>
              </Grid>
            </Grid>
          </form>

          {/* <h6 style={{ color: "#fff" }} align="center">
            {" "}
            Note: Access School level visuals using Above Menus{" "}
          </h6> */}
        </div>
       <Suspense fallback={RenderFall()}>
        <StateHome />
        </Suspense>

        <Suspense fallback={RenderFall()}>
        <TabGlance />
           </Suspense>
        {/* <select className="select" onChange={this.handleExpandClick}>             <option > Please select  </option>
   {DistName} </select>  */}
        {/* <select> <option value={films.title}> {films.title} </option></select> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    loggedIn,
    view_mode,
    loginFailed,
    school_name,
    loading,
    user,
  } = state.authmode;
  return {
    loggedIn,
    view_mode,
    loginFailed,
    school_name,
    loading,
    user,
  };
}

// export default The;
export default compose(connect(mapStateToProps))(The);
