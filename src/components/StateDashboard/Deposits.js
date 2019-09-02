/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Most Used Module/Tool</Title>
      <Typography component="p" variant="h4">
        PoliceSquad
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        during the week of 12th Aug, 2019
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">

        </Link>
      </div>
    </React.Fragment>
  );
}
