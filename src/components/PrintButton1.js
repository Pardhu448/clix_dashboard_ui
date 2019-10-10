import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';

const pxToMm = (px) => {
  return Math.floor(px/document.getElementById('school_board').offsetHeight);
};

const mmToPx = (mm) => {
  return document.getElementById('school_board').offsetHeight*mm;
};

const range = (start, end) => {
    return Array(end-start).join(0).split(0).map(function(val, id) {return id+start});
};


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
    float: 'right',
    height: "8mm",
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
    const input = document.getElementById(id);
    const inputHeightMm = pxToMm(input.offsetHeight);
    const a4WidthMm = 210;
    const a4HeightMm = 297;
    const a4HeightPx = mmToPx(a4HeightMm);
    const numPages = inputHeightMm <= a4HeightMm ? 1 : Math.floor(inputHeightMm/a4HeightMm) + 1;
    console.log({
      input, inputHeightMm, a4HeightMm, a4HeightPx, numPages, range: range(0, numPages),
      comp: inputHeightMm <= a4HeightMm, inputHeightPx: input.offsetHeight
    });

    html2canvas(input, {
    windowWidth: input.scrollWidth,
    windowHeight: input.scrollHeight
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        // Document of a4WidthMm wide and inputHeightMm high
        if (inputHeightMm > a4HeightMm) {
          // elongated a4 (system print dialog will handle page breaks)
          const pdf = new jsPDF('p', 'mm', [inputHeightMm+16, a4WidthMm]);
        } else {
          // standard a4
          const pdf = new jsPDF();
        }

        pdf.addImage(imgData, 'PNG', 0, 0, 200, 300);
        pdf.save(`${id}.pdf`);
      });
    ;
  }}
  >
  save
  </Button>
);
};
