import { ADD_USER, DELETE_USER, UPDATE_USER } from './actionTypes';

export const addUser = user => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const updateUser = (user, userId) => {
  return {
    type: ADD_USER,
    payload: {
      user,
      userId,
    },
  };
};

export const deleteUser = userId => {
  return {
    type: DELETE_USER,
    payload: userId,
  };
};
