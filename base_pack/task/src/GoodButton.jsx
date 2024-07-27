import React, { Component } from 'react';

class GoodButton extends Component {
  onClickHandler = text => {
    alert(text);
  };
  render() {
    return (
      <div>
        <button className="fancy-button" onClick={e => this.onClickHandler(e.target.textContent)}>
          Click me!
        </button>
      </div>
    );
  }
}

export default GoodButton;
