import React from 'react'
import { css } from "@emotion/core";
//import ClipLoader from "react-spinners/ClipLoader";
import BeatLoader from "react-spinners/BeatLoader";
import ImageUploader from 'react-images-upload';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
//import { compose } from 'redux';
//import Images from './Images'

//import { API_URL } from './config'

//import { schoolInfoActions } from '../../redux/schoolinfoactions'

const override = css`
  display: block;
  margin: 2;
  border-color: black;
  color: green
`;

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  cover: {
    width: '500px',
    height: '250px',
  },
}));


function SchoolImageUpload (props){
  const classes = useStyles();

  function content(){
    if (props.isImageUploading){
          return <BeatLoader
             css={override}
             size={15}
             //size={"150px"} this also works
             color={"green"}
             loading={props.isImageUploading}
             />
    }
    else if (props.schoolImage != null && ((!props.isImageHoverIn) || (props.isImageHoverOut))){
      return <Grid item xs={12}  md={6} lg={6}><CardMedia
             className={classes.cover}
             image= {props.schoolImage}
           />
           </Grid>
    }
    else if (props.isImageHoverIn){
      return   <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={props.onImageUpload}
                singleImage={true}
                imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
             />
    
            }
  }

  return <Grid item xs={12}  md={6} lg={6}><div className = {classes.cover} onClick={props.handleMouseIn} onMouseLeave={props.handleMouseOut}>
         {content()}
        </div>
        </Grid>
  }

function mapStateToProps(state){
  const { schoolImage, isImageUpdating, isImageUploading, isImageHoverIn, isImageHoverOut } = state.fetchschoolinfo;
  return {
    schoolImage,
    isImageUpdating,
    isImageUploading,
    isImageHoverIn,
    isImageHoverOut
  }
}

export default connect(mapStateToProps)(SchoolImageUpload);
