import React from 'react';
import { connect } from "react-redux";

import { Route, Redirect } from 'react-router-dom';

var moment = require('moment');
//console.log(moment(localStorage.getItem('lastlogin')).add(3, 'hours') >= moment())



const PrivateRoute = ({ view_mode, component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        
        //checking if a user is already stored in local web browser and also loast login in less than 3 hours
        localStorage.getItem('user') && (moment(localStorage.getItem('lastlogin')).add(3, 'hours') >= moment()) 
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)
function mapStateToProps(state){
    const { view_mode } = state.authmode;
    return{view_mode}
}
export default connect(mapStateToProps)(PrivateRoute);

