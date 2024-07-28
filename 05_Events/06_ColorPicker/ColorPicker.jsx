import React, { Component } from 'react';
const colorsArr = [
  { rgb: 'rgb(255, 127, 80)', colorText: 'Coral' },
  { rgb: 'rgb(0, 255, 255)', colorText: 'Aqua' },
  { rgb: 'rgb(255, 228, 196)', colorText: 'Bisque' },
];

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }

  onMouseEnterHandler = e => {
    const colorEl = colorsArr.find(
      el => el.rgb === window.getComputedStyle(e.target).backgroundColor,
    );
    this.setState({ color: colorEl.colorText });
  };

  onMouseLeaveHandler = e => {
    this.setState({ color: '' });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
