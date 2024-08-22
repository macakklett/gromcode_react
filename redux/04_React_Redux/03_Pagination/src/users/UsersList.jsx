import React from 'react';
import { connect } from 'react-redux';
import * as actions from './users.actions';
import Pagination from './Pagination';
import User from './User';

const UsersList = ({ usersList, currentPage, changeCurrentPage }) => {
  const totalItems = usersList.length;
  const itemsPerPage = 3;

  const goPrev = () => changeCurrentPage(-1);
  const goNext = () => changeCurrentPage(1);

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersList.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    usersList: state.users.usersList,
    currentPage: state.users.currentPage,
  };
};

const mapDispatch = {
  changeCurrentPage: actions.changeCurrentPage,
};

export default connect(mapState, mapDispatch)(UsersList);
