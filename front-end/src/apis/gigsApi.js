import axios from 'axios';

const baseUrl = 'https://localhost:44327/api/gigs/';

export const gigsApi = {
  fetchAll: () => axios.get(baseUrl),
  fetchById: (id) => axios.get(baseUrl + id),
  create: (newGig) => axios.post(newGig),
  update: (id, updatedGig) => axios.put(baseUrl + id, updatedGig),
  delete: (id) => axios.delete(baseUrl + id),
};
