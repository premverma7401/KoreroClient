import axios from 'axios';
import { toast } from 'react-toastify';
import { history } from '..';

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(undefined, (error) => {
  // check network error object
  if (error.message === 'Network Error' && !error.response) {
    toast.error('Network Error, Check API Server'); //RT
  }
  const { status } = error.response;
  // check if status 404
  if (status === 404) {
    history.push('/notfound');
  }
  // check if 500 internal server
  if (status === 500) {
    toast.error('Server Error'); //RT
  }
});

const responseBody = (response) => response.data;

const sleep = (ms) => (response) =>
  new Promise((resolve) => setTimeout(() => resolve(response), ms));

const request = {
  get: (url) => axios.get(url).then(sleep(500)).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
};

const Projects = {
  list: () => request.get('/Project/GetAllProjects'),
  details: (id) => request.post(`/Project/GetProjectInfo/${id}`),
  create: (project) => request.post('/Project/CreateProject', project),
  update: (projectName, id) =>
    request.post(`/Project/UpdateProject?projectName=${projectName}&Id=${id}`),
  delete: (id) => request.post(`/Project/DeleteProject/${id}`),
};

export default { Projects };
