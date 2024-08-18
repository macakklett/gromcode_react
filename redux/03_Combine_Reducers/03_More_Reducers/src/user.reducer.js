import { SET_USER, REMOVE_USER } from './actionsTypes';

const userReducer = (state = null, action) => {
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
