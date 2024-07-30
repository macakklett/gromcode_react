import React, { Component } from 'react';

export class Life extends Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state');
  }

  componentDidMount = () => {
    console.log('componentDidMount: API calls, subscriptions');
  };

  render() {
    console.log('return React element to build DOM');
    return <div>Life</div>;
  }
}

export default Life;
