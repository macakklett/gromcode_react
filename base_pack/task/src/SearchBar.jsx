import React from 'react';

const SearchBar = () => {
  handleFilterTextChange = e => {
    this.props.onFilterTextChange(e.target.value);
  };

  handleInStockChange = e => {
    this.props.onInStockChange(e.target.checked);
  };

  const { filterText, inStockOnly } = this.props;

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={this.handleFilterTextChange}
      />
      <p>
        <input type="checkbox" checked={inStockOnly} onChange={this.handleInStockChange} /> Only
        show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
