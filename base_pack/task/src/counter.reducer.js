import { INCREMENT, DECREMENT, RESET } from './actionTypes';

const counterReducer = (state = [], action) => {
  switch (action.type) {
    case INCREMENT:
      return [...state, '+1'];

    case DECREMENT:
      return [...state, '-1'];

    case RESET:
      return [];

    default:
      return state;
  }
};

export default counterReducer;
