
import { schoolInfoConstants } from './ActionTypes';
const school_image = require('../shared/student_logs_group.jpeg');

const initialState = {
    isInfoUpdating: false,
    schoolImage: school_image,
    schoolDescription: null,
    isImageUpdating: false,
    isImageUploading: false,
    isImageHoverIn: false,
    isImageHoverOut: false
};

export function fetchschoolinfo(state = initialState, action) {
  switch (action.type) {
    case schoolInfoConstants.FETCH_PENDING:
      return {
        ...state,
        isInfoUpdating: true,

      };
    case schoolInfoConstants.FETCH_SUCCESS:
      return {
        ...state,
        isInfoUpdating: false,
        schoolDescription: action.data.schoolDescription
      };
    case schoolInfoConstants.FETCH_FAILURE:
      return {
        ...state,
        isInfoUpdating: true,
        error: action.error
      };
      case schoolInfoConstants.IMAGE_FETCH_PENDING:
      return {
        ...state,
        isImageUpdating: true,
      };
      case schoolInfoConstants.IMAGE_FETCH_SUCCESS:
      return {
        ...state,
        isImageUpdating: false,
        schoolImage: action.data.schoolImage
      };
    case schoolInfoConstants.IMAGE_FETCH_FAILURE:
      return {
        ...state,
        isImageUpdating: true,
        error: action.error
      };
   case schoolInfoConstants.IMAGE_UPLOAD_PENDING:
      return {
        ...state,
        isImageUploading: true,
      };
      case schoolInfoConstants.IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        isImageUploading: false,
        lastUploadTime: action.data.lastupdatetime
      };
    case schoolInfoConstants.IMAGE_UPLOAD_FAILURE:
      return {
        ...state,
        isImageUploading: true,
        error: action.error
      };
   case schoolInfoConstants.UPDATE_IMAGE_HOVER_IN:
       return {
         ...state,
         isImageHoverIn: true,
         isImageHoverOut: false

       };
  case schoolInfoConstants.UPDATE_IMAGE_HOVER_OUT:
       return {
         ...state,
         isImageHoverOut: true,
         isImageHoverIn: false
       };
   default:
      return state
  }
}
