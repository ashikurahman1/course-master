import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace with your API base URL
});

const useAxios = () => {
  return axiosInstance;
};
export default useAxios;
