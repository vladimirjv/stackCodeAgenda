/* jshint esversion: 6 */
import axios from 'axios';

export default ({ Vue }) => {
  axios.defaults.baseURL='https://stackcode-vla.herokuapp.com/api';
  // axios.defaults.baseURL = 'http://localhost:3000/api';
  Vue.prototype.$axios = axios;
};
