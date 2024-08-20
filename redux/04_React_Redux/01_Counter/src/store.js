import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';
const RESET = 'RESET/DECREMENT';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
};

export const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
