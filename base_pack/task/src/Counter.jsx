import React from 'react';
import { connect } from 'react-redux';
import * as actions from './store';

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>
        -
      </button>
      <span className="counter__value"> {counter} </span>
      <button className="counter__button" onClick={increment}>
        +
      </button>
    </div>
  );
};

const mapState = state => {
  return {
    counter: state,
  };
};

const mapDispatch = {
  increment: actions.increment,
  decrement: actions.decrement,
};

export default connect(mapState, mapDispatch)(Counter);
