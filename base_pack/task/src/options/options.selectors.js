import { createSelector } from 'reselect';

export const allOptionsSelector = state => {
  return state.optionsList;
};

export const selectedIdsSelector = state => {
  return state.selected;
};

export const availableOptionsSelector = createSelector(
  [allOptionsSelector, selectedIdsSelector],
  (allOptions, selectedIds) => {
    return allOptions.filter(option => !selectedIds.includes(option.id));
  },
);

export const selectedOptionsSelector = createSelector(
  [allOptionsSelector, selectedIdsSelector],
  (allOptions, selectedIds) => {
    return allOptions.filter(option => selectedIds.includes(option.id));
  },
);
