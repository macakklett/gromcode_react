import React, { Component } from 'react';
import User from './User';

export class UsersList extends Component {
  state = {
    sortingType: null,
  };

  onSetSorting = () =>
    this.setState({ sortingType: this.state.sortingType === 'asc' ? 'desc' : 'asc' });

  render() {
    const sortedList = this.state.sortingType
      ? this.props.users
          .slice()
          .sort((a, b) => (this.state.sortingType === 'asc' ? a.age - b.age : b.age - a.age))
      : this.props.users;

    return (
      <div>
        <button className="btn" onClick={this.onSetSorting}>
          {this.state.sortingType || '-'}
        </button>
        <ul className="users">
          {sortedList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
