import { gigsApi } from '../apis/gigsApi';
import { bandsApi } from '../apis/bandsApi';
import { ACTION_TYPES } from '../constants';

export const fetchGigs = () => (dispatch) => {
  gigsApi
    .fetchAll()
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchBands = () => (dispatch) => {
  bandsApi
    .fetchAll()
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
