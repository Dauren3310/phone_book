import axios from "axios";

const instance = axios.create({
  baseURL: 'https://training-64b34-default-rtdb.firebaseio.com/'
});

export default instance;