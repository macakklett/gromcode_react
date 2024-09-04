import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// REACT APPROACH (!!!)
// 1. Divide the UI into components +++
// header, footer, main (text, table (row), navigation)
// 2. Build static version in React +++
// 3. Think about props, state (where, which) +++
// 4. Write logic in JS/TS (80% JS, 20% JS)

export class Auth extends Component {
  state = {
    isLoggedIn: false,
    size: 0,
  };

  onLogin = () => {
    this.setState({ size: 50 });
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        size: 0,
      });
    }, 2000);
  };
  onLogout = () => this.setState({ isLoggedIn: false });

  render() {
    return this.state.isLoggedIn ? (
      <Logout onLogout={this.onLogout} />
    ) : (
      <>
        {this.state.size > 0 ? (
          <Spinner size={this.state.size} />
        ) : (
          <Login onLogin={this.onLogin} />
        )}
      </>
    );
  }
}

export default Auth;
