import { TOGGLE_VISIBILITY } from './helpers/actionTypesNames';

const visibilityInitialState = 'display-grid';

const visibilityReducer = (state = visibilityInitialState, action) => {
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      return action.visibilityFilter;
    default:
      return state;
  }
};

export default visibilityReducer;
