import React, { Component } from 'react';

import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomeSlider from './HomeSliderComponent';
import HomeCards from './HomeCardsComponent';
import Header from './HeaderComponent';
import Footer from './Footer';
import About from './AboutComponent';
import SchoolSearch from './SchoolSearchComponent';
import PrivateRoute from './PrivateRoute';
//import SignIn from './SignIn';
import FaqPage from './FaqPage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard/Dashboard';
import StateDashboard from './StateDashboard/StateDashboard'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return{
     items: state.slider_items
   };
};

class Main extends Component {

constructor(props){
  super(props);
}
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
      <Header />
      <span className="block-example border-top border-light"></span>
      <Switch>

       <Route exact path = '/home' component={() =>
         <>
         <HomeSlider items={this.props.items}/>
         <span className="block-example border-top border-light"></span>
         <HomeCards />
         </>
        }/>

       <Route path='/login' component={LoginPage}/>

       <Route path='/faq' component={FaqPage}/>
       <Route path='/contact' component={ContactPage}/>

       <Route path= '/about' component={AboutPage}/>
       <PrivateRoute path= '/schoolviz' component={Dashboard}/>
       {/*<Route path='/schoolsearch' component={StateDashboard}/>*/}

       <Route path='/stateviz' component={() => {
        window.location.href = 'http://localhost:4000/pages/visualisations.html';
        return null; }}/>

      <Route path='/documentation' component={() => {
        window.location.href = 'http://localhost:4000/pages/documentation.html';
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
