import { ACTION_TYPES } from '../constants';

export const gigsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_GIGS:
      return action.payload;

    case ACTION_TYPES.CREATE_GIG:
      return [...state, action.payload];

    case ACTION_TYPES.UPDATE_GIG:
      const updatedGigs = state.map((gig) => {
        return gig._id === action.payload.id ? action.payload : gig;
      });

      return updatedGigs;

    case ACTION_TYPES.DELETE_GIG:
      const updatedGigList = state.filter((gig) => gig._id !== action.payload);
      return updatedGigList;

    default:
      return state;
  }
};
