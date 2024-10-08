import { ADD_USER, DELETE_USER } from './actionTypes';

const initialState = {
  usersList: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, usersList: [...state.usersList, action.payload] };

    case DELETE_USER:
      return {
        ...state,
        usersList: [...state.usersList.filter(user => user.id !== action.payload)],
      };

    default:
      return state;
  }
};
