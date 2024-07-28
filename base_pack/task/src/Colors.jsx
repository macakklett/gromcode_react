import React, { Component } from 'react';

class Counter extends Component {
  setBodyBackgroundColor = color => (document.body.style.backgroundColor = color);

  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          style={{ backgroundColor: '#f00' }}
          onClick={e => this.setBodyBackgroundColor(e.target.style.backgroundColor)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: '#0f0' }}
          onClick={e => this.setBodyBackgroundColor(e.target.style.backgroundColor)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: '#00f' }}
          onClick={e => this.setBodyBackgroundColor(e.target.style.backgroundColor)}
        ></button>
      </div>
    );
  }
}

export default Counter;
