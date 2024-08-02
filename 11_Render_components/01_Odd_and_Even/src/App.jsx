import React, { Component } from 'react';
import Numbers from './Numbers';
import OddNumbers from './OddNumbers';
import EvenNumbers from './EvenNumbers';

export class App extends Component {
  state = {
    number: 0,
  };

  componentDidMount = () => {
    this.intervalId = setInterval(() => this.setState({ number: this.state.number + 1 }), 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };

  render() {
    const { number } = this.state;

    return (
      <div className="app">
        <OddNumbers number={number} />
        <EvenNumbers number={number} />
        <Numbers title="All numbers" number={number} />
        <Numbers title="Just 17" number={17} />
      </div>
    );
  }
}

export default App;
