import React, { Component } from 'react';
import Spinner from './Spinner';

export const withDataLoader = url => WrappedComponent => {
  return class withDataLoader extends Component {
    state = {
      data: null,
      isLoading: true,
      error: null,
    };

    componentDidMount = () => {
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ data, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    };

    render() {
      const { data, isLoading, error } = this.state;

      if (isLoading) return <Spinner />;
      if (error) return <div>Error: {error.message}</div>;

      return <WrappedComponent data={data} />;
    }
  };
};
