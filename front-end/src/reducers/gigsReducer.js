import { ACTION_TYPES } from '../constants';

export const gigsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_GIGS:
      return action.payload;
    default:
      return state;
  }
};
