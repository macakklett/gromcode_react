import { ADD_USER, DELETE_USER, UPDATE_USER } from './actionTypes';

const initialState = {
  usersList: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, usersList: [...state.usersList, action.payload] };

    case UPDATE_USER:
      return {
        ...state,
        usersList: [
          ...state.usersList.map(user => {
            if (user.id === action.payload.userId) {
              return {
                ...user,
                ...action.payload.user,
              };
            }
          }),
        ],
      };

    case DELETE_USER:
      return {
        ...state,
        usersList: [...state.usersList.filter(user => user.id !== action.payload)],
      };

    default:
      return state;
  }
};

export default usersReducer;
