import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import "./DropAuth.css";

import { Helmet } from 'react-helmet';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    alignItems: 'center'
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
    <Helmet>
      <meta charSet="utf-8" />
                <title>CLIx Dashboard Contact </title>

      </Helmet>
      
      
      
      <Typography variant="h6" gutterBottom>
        Contact
      </Typography>

      <Typography variant="body2" className="text" gutterBottom>
      All the data sources including the code is available for CLIx community to recreate, refine and further these visualisations.
If you are having any problems, any questions or suggestions, feel free to contact us at below:
      </Typography>

      <Typography variant="overline" className="text" display="block" gutterBottom>
      durga.garapati@tiss.edu,
      parthasarathi.edupally@tiss.edu,
      sadaqat.mulla@tiss.edu,
      satej.shende@tiss.edu,
      shivani.dikshit@tiss.edu,
      vignesh.nair@tiss.edu
      </Typography>
    </div>
  );
}
