import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { Helmet } from "react-helmet";
import clixdemopicurc from "../shared/clix_dashboard_login_image.png";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "20px",
    justifyItems: "space-between",
  },
});

export default function StateHome() {
  const classes = useStyles();

  return (
    <div className="container">
      <div className={classes.root}>
        <Typography variant="h4" align="center" style={{ marginTop: 40 }}>
          {" "}
          State Level Visualisations{" "}
        </Typography>
        <Typography style={{ margin: 20 }}  align="justify" >
          {" "}
          Visualisations are an excellent tool for exploring datasets, which are
          huge and have multiple dimensions and layers. They let people slice
          and dice complicated data across different dimensions based on
          individual's research question and get better visual insight of the
          data. This page contains various categories of visualisations, we
          could collate using CLIx platform data. These graphs are updated every
          month with syncthing data from schools.
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={10} sm={3} md={3} spacing={3}>
            <Paper>
              <a
                href="https://clixindia-dev.github.io/clix_vis_demo/visualisationtype/uniqueuser_data_viz.html"
                target="_blank"
              >
                {" "}
                <img
                  src="https://clixindia-dev.github.io/clix_vis_demo/images/uniqueuser.png"
                  alt="clix image"
                  style={{ maxWidth: 417, maxHeight: 172 }}
                />
                <Typography align="center">
                  Explore data related to unique user metrics
                </Typography>
              </a>
            </Paper>
          </Grid>
          <Grid item xs={10} sm={3} md={3} spacing={3}>
            <Paper>
              <a
                href="https://clixindia-dev.github.io/clix_vis_demo/visualisationtype/server_data_viz.html"
                target="_blank"
              >
                {" "}
                <img
                  src="https://clixindia-dev.github.io/clix_vis_demo/images/newplot.png"
                  alt="clix image"
                  style={{ maxWidth: 417, maxHeight: 172 }}
                />{" "}
                <Typography align="center">
                  Explore data related to server metrics
                </Typography>{" "}
              </a>{" "}
            </Paper>
          </Grid>
          <Grid item xs={10} sm={3} md={3} spacing={3}>
            <Paper>
              <a
                href="https://clixindia-dev.github.io/clix_vis_demo/visualisationtype/progress_data_viz.html"
                targrt="_blank"
              >
                <img
                  src="https://clixindia-dev.github.io/clix_vis_demo/images/module_data_image.png"
                  alt="clix image"
                  style={{ width: 200, height: 170 }}
                />
                <Typography align="center">
                  Explore data related to course module section of platform
                </Typography>{" "}
              </a>
            </Paper>
          </Grid>

          <Grid item xs={10} sm={3} md={3} spacing={3}>
            <Paper>
              <a
                href="https://clixindia-dev.github.io/clix_vis_demo/visualisationtype/tools_data_viz.html"
                target="_blank"
              >
                <img
                  src="https://clixindia-dev.github.io/clix_vis_demo/images/tools_data_image.png"
                  alt="clix image"
                  style={{ width: 200, height: 161 }}
                />
                <Typography align="center">
                  Explore data related to tools section of platform
                </Typography>
              </a>
            </Paper>
          </Grid>
        </Grid>
        <Helmet>
          <meta charSet="utf-8" />
          <title> CLIx Dashboard </title>
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
    </div>
  );
}
