import React, { Component } from 'react';

class Dimensions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
    };
  }

  componentDidMount = () => {
    const { innerWidth, innerHeight } = window;

    this.setDimensions(innerWidth, innerHeight);

    window.addEventListener('resize', this.onResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onResize);
  };

  onResize = e => {
    const { innerWidth, innerHeight } = e.target;

    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });

    document.title = `${width}px - ${height}px`;
  };

  render() {
    return (
      <div className="dimensions">
        {this.state.width}px - {this.state.height}px
      </div>
    );
  }
}

export default Dimensions;
