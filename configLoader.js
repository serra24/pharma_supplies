const loadConfig = async () => {
  try {
    const response = await fetch("/config.json"); // Load external config.json
    const config = await response.json();
    return config; // Return config object
  } catch (error) {
    console.error("Failed to load config.json:", error);
    return { baseURL: "http://38.170.230.82:2948" }; // Default fallback
  }
};

export default loadConfig;
