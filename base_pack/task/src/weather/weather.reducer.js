import { SHOW_CITIES } from './actionTypes';

const initialState = {
  citiesList: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CITIES:
      return {
        ...state,
        citiesList: action.payload.cities,
      };

    default:
      return state;
  }
};

export default weatherReducer;
