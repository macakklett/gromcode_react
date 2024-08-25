import { CHANGE_CURRENT_PAGE } from './actionTypes';

export const changeCurrentPage = direction => {
  return {
    type: CHANGE_CURRENT_PAGE,
    payload: direction,
  };
};
