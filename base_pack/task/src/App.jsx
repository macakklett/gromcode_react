import React, { Component } from 'react';
import Expand from './Expand';

export class App extends Component {
  state = {
    isOpen: false,
  };

  onToggleText = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <div className="app">
        <Expand title="Hooks" isOpen={this.state.isOpen} onToggleText={this.onToggleText}>
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
