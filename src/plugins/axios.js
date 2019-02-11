/* jshint esversion: 6 */
import axios from 'axios';

export default ({ Vue }) => {
  axios.defaults.baseURL = 'http://localhost:3000/api';
  Vue.prototype.$axios = axios;
};
