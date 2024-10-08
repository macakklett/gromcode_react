import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  icrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div className="counter">
        <button data-action="decrease" className="counter__button" onClick={() => this.decrement()}>
          -
        </button>
        <span className="counter__value" onClick={() => this.reset()}>
          {this.state.counter}
        </span>
        <button data-action="increase" className="counter__button" onClick={() => this.icrement()}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
