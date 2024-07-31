import React, { Component } from 'react';

export class Search extends Component {
  state = {
    inputValue: '',
  };

  changeHandler = e => {
    this.setState({ inputValue: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    alert(`Search text: ${this.state.inputValue}`);
  };

  render() {
    return (
      <form className="search" onSubmit={this.submitHandler}>
        <input
          type="text"
          className="search__input"
          value={this.state.inputValue}
          onChange={this.changeHandler}
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
