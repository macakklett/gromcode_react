import React, { Component } from 'react';

class GoodButton extends Component {
  render() {
    return (
      <div>
        <button className="fancy-button" onClick={() => alert('Good job!')}>
          Click me!
        </button>
      </div>
    );
  }
}

export default GoodButton;
