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
import tataimage from '../shared/tata_trusts.svg'
import ShareIcon from "@material-ui/icons/Share";
import tissimge from '../shared/tisstiss.svg'

import mitimage from '../shared/mit.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '15px',
    paddingRight: '15px',
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
     

      <Grid container justify="center" >
        <Grid item xs={12} sm={3} md={3} align="center">
          <a href={tataimage} target="_blank" rel="noopener" >
          <img
            style={{ marginTop: 10 }}
            src="https://clixoer.tiss.edu/static/ndf/images/footer-svg/tata_trusts.svg"
            alt="tata trust"
            
          />
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={6} align="center">
          <Typography>Led by</Typography>
          <span>
            {" "} 
            <a href={tissimge} target="_blank" rel="noopener">            <img
              style={{ width: "140px", paddingRight: 40 }}
              src="https://clixoer.tiss.edu/static/ndf/images/footer-svg/tiss.svg"
              alt="tiss"
            />
            </a>
          </span>
          <span>
            {" "}
            <a href={mitimage} target="_blank" rel="noopener">
            <img
              style={{ width: "140px", }}
              src="https://clixoer.tiss.edu/static/ndf/images/footer-svg/mit.svg"
              alt="themit"
            />
            </a>
          </span>
        </Grid>

        <Grid item xs={4} sm={3} md={3} align="center" >
          <ul style={{ listStyle: "none",  marginTop: 10, marginRight:20, textAlign:"left" }} >
            <li className="Navlink-color">
              <NavLink className="colorNavlink" to="/about" rel="noopener">
                About{" "}
              </NavLink>
            </li>
            <li className="Navlink-color">
              {" "}
              <NavLink className="colorNavlink" to="/faq" rel="noopener">
                FAQ{" "}
              </NavLink>
            </li>
            <li className="Navlink-color">
              {" "}
              <NavLink className="colorNavlink" to="/termsofservices" rel="noopener">
                Terms of services
              </NavLink>
            </li>
            <li className="Navlink-color">
              {" "}
              <NavLink className="colorNavlink" to="/privacy" rel="noopener">
                Privacy Policy{" "}
              </NavLink>
            </li>
            <li className="Navlink-color">
              {" "}
              <NavLink className="colorNavlink" to="/contact" rel="noopener">
                {" "}
                Contact{" "}
              </NavLink>
            </li>
          </ul>
        </Grid>
      </Grid>
      <hr />
      <Grid container justfy="center" style={{fontWeight: 300}}>
        <Grid item xs={12} sm={6} md={6} lg={6} align="left"   >
          © 2019-2020 Tata Institute of Social Sciences and Massachusetts
          Institute of Technology
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className="themaile">
          
          <i className=" fas fa-globe 2x"> </i> Visit our site :{" "}
          <a href="clix.tiss.edu"  target="_blank" rel='noreferrer' style={{ marginRight: 50}}> clix.tiss.edu</a>
          <br />
          <i className="fas fa-envelope 2x"></i> Contact us :{" "}
          <a href="mailto:contact@clix.tiss.edu" rel='noreferrer' align="left" target="_blank"> contact@clix.tiss.edu </a>
        </Grid>
        <Box display={ {xs:'block',sm:'none', md:'none'}}>
        <a href="#"  href="https://www.facebook.com/cetei.tiss/?ref=bookmarks" target="_blank"  href="https://twitter.com/@cetei_tiss" rel='noreferrer' className="icon-button twitter"><i className="fa fa-twitter"></i><span></span></a>
<a href="#"  href="https://www.facebook.com/cetei.tiss/?ref=bookmarks"  className="icon-button facebook" target="_blank" rel='noreferrer'><i className="fa fa-facebook"></i><span></span></a>
<a href="#"  href="https://www.youtube.com/channel/UCHeg9vBiapABVkb6TTWBgYA"  className="icon-button youtube" target="_blank"  rel='noreferrer'><i className="fa fa-youtube"></i><span></span></a>
<a href="#"  href="https://www.instagram.com/cetei_tiss/"  className="icon-button pinterest" rel='noreferrer' target="_blank"><i className="fa fa-instagram"></i><span></span></a>
              
     
          </Box>
     <Typography variant="inherit" >  
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
