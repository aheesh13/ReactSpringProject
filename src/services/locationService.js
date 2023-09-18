import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9002', // Your backend URL
  withCredentials: true,
});

const locationService = {
  getAllLocations: async () => {
    try {
      const response = await axios.get('http://localhost:9002/locations');
      return response.data;
    } catch (error) {
      console.error('Error fetching locations:', error);
      throw error;
    }
  },
};

export default locationService;
