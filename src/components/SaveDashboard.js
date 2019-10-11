
import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import domtoimage from 'dom-to-image';
import fileDownload from "js-file-download";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
    height: "8mm",
    float: 'right',
  },
}));

export default function SaveButton({ id }) {
const classes = useStyles();
return (
<Button
  variant="contained"
  color= "white"
  size="small"
  className={classes.button}
  startIcon={<SaveIcon />}
  onClick={() => {
  domtoimage.toBlob(document.getElementById(id))
    .then(function (blob) {
       fileDownload(blob, 'dom-to-image.png');
    });
  }}
  >
  Dowload
  </Button>
);
};
