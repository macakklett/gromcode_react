import { TOGGLE_OPTIONS } from './options.actions';
import { optionsBaseState } from './optionsBaseState';

const initialState = {
  optionsList: optionsBaseState,
  selected: [],
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPTIONS:
      const { optionId } = action.payload;
      const { selected } = state;

      const newSelectedIds = selected.includes(optionId)
        ? selected.filter(id => id !== optionId)
        : [...selected, optionId];

      return {
        ...state,
        selected: newSelectedIds,
      };

    default:
      return state;
  }
};

export default optionsReducer;
