import React from 'react';
import { connect } from 'react-redux';
import { filteredUsersListSelector } from './users.selectors';
import User from './User';
import Filter from '../Filter';

const UsersList = ({ filteredUsersList }) => {
  return (
    <div>
      <Filter />
      <ul className="users">
        {filteredUsersList.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    filteredUsersList: filteredUsersListSelector(state),
  };
};

export default connect(mapState)(UsersList);
