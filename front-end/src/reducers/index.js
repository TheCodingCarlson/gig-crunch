import { combineReducers } from 'redux';
import { gigsReducer } from './gigsReducer';
import { bandsReducer } from './bandsReducer';

export const reducers = combineReducers({
  gigsReducer,
  bandsReducer,
});
