import React, { Component } from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

export class App extends Component {
  state = {
    userData: null,
  };

  componentDidMount = () => {
    this.fetchDataUser(this.props.userId);
  };

  fetchDataUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          userData: data,
        }),
      );
  };

  render() {
    if (!this.state.userData) {
      return null;
    }

    const { userData } = this.state;

    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={userData} />
        </header>
        <UserProfile userData={userData} />
      </div>
    );
  }
}

export default App;
