import { ACTION_TYPES } from '../constants';

export const modalReducer = (state = false, action) => {
  switch (action.type) {
    case ACTION_TYPES.OPEN_MODAL:
      return true;
    case ACTION_TYPES.CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};
