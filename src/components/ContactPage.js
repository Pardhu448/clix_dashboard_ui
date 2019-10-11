import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Contact
      </Typography>

      <Typography variant="body2" gutterBottom>
      All the data sources including the code is available for CLIx community to recreate, refine and further these visualisations.
If you are having any problems, any questions or suggestions, feel free to contact us at below:
      </Typography>

      <Typography variant="overline" display="block" gutterBottom>
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
