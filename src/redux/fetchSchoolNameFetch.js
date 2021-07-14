
import { schoolInfoConstants } from './ActionTypes';

const initialState = {
    loading: false,
    districts: [],
    school_data: [],
    state_code: '',  
    id: 1,
    _id: 1,

    data: []

};

export function fetchschoolnamefetch(state = initialState, action) {
  switch (action.type) {
    case schoolInfoConstants.FETCH_PENDING:
      return {
        ...state,
        loading: true,

      };
    case schoolInfoConstants.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        school_data: action.data,
        districts: action.data.dist_data,
        _id: action.data._id,
        id: action.data.id

      };
    case schoolInfoConstants.FETCH_FAILURE:
      return {
        ...state,
        loading: true,
        error: action.error
      };
   
   
   default:
      return state
  }
}
