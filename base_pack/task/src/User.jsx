import React, { Component } from 'react';

export class User extends Component {
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
    const { user } = this.state;

    return (
      user && (
        <div className="user">
          <img src={user.avatar_url} className="user__avatar" alt="User Avatar"></img>
          <div className="user__info">
            <span className="user__name">{user.name}</span>
            <span className="user__location">{user.location}</span>
          </div>
        </div>
      )
    );
  }
}

export default User;
