import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from './users.actions';

const SearchField = ({ fetchUserData }) => {
  const [inputValue, setInputValue] = useState('');

  const handleUserSearch = () => {
    fetchUserData(inputValue);
    setInputValue('');
  };

  return (
    <div className="name-form">
      <input
        type="text"
        className="name-form__input"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button className="name-form__btn btn" onClick={handleUserSearch}>
        Show
      </button>
    </div>
  );
};

const mapDispatch = {
  fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);
