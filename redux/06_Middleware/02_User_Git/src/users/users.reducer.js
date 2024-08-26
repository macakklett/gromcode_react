import { SET_USER, SHOW_SPINNER } from './actionTypes';

const initialState = {
  userData: null,
  isFetching: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userData: action.payload.user,
        isFetching: false,
      };

    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true,
      };

    default:
      return state;
  }
};

export default userReducer;
