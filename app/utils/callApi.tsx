import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const BASE_URL = "http://localhost:3000";

const fetchApi = async (endpoint: any) => {
  const response = await axios.get(`${BASE_URL}/${endpoint}`);
  return response.data;
};
const fetchDeleteApi = async (endpoint: any, id: number) => {
  await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
};
const fetchPostApi = async (endpoint: any, data: any) => {
  const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
  return response.data;
};
const updateApi = async (endpoint: any, id: number, data: any) => {
  const response = await axios.put(`${BASE_URL}/${endpoint}/${id}`, data);
  return response.data;
};

export { fetchApi, fetchDeleteApi, fetchPostApi, updateApi };
