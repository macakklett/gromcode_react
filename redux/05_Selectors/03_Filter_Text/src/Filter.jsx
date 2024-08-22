import React from 'react';
import { connect } from 'react-redux';
import { filterTextSelector, filteredUsersListSelector } from './users/users.selectors.js';
import { changeFilterText } from './users/users.actions';

const Filter = ({ count, filterText, onChange }) => {
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input
        type="text"
        className="filter__input"
        value={filterText}
        onChange={e => onChange(e.target.value.trim())}
      />
    </div>
  );
};

const mapState = state => {
  return {
    count: filteredUsersListSelector(state).length,
    filterText: filterTextSelector(state),
  };
};

const mapDispatch = {
  onChange: changeFilterText,
};

export default connect(mapState, mapDispatch)(Filter);
