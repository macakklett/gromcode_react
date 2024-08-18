import { SET_LANGUAGE } from './actionsTypes';

export const setLanguage = language => {
  return {
    type: SET_LANGUAGE,
    payload: {
      language,
    },
  };
};
