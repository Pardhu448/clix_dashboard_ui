


import React from 'react';
//import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {NavLink} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Privacy() {
  const classes = useStyles();

  return (
    <div  className={classes.root} >

<Typography variant="body2" align="justify" gutterBottom>
      Privacy page
    
      </Typography>



    </div>
  );
}

export default Privacy;
