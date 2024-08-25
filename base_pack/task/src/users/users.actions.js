import { SET_USER, SHOW_SPINNER } from './actionTypes';
import { getUser } from './users.gateway';

export const setUser = user => {
  return {
    type: SET_USER,
    payload: { user },
  };
};

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const fetchUserData = inputValue => dispatch => {
  dispatch(showSpinner());
  getUser(inputValue).then(user => dispatch(setUser(user)));
};
