import axios from "axios";
import { api } from "../configs";

const config = {
  headers: {
    "Content-Type": "application/json",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJhYmJpIiwidXNlcklkIjoiNjJlZTE5NWZkNjk5YTM3ZjZmYjg2M2QzIiwiaWF0IjoxNjU5NzgyMDcwfQ.IcEp7rxjX2VnBk-y6y0FpuPUXdloPQF6HS7wqp77r2I",
    userId: "62ee195fd699a37f6fb863d3",
  },
};

export const publicGet = async (endpoint) => {
  const response = await axios.get(`${api}${endpoint}`, config);
  return response.data;
};

export const publicPost = async (endpoint, body) => {
  const response = await axios.post(`${api}${endpoint}`, body, config);
  return response.data;
};

export const privateGet = async (endpoint, token) => {
  config.headers.Authorization = `Bearer ${token}`;
  const response = await axios.get(`${api}${endpoint}`, config);
  return response.data;
};

export const privatePost = async (endpoint, token, body) => {
  config.headers.Authorization = `Bearer ${token}`;
  const response = await axios.post(`${api}${endpoint}`, body, config);
  return response.data;
};

export const privatePut = async (endpoint, token, body) => {
  config.headers.Authorization = `Bearer ${token}`;
  const response = await axios.put(`${api}${endpoint}`, body, config);
  return response.data;
};
