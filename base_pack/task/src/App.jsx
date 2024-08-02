import React, { Component } from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount = () => {
    this.fetchDataUser(this.props.userId);
  };

  fetchDataUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          user: data,
        }),
      );
  };

  render() {
    if (!this.state.user) {
      return null;
    }

    const { user } = this.state;

    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={user} />
        </header>
        <UserProfile userData={user} />
      </div>
    );
  }
}

export default App;
