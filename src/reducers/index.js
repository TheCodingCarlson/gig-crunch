import { combineReducers } from 'redux';
import { gigsReducer } from './gigsReducer';
import { bandsReducer } from './bandsReducer';
import { modalReducer } from './modalReducer';

export const reducers = combineReducers({
  gigs: gigsReducer,
  bands: bandsReducer,
  isModalOpen: modalReducer,
});
