import React, { Component } from 'react';
import Clock from './Clock.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
    };
  }

  render() {
    return (
      <>
        <div>
          <button onClick={() => this.setState({ isToggle: !this.state.isToggle })}>Toggle</button>
        </div>
        {this.state.isToggle && (
          <>
            <Clock location="London" offset={0} />
            <Clock location="Kiev" offset={2} />
            <Clock location="New York" offset={5} />
          </>
        )}
      </>
    );
  }
}

export default App;
