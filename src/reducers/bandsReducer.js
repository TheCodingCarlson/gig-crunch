import { ACTION_TYPES } from '../constants';

export const bandsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_BANDS:
      return action.payload;

    case ACTION_TYPES.CREATE_BAND:
      return [...state, action.payload];

    case ACTION_TYPES.UPDATE_BAND:
      console.log('update band');
      const updatedBands = state.map((band) => {
        return band._id === action.payload.id ? action.payload : band;
      });

      return updatedBands;

    case ACTION_TYPES.DELETE_BAND:
      const updatedBandList = state.filter(
        (band) => band._id !== action.payload
      );
      return updatedBandList;

    default:
      return state;
  }
};
