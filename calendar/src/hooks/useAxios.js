import { useCallback } from 'react';
import axios from 'axios';
import { BASE_API_URL } from 'data/baseUrl';

export const useAxios = () => {
  const getEvent = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/event`);
      return response.data.eventElements;
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  }, []);

  const createEvent = async (merged) => {
    try {
      await axios.post(`${BASE_API_URL}/create-event`, merged);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  };

  const getCompanies = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/company`);
      return response.data.companyElements;
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  }, []);
  return {
    getEvent,
    createEvent,
    getCompanies,
  };
};
