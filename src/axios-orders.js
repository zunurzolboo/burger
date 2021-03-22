import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-d2771-default-rtdb.firebaseio.com/",
});

export default instance;
