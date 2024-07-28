import React, { Component } from 'react';
const ON = 'On';
const OFF = 'Off';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggler: OFF,
    };
  }

  onToggler = () => {
    this.setState({ toggler: this.state.toggler === OFF ? ON : OFF });
  };

  render() {
    return (
      <div className="toggler" onClick={this.onToggler}>
        {this.state.toggler}
      </div>
    );
  }
}

export default Toggler;
