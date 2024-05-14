import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://18.158.24.26:8080/v1",
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default axiosClient;
