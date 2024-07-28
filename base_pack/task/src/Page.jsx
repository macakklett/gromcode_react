import React, { Component } from 'react';
import Info from './Info';
const text1 = 'Price is 500$. Available in 2 colors';
const text2 = 'Price is 650$. Not available';

class Page extends Component {
  state = {
    text: null,
  };

  onClickHandler = text => this.setState({ text });

  render() {
    return (
      <div className="page">
        <Info info={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={() => this.onClickHandler(text1)}>
            IPhone 13
          </button>
          <button className="btn" onClick={() => this.onClickHandler(text2)}>
            IPhone 13 Pro
          </button>
          <button className="btn" onClick={() => this.onClickHandler(null)}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
