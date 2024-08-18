import { ADD_PRODUCT, REMOVE_PRODUCT } from './actionsTypes';

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.product],
      };

    case REMOVE_PRODUCT:
      return {
        ...state,
        products: [...state.products.filter(product => product.id !== action.payload.productId)],
      };

    default:
      return state;
  }
};

export default cartReducer;
