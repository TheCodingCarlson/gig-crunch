import axios from 'axios';
import { API_ENDPOINT } from '../constants';

const baseUrl = `${API_ENDPOINT}/gigs`;

export const gigsApi = {
  fetchAll: () => axios.get(baseUrl),
  fetchById: (id) => axios.get(baseUrl + id),
  create: (newGig) => axios.post(baseUrl, newGig),
  update: (id, updatedGig) => axios.put(baseUrl + '/' + id, updatedGig),
  delete: (id) => axios.delete(baseUrl + '/' + id),
};
