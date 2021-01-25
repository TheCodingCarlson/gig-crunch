import { ACTION_TYPES } from '../constants';

export const bandsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_BANDS:
      return action.payload;

    case ACTION_TYPES.CREATE_BAND:
      console.log('band created', action.payload);
      return [...state, action.payload];

    default:
      return state;
  }
};
