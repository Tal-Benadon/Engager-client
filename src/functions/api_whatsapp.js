import axios from "axios";
const isProduction = import.meta.env.VITE_PRODUCTION
  , urlProd = import.meta.env.VITE_URL_WHATSUP_PRODUCTION,
  urlDev = import.meta.env.VITE_URL_WHATSUP_DEV;

const mainApi = async (method, path, data, headers) => {
  try {
    let finalPath = path.startsWith("/") ? path.slice(1) : path;
    let auth = localStorage.token ? { Authorization: "Bearer " + localStorage.token } : {};

    let baseUrl = isProduction === "true" ? urlProd : urlDev;

    const url = `${baseUrl}${finalPath}`;

    const response = await axios({
      method,
      url,
      data,
      headers: { ...headers, ...auth },
    });

    console.log("API-WhatsApp Microservice\nResponse:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error API-WhatsApp Microservice:", error.message);
    throw error;
  }
};

const get = async (path, headers) => await mainApi("GET", path, headers);

const post = async (path, data = {}, headers) => await mainApi("POST", path, data, headers);

const put = async (path, data = {}, headers) => await mainApi("PUT", path, data, headers);

const del = async (path, headers) => await mainApi("DELETE", path, headers);

export default { get, post, del, put };
