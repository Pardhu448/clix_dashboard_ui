import React from 'react';
//import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" >
        Connected Learning Initiative (CLIx), CEIAR, TISS
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
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
