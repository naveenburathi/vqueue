import axios from "axios";

// const ENDPOINT = "https://vq-backend.onrender.com";
const ENDPOINT = "https://vq-backend.onrender.com";

const accessToken = localStorage.getItem("accessToken");

const Axios = axios.create({
  baseURL: ENDPOINT,
  // withCredentials: true,
  headers: {
    // "Access-Controll-Allow-origin": "*",
    // "Access-Control-Allow-Headers": "X-Requested-With,content-type",
    // "Access-Control-Allow-Credentials": true,
    Authorization: `Bearer ${accessToken}`
  }
});

export default Axios;
