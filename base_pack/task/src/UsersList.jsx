import React from 'react';
import User from './User';

const UsersList = ({ list }) => {
  return (
    <ul className="users">
      {list.map(user => (
        <User key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UsersList;
