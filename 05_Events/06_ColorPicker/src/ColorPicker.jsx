import React, { Component } from 'react';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Bisque';
class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }

  onMouseEnterHandler = colorText => {
    this.setState({ color: colorText });
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
            onMouseEnter={() => this.onMouseEnterHandler(CORAL)}
            onMouseLeave={this.onMouseLeaveHandler}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.onMouseEnterHandler(AQUA)}
            onMouseLeave={this.onMouseLeaveHandler}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.onMouseEnterHandler(BISQUE)}
            onMouseLeave={this.onMouseLeaveHandler}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
