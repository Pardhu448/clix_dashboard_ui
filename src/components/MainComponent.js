import React, { Component } from 'react';

import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomeSlider from './HomeSliderComponent';
import HomeCards from './HomeCardsComponent';
// import DynamicSelect from './DynamicSelect';
// import DropDownMenuAuth from './DropDownMenuAuth';
import The from './TheSchoolAuthe'
import DropDownMenu from './DropDownMenu';

// import RouteDropDown from './RouteDropDown';
import Header from './HeaderComponent';
import Footer from './Footer';
//import About from './AboutComponent';
//import SchoolSearch from './SchoolSearchComponent';
import PrivateRoute from './PrivateRoute';
// import PrivateRouteAccess from './PRoute';

//import SignIn from './SignIn';
import TheSocialButton from './thesocialbutton';
import FaqPage from './FaqPage';
import StateChart from './StateHome'

import TermsofServices from './TermsofServices';
import Privacy from './Privacy'
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard/Dashboard';

//import StateDashboard from './StateDashboard/StateDashboard'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet"
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return{
     items: state.slider_items
   };
};

class Main extends Component {

/*
  this.state = {
    school_id: 'dungri',
    school_url: 'http://localhost:8088/superset/dashboard/dungri/?standalone=true'
  };
  this.onSearch = this.onSearch.bind(this)
}
onSearch = (event) => {
   const target = event.target;
   console.log(target.value);
   this.setState({school_id: target.value});
   this.setState({school_url: 'http://localhost:8088/superset/dashboard/' + target.value + '/?standalone=true'})
 }
 */

render(){
  return (
      <div>
      <CssBaseline />
      <Helmet>
                <meta charSet="utf-8" />
                <title>CLIx Dashboard</title>
                <link rel="canonical" href="http://clixdashboard.tiss.edu" />
            </Helmet>
      <Header />
      <span className="block-example border-top border-light"></span>
      <TheSocialButton/>
      <Switch>

      
       <Route path='/home' component={The}/>

       <Route path='/login' component={LoginPage}/>

       <Route path='/faq' component={FaqPage}/>
       <Route path='/termsofservices' component={TermsofServices}/>

       <Route path='/contact' component={ContactPage}/>
      
       <Route path= '/about' component={AboutPage}/>

       <PrivateRoute path= '/schoolviz' component={Dashboard}/>
       <Route path= '/privacy' component={Privacy}/>
       {/*<Route path='/schoolsearch' component={StateDashboard}/>*/}

       <Route path='/stateviz' component={() => {
        window.location.href = 'https://clixindia-dev.github.io/clix_vis_demo/pages/visualisations.html';
        return null; }}/>

      <Route path='/documentation' component={() => {
        window.location.href = 'https://clixindia-dev.github.io/clix_vis_demo/pages/documentation.html';
        return null; }}/>
       

	  {/*<Route path='/documentation' component={() => {
	 window.open("https://pardhu448.github.io/clix_vis_demo/pages/documentation.html", "_blank");
         <>
         <HomeSlider items={this.props.items}/>
         <span className="block-example border-top border-light"></span>
         <HomeCards />
         </>
      }}/>*/}
       <Redirect to="/home" />
      </Switch>

      <Box mt={5}>
        <Footer />
      </Box>
      </div>
  );
}
}

/*
<Route path ='/schools' component={() => <SchoolSearch school_id={this.state.school_id}
school_url={this.state.school_url} onSearch={this.onSearch}/>} />
*/



export default withRouter(connect(mapStateToProps)(Main));
