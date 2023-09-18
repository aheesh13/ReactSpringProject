import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9002', // Your backend URL
  withCredentials: true,
});

const createSlot = async (slotData) => {
  const response = await axios.post('http://localhost:9002/slots', slotData);
  return response.data;
};

const getAllSlots = async () => {
  const response = await axios.get('http://localhost:9002/slots');
  return response.data;
};

const updateSlot = async (id, updatedSlotData) => {
  const response = await instance.put(`/slots/${id}`, updatedSlotData);
  return response.data;
};

const deleteSlot = async (id) => {
  const response = await axios.delete(`http://localhost:9002/slots/${id}`);
  return response.data;
};

const slotService = {
  createSlot,
  getAllSlots,
  updateSlot,
  deleteSlot,
};

export default slotService;
