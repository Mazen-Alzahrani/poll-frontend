import axios from "axios";

const API = "https://2u8da14pbk.execute-api.us-east-1.amazonaws.com";

export const createPoll = (data) =>
  axios.post(`${API}/poll`, data);

export const getPoll = (id) =>
  axios.get(`${API}/poll/${id}`);

export const votePoll = (id, optionId) =>
  axios.post(`${API}/poll/${id}/vote`, { optionId });

export const getResults = (id) =>
  axios.get(`${API}/poll/${id}/results`);

export const getLink = (id) =>
  axios.get(`${API}/poll/${id}/link`);

export const sendResults = (id) =>
  axios.post(`${API}/poll/${id}/send`);