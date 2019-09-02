
import { dataConstants } from './ActionTypes';

const initialState = {
    isPending: true,
    data: [],
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
        data: action.data.data,
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
