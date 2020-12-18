import { ACTION_TYPES } from '../constants';

const initialState = {
  bands: [],
};

export const bandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        bands: [...action.payload],
      };
    default:
      return state;
  }
};
