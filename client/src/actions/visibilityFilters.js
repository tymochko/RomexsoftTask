import { TOGGLE_VISIBILITY } from '../reducers/helpers/actionTypesNames';

export const toggleVisibilityAction = (visibilityFilter) => {
  return {
    type: TOGGLE_VISIBILITY,
    visibilityFilter
  };
};
