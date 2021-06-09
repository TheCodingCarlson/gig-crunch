import axios from 'axios';
import { API_ENDPOINT } from '../constants';

const baseUrl = `${API_ENDPOINT}/bands`;

export const bandsApi = {
  fetchAll: () => axios.get(baseUrl),
  fetchById: (id) => axios.get(baseUrl + id),
  create: (newBand) => axios.post(baseUrl, newBand),
  update: (id, updatedBand) => axios.put(baseUrl + '/' + id, updatedBand),
  delete: (id) => axios.delete(baseUrl + '/' + id),
};
