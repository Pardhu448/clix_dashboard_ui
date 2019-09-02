import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
//import { makeStyles } from '@material-ui/core/styles';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

import { userActions } from '../redux/useractions';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { Route, Redirect } from 'react-router-dom';

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
    height: '80vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class LoginPage extends Component {
  constructor(props) {
         super(props);

         // reset login status
         this.props.dispatch(userActions.logout());

         this.state = {
             username: '',
             password: '',
             submitted: false
         };

         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }

    handleChange(e) {
            const { name, value } = e.target;
            this.setState({ [name]: value });
        }

    handleSubmit(e) {
            e.preventDefault();
            this.setState({ submitted: true });
            const { username, password } = this.state;
            const { dispatch } = this.props;
            const { from } = this.props.location.state || { from: { pathname: '/' } };
            const { loggedIn } = this.props;

            if (username && password) {
                dispatch(userActions.login(username, password));
            }
        }

 render(){

   const { classes } = this.props;
   const { loggingIn, loggedIn } = this.props;
   const { username, password, submitted } = this.state;
   const { from } = this.props.location.state || { from: { pathname: '/' } };

   if (loggedIn) return <Redirect to={from.pathname} />

   return (
     <MuiThemeProvider theme = {theme}>
     <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange = {this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
    </MuiThemeProvider>
  );
 }
}

function mapStateToProps(state) {
    const { loggingIn, loggedIn } = state.authenticate;
    return {
        loggingIn,
        loggedIn
    };
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
	withStyles(useStyles),
	connect(mapStateToProps))(LoginPage);

//const connectedLoginPage = connect(mapStateToProps)(LoginPage);
//export { connectedLoginPage as LoginPage };
//export default withStyles(useStyles)(LoginPage);
