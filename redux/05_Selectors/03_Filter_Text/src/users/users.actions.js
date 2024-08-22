export const CHANGE_FILTER_INPUT = 'CHANGE_FILTER_INPUT';

export const changeFilterText = value => ({
  type: CHANGE_FILTER_INPUT,
  payload: { value },
});
