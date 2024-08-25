import { createStore, applyMiddleware, compose } from 'redux';
import counterReducer from './counter.reducer';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action); // action
  let result = next(action);
  console.log('next state', store.getState()); // 'new state'
  console.groupEnd();
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(counterReducer, composeEnhancers(applyMiddleware(logger)));
