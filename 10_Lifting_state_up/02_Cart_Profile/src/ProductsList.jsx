import React from 'react';

const ProductsList = ({ cartItems }) => {
  const total = cartItems.reduce((acc, el) => acc + el.price, 0);

  return (
    <div className="products">
      <ul className="products__list">
        {cartItems.map(({ id, name, price }) => {
          return (
            <li key={id} className="products__list-item">
              <span className="products__item-name">{name}</span>
              <span className="products__item-price">${price}</span>
            </li>
          );
        })}
      </ul>
      <div className="products__total">Total: ${total}</div>
    </div>
  );
};

export default ProductsList;
