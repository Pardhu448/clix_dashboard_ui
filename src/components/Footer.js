import React from "react";
//import { Link as RouterLink } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from '@material-ui/core/Box'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import './DropAuth.css'
import ShareIcon from "@material-ui/icons/Share";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    
  },

}));


function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <hr />
     

      <Grid container justify="center">
        <Grid item xs={12} sm={3} md={3} align="center">
          <a href="https://www.tatatrusts.org/" target="_blank" >
          <img
            style={{ marginTop: 10 }}
            src="https://clixoer.tiss.edu/static/ndf/images/footer-svg/tata_trusts.svg"
          />
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={6} align="center">
          <Typography>Led by</Typography>
          <span>
            {" "}
            <a href="https://tiss.edu/"  target="_blank" >            <img
              style={{ width: "140px", paddingRight: 40 }}
              src="https://clixoer.tiss.edu/static/ndf/images/footer-svg/tiss.svg"
            />
            </a>
          </span>
          <span>
            {" "}
            <a href="https://mit.edu/" target="_blank">
            <img
              style={{ width: "140px", }}
              src="https://clixoer.tiss.edu/static/ndf/images/footer-svg/mit.svg"
            />
            </a>
          </span>
        </Grid>

        <Grid item xs={12} sm={3} md={3} align="center">
          <ul style={{ listStyle: "none", marginTop: 10, marginRight:20 }} align="left">
            <li >
              <NavLink className="" to="/about">
                About{" "}
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="" to="/faq">
                FAQ{" "}
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="" to="/termsofservices">
                Terms of services
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="" to="/privacy">
                Privacy Policy{" "}
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="" to="/contact">
                {" "}
                Contact{" "}
              </NavLink>
            </li>
          </ul>
        </Grid>
      </Grid>
      <hr />
      <Grid container justfy="center">
        <Grid item xs={12} sm={6} md={6} lg={6} align="left" >
          © 2019-2020 Tata Institute of Social Sciences and Massachusetts
          Institute of Technology
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className="themaile">
          
          <i className=" fas fa-globe 2x"> </i> Visit our site :{" "}
          <a href="clix.tiss.edu"  target="_blank" style={{ marginRight: 50}}> clix.tiss.edu</a>
          <br />
          <i className="fas fa-envelope 2x"></i> Contact us :{" "}
          <a href="mailto:contact@clix.tiss.edu" align="left" target="_blank"> contact@clix.tiss.edu </a>
        </Grid>
        <Box display={ {xs:'block',sm:'none', md:'none'}}>
        <a href="#" className="icon-button twitter"><i className="fa fa-twitter"></i><span></span></a>
<a href="#" className="icon-button facebook"><i className="fa fa-facebook"></i><span></span></a>
<a href="#" className="icon-button youtube"><i className="fa fa-youtube"></i><span></span></a>
<a href="#" className="icon-button pinterest"><i className="fa fa-instagram"></i><span></span></a>
             
     
          </Box>
     <Typography variant="p">  
        Except where otherwise noted, content on this site is licensed under a{" "}
        <br />
        Creative Commons Attribution 4.0 International license  <span> <i className="fas fa-copyright"></i> </span>
  </Typography>
      </Grid>
      {/* <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" >
        Connected Learning Initiative (CLIx), CEIAR, TISS

      </Link>{' '}

  
      {new Date().getFullYear()}
    </Typography> */}
    </div>
  );
}
/*
function Footer(props){
    return(
      <div align="center">
       &copy; {new Date().getFullYear()} Copyright: Connected Learning Initiative (CLIx), CEIAR, TISS
      </div>
    );
}
*/
export default Footer;
