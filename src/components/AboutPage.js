import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import  { Helmet } from 'react-helmet';
import  clixdemopicurc from '../shared/clix_dashboard_login_image.png'
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },

});

export default function AboutPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


<Grid container spacing={3}>
      
        <Grid item xs={6}>
        <Typography variant="h5" align='justify' gutterBottom>
        About
      </Typography>
          <Typography variant="body2" align="justify" gutterBottom>
      
      
      The Connected Learning Initiative (CLIx) is a technology-enabled initiative at scale for high school students. The initiative was seeded by Tata Trusts, Mumbai and is led by Tata Institute of Social Sciences, Mumbai and Massachusetts Institute of Technology, Cambridge, MA USA. CLIx offers a scalable and sustainable model of open education, to meet the educational needs of students and teachers. 
Students use CLIx platform regularly generating a lot of datasets which are being processed and analyzed to have insights about the implementation. This dashboard provides access to the visualizations at various levels viz. State, District and School Levels.  
      
      </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={clixdemopicurc} alt="clix image"/> 
        </Grid>
        
      </Grid>
<Helmet>
<meta charSet="utf-8" />
                <title> CLIx Dashboard About</title>

</Helmet>
      {/* <Typography variant="h5" align='justify' gutterBottom>
        About
      </Typography> */}

   {/* <Typography variant="body2" align='justify' gutterBottom> 
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
  */}
    
      {/* <Typography variant="body2" align="justify" gutterBottom>
      
      
      The Connected Learning Initiative (CLIx) is a technology-enabled initiative at scale for high school students. The initiative was seeded by Tata Trusts, Mumbai and is led by Tata Institute of Social Sciences, Mumbai and Massachusetts Institute of Technology, Cambridge, MA USA. CLIx offers a scalable and sustainable model of open education, to meet the educational needs of students and teachers. 
Students use CLIx platform regularly generating a lot of datasets which are being processed and analyzed to have insights about the implementation. This dashboard provides access to the visualizations at various levels viz. State, District and School Levels.  
      
      </Typography>
            <img src={clixdemopicurc} alt="clix image"/> 
           */}
         
    </div>
  );
}
