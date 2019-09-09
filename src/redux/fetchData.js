
import { dataConstants } from './ActionTypes';

const initialState = {
    isPending: true,
    data_attendance: [],
    data_serverup: [],
    data_tools: [],
    data_modules: [],
    error: null
};

export function fetchdata(state = initialState, action) {
  switch (action.type) {
    case dataConstants.FETCH_PENDING:
      return {
        ...state,
        isPending: true,
        user: action.user
      };
    case dataConstants.FETCH_SUCCESS:
      return {
        ...state,
        isPending: false,
        data_attendance: action.data.data_attendance,
        data_serverup: action.data.data_serverup,
        data_tools: action.data.data_tools_attendance,
        data_modules: action.data.data_modules_attendance,
        username: action.data.username
      };
    case dataConstants.FETCH_FAILURE:
      return {
        ...state,
        isPending: true,
        error: action.error
      };
    default:
      return state
  }
}
