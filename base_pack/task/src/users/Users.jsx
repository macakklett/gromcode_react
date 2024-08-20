import React from 'react';
import { connect } from 'react-redux';
import * as actions from './users.actions';

const Users = ({ usersList, addUser, deleteUser }) => {
  const onCreateUser = () => {
    const id = Math.round(Math.random() * 1000000);
    const user = {
      id,
      name: `User # ${id}`,
    };

    addUser(user);
  };

  return (
    <div className="users">
      <button className="users__create-btn" onClick={onCreateUser}>
        Create user
      </button>
      <ul className="users__list">
        {usersList.map(user => (
          <li key={user.id} className="users__list-item">
            <span>{user.name}</span>
            <button className="users__delete-btn" onClick={() => deleteUser(user.id)}>
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    usersList: state.usersList,
  };
};

const mapDispatch = {
  addUser: actions.addUser,
  deleteUser: actions.deleteUser,
};

export default connect(mapState, mapDispatch)(Users);
