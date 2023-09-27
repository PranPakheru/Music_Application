import axios from "axios";

const instance = axios.create({
  baseURL: "http://www.last.fm",
  headers: {
    Accept: "application/json",
  },
});

export default instance;
