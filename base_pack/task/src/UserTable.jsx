import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User';

export class UserTable extends Component {
  itemsPerPage = 3;

  state = {
    currentPage: 1,
  };

  changeCurrentPage = direction =>
    this.setState({ currentPage: this.state.currentPage + direction });

  render() {
    const currentUserIndex = this.itemsPerPage * (this.state.currentPage - 1);
    const currentList = this.props.users.slice(
      currentUserIndex,
      currentUserIndex + this.itemsPerPage,
    );

    return (
      <div>
        <Pagination
          changeCurrentPage={this.changeCurrentPage}
          currentPage={this.state.currentPage}
          totalItems={this.props.users.length}
          itemsPerPage={this.itemsPerPage}
        />
        <ul className="users">
          {currentList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserTable;
