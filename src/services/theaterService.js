import axios from 'axios';

const baseUrl = '/api/theaters'; // Adjust the URL according to your API setup

const createTheater = async (theaterData) => {
  const response = await axios.post('http://localhost:9002/theaters',theaterData);
  return response.data;
};

const getAllTheaters = async () => {
  const response = await axios.get('http://localhost:9002/theaters');
  return response.data;
};

const updateTheater = async (id, updatedTheaterData) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedTheaterData);
  return response.data;
};

const deleteTheater = async (id) => {
    const response = await axios.delete(`http://localhost:9002/theaters/${id}`);
  return response.data;
};

const theaterService = {
  createTheater,
  getAllTheaters,
  updateTheater,
  deleteTheater,
};

export default theaterService;
