/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, nummodules, numtools, numstudents, timespent) {
  return { id, date, nummodules, numtools, numstudents, timespent };
}

const rows = [
  createData(0, '02 Aug, 2019', 3, 0, 3, 312.44),
  createData(1, '03 Aug, 2019', 1, 2, 4, 123.99),
  createData(2, '05 Aug, 2019', 4, 3, 10, 100.81),
  createData(3, '10 Aug, 2019', 2, 1, 11, 344.39),
  createData(4, '15 Aug, 2019', 1, 4, 9, 212.79),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Records</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>nummodules</TableCell>
            <TableCell>numtools</TableCell>
            <TableCell>numstudents</TableCell>
            <TableCell align="right">timespent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.nummodules}</TableCell>
              <TableCell>{row.numtools}</TableCell>
              <TableCell>{row.numstudents}</TableCell>
              <TableCell align="right">{row.timespent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
        </Link>
      </div>
    </React.Fragment>
  );
}
