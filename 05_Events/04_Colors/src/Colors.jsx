import React, { Component } from 'react';
const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  setBodyBackgroundColor = color => (document.body.style.backgroundColor = color);

  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          style={{ backgroundColor: RED }}
          onClick={() => this.setBodyBackgroundColor(RED)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: GREEN }}
          onClick={() => this.setBodyBackgroundColor(GREEN)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: BLUE }}
          onClick={() => this.setBodyBackgroundColor(BLUE)}
        ></button>
      </div>
    );
  }
}

export default Colors;
