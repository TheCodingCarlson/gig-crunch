import { ACTION_TYPES } from '../constants';

const initialState = {
  gigs: [],
};

export const gigsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        gigs: [...action.payload],
      };
    default:
      return state;
  }
};
