import React, { Component } from 'react';
import Dialog from './Dialog';

export class App extends Component {
  state = {
    isOpen: false,
  };

  onShow = () => this.setState({ isOpen: true });
  onClose = () => this.setState({ isOpen: false });

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.onShow}>
          Show dialog
        </button>
        <Dialog isOpen={this.state.isOpen} title="Recommendation" onClose={this.onClose}>
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
