import { SET_USER, REMOVE_USER } from './actionsTypes';

export const setUser = user => {
  return {
    type: SET_USER,
    payload: {
      user,
    },
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
