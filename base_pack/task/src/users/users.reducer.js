import { CHANGE_FILTER_INPUT } from './users.actions';
import { users as usersFromLocalStore } from './users';

const initialState = {
  users: {
    filterText: '',
    usersList: usersFromLocalStore,
  },
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER_INPUT:
      return {
        ...state,
        users: {
          ...state.users,
          filterText: action.payload.value,
        },
      };

    default:
      return state;
  }
};
