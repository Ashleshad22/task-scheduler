import axios from "axios";

const API_URL = "/api/tasks/";

const getTasks = () => axios.get(API_URL);
const getTask = (id) => axios.get(API_URL + id);
const createTask = (task) => axios.post(API_URL, task);
const updateTask = (id, task) => axios.put(API_URL + id, task);
const deleteTask = (id) => axios.delete(API_URL + id);

export default {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
