import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Iframe from 'react-iframe';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fullWidth: true,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const SchoolSearch = (props) => {
  const classes = useStyles();
  return (
    <>
    <form className={classes.container} noValidate autoComplete="off">
     <TextField
      id="outlined-full-width"
      label="school"
      style={{ margin: 8 }}
      placeholder="Search School"
      helperText="Search for School with name or school_id"
      fullWidth
      margin="normal"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      onSubmit={props.onSearch}
     />
    </form>
    <Iframe url={props.school_url}
    width="1100px"
    height="600px"
    id="myId"
    className="myClassname"
    display="initial"
    position="relative"
    >
    </Iframe>
    </>
  );
};

export default SchoolSearch;
