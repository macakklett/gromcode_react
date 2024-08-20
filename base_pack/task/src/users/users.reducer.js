import { CHANGE_CURRENT_PAGE } from './actionTypes';
import { users as usersFromLocalStore } from './users';

const initialState = {
  users: {
    usersList: usersFromLocalStore,
    currentPage: 0,
  },
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        users: {
          ...state.users,
          currentPage: state.users.currentPage + action.payload,
        },
      };

    default:
      return state;
  }
};
