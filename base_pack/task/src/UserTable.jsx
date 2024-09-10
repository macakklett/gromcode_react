import React, { Component } from 'react';
import Pagination from './Pagination';
import UsersList from './UsersList';

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
        <UsersList list={currentList} />
      </div>
    );
  }
}

export default UserTable;
