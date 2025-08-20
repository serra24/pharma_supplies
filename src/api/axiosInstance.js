import axios from "axios";
import loadConfig from "../../configLoader";

const axiosInstance = async () => {
  const config = await loadConfig();
  
  return axios.create({
    baseURL: config.baseURL || "http://38.170.230.82:2948", // Use config.json or fallback
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  });
};

export default axiosInstance;


// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "/api", 
// });

// export default axiosInstance;
