import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

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
