import { gigsApi } from '../apis/gigsApi';
import { bandsApi } from '../apis/bandsApi';
import { ACTION_TYPES } from '../constants';

const formatData = (data) => ({
  ...data,
  pay: parseInt(data.pay ? data.pay : 0),
});

export const fetchGigs = () => (dispatch) => {
  gigsApi
    .fetchAll()
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_GIGS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const createGig = (data, onSuccess) => (dispatch) => {
  const formattedData = formatData(data);

  gigsApi
    .create(formattedData)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE_GIG,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const updateGig = (id, data, onSuccess) => (dispatch) => {
  const formattedData = formatData(data);

  gigsApi
    .update(id, formattedData)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.UPDATE_GIG,
        payload: {
          id,
          ...formattedData,
        },
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const deleteGig = (id, onSuccess) => (dispatch) => {
  gigsApi
    .delete(id)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.DELETE_GIG,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const fetchBands = () => (dispatch) => {
  bandsApi
    .fetchAll()
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_BANDS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
