import axios from "axios";
// Global config holder
export let appConfig = {};

const axiosInstancePromise = fetch("/config.json")
  .then(res => res.json())
  .then(config => {
    appConfig = config; 
    return axios.create({
      baseURL: config.API_BASE_URL
    });
  })
  .catch(err => {
    console.error("Failed to load config.json:", err);
    appConfig = { CHAIN_ID: 0, ECHANNEL_ID: 0 }; // fallback
    return axios.create({ baseURL: "http://localhost:3000" });
  });

export { axiosInstancePromise };
