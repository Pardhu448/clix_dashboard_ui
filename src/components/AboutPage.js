import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function AboutPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography variant="h5" align='justify' gutterBottom>
        About
      </Typography>

      <Typography variant="body2" align='justify' gutterBottom>
      This demo website provides access to visualisations of various datasets being generated from
      CLIxPlatform - a student learning platform - as part of Connected Learning Initiative (CLIx).
      The objective is that different teams across CLIx project can explore these datasets through
      visualisations built on top of raw data. Also each school can login with its school credentials
      to access school level live dashboards. The data is mainly coming from the CLIx server at the
      school ICT lab through syncthing. Questions explored in these visualisations are outcome of
      collaborative exploration between CLIx technology team and implementation, domain,
      research and various other teams. This is just an alpha site (very initial glimpses) towards an
      aspirational meta-visualization dashboard.
      </Typography>

    </div>
  );
}
