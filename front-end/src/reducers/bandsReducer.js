import { ACTION_TYPES } from '../constants';

export const bandsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_BANDS:
      return action.payload;
    default:
      return state;
  }
};
