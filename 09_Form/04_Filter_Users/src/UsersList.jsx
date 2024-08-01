import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

export class UsersList extends Component {
  state = {
    filterText: '',
  };

  onChange = e => this.setState({ filterText: e.target.value });

  render() {
    const filteredUsersList = this.props.users.filter(user =>
      user.name.toLowerCase().includes(this.state.filterText.toLowerCase()),
    );

    return (
      <>
        <Filter
          filterText={this.state.filterText}
          count={filteredUsersList.length}
          onChange={this.onChange}
        />
        <ul className="users">
          {filteredUsersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </>
    );
  }
}

export default UsersList;
