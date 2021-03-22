import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import  { Helmet } from 'react-helmet';
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '20px',
    justifyItems: 'space-between',

  },

});

export default function TermsofServices() {
  const classes = useStyles();

  return (
    <div className="container">
      <Helmet>

        <title>  CLIx Dashboard Terms of Privacy </title>
      </Helmet>
   
   <Typography variant="body2" align="justify" gutterBottom>
      
      
    <h1> Terms of Service page</h1>
      
      </Typography>
    </div>
  );
}
