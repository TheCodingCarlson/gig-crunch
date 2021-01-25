import { gigsApi } from '../apis/gigsApi';
import { bandsApi } from '../apis/bandsApi';
import { ACTION_TYPES } from '../constants';

const formatData = (data) => ({
  ...data,
  day: parseInt(data.day ? data.day : 0),
  month: parseInt(data.month ? data.month : 0),
  year: parseInt(data.year ? data.year : 0),
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

export const createBand = (data, onSuccess) => (dispatch) => {
  console.log(data);
  bandsApi
    .create(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE_BAND,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const openModal = () => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.OPEN_MODAL,
  });
};

export const closeModal = () => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.CLOSE_MODAL,
  });
};
