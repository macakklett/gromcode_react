import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export class FilterableProductTable extends Component {
  state = {
    filterText: '',
    inStockOnly: false,
  };

  handleFilterTextChange = filterText => {
    this.setState({ filterText });
  };

  handleInStockChange = inStockOnly => {
    this.setState({ inStockOnly });
  };

  render() {
    const { filterText, inStockOnly } = this.state;

    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
