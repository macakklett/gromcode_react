import { ADD_USER, DELETE_USER, UPDATE_USER } from './actionTypes';

export const addUser = user => {
  return {
    type: ADD_USER,
    payload: { user },
  };
};

export const updateUser = (userId, user) => {
  return {
    type: UPDATE_USER,
    payload: {
      user,
      userId,
    },
  };
};

export const deleteUser = userId => {
  return {
    type: DELETE_USER,
    payload: { userId },
  };
};
