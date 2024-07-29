import React, { Component } from 'react';
import User from './User';
import Pagination from './Pagination';

export class UsersList extends Component {
  state = {
    currentPage: 1,
    itemsPerPage: 3,
  };

  goPrev = () => this.setState({ currentPage: this.state.currentPage - 1 });
  goNext = () => this.setState({ currentPage: this.state.currentPage + 1 });

  render() {
    const currentUserIndex = this.state.itemsPerPage * (this.state.currentPage - 1);
    const currentList =
      this.state.currentPage === 1
        ? this.props.users.slice(0, this.state.itemsPerPage)
        : this.props.users.slice(currentUserIndex, currentUserIndex + this.state.itemsPerPage);

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.currentPage}
          totalItems={this.props.users.length}
          itemsPerPage={this.state.itemsPerPage}
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

export default UsersList;
