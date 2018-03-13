import React from 'react';
import SearchBar from '../SearchBarWithRedux';
import ProductTable from './ProductTable';

const FilterableProductTable = ({ products }) => {
  const style = {
    width: '70%',
    float: 'left'
  }

  return (
    <div style={style}>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default FilterableProductTable;