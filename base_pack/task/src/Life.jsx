import React, { Component } from 'react';

export class Life extends Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state');
  }

  componentDidMount = () => {
    console.log('componentDidMount: API calls, subscriptions');
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('decide to render or not to render');
    return true;
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log('some updates based on new props');
  };

  componentWillUnmount = () => {
    console.log('cleanup before DOM related to component will be removed');
  };

  render() {
    console.log('return React element to build DOM');
    return <div>Life</div>;
  }
}

export default Life;
