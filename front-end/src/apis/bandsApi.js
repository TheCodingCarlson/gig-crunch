import axios from 'axios';

const baseUrl = 'https://localhost:44327/api/bands';

export const bandsApi = {
  fetchAll: () => axios.get(baseUrl),
  fetchById: (id) => axios.get(baseUrl + id),
  create: (newBand) => axios.post(baseUrl, newBand),
  update: (id, updatedBand) => axios.put(baseUrl + '/' + id, updatedBand),
  delete: (id) => axios.delete(baseUrl + '/' + id),
};
