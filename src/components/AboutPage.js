import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './DropAuth.css';

import  { Helmet } from 'react-helmet';
import  clixdemopicurc from '../shared/clix_dashboard_login_image.png'
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: 40,
    
  },

});

export default function AboutPage() {
  const classes = useStyles();

  return (
    <>
    {/* <Helmet>
   <title> 
     A CLIx Dashboard 
   </title>

    <meta name="title" content=" A  | CLIxDashboard - implementation metric and learning analytics"/>
<meta name="description" content="fake Explore the CLIx implementation monitoring metrics and learning analytics across our partner schools."/>

<meta property="og:type" content="website"/>
<meta property="og:url" content="https://staging-clixdashboard.tiss.edu/about"/>
<meta property="og:title" content="A | CLIxDashboard - implementation metric and learning analytics "/>
<meta property="og:description" content=" Fake Explore the CLIx implementation monitoring metrics and learning analytics across our partner schools."/>
<meta property="og:image" content="https://staging-clixdashboard.tiss.edu/static/media/Banner.1c665a81.png"/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://staging-clixdashboard.tiss.edu/about/"/>
<meta property="twitter:title" content="A  CLIxDashboard - implementation metric and learning analytics"/>
<meta property="twitter:description" content="fake Explore the CLIx implementation monitoring metrics and learning analytics across our partner schools."/>
<meta property="twitter:image" content="https://staging-clixdashboard.tiss.edu/static/media/Banner.1c665a81.png"/>


    </Helmet> */}
    <div className={classes.root} align="center">


<Grid container spacing={3}>
      
        <Grid item xs={12} sm={6} md={6} spacing={1}  >
        <Typography variant="h5" align='justify' gutterBottom>
        About
      </Typography>
          <Typography className="text"  gutterBottom>
      
      
      The Connected Learning Initiative (CLIx) is a technology-enabled initiative at scale for high school students. The initiative was seeded by Tata Trusts, Mumbai and is led by Tata Institute of Social Sciences, Mumbai and Massachusetts Institute of Technology, Cambridge, MA USA. CLIx offers a scalable and sustainable model of open education, to meet the educational needs of students and teachers. 
Students use CLIx platform regularly generating a lot of datasets which are being processed and analyzed to have insights about the implementation. This dashboard provides access to the visualizations at various levels viz. State, District and School Levels.  
      
      </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} alignItems="center" >
          <img  src={clixdemopicurc}  style={{ paddingTop: 60}} className="img-fluid" alt="clix image"/> 
        </Grid>
        
      </Grid>

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
    </>
  );
}
