import { SET_USER, REMOVE_USER } from './actionsTypes';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload.user;

    case REMOVE_USER:
      return null;

    default:
      return state;
  }
};

export default userReducer;
