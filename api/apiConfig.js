import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API;

const APICaller = (params) => {
  const api = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "application/json, text/plain, */*",
      Authorization: params?.token
        ? params?.token
        : `Bearer ${global.api_token}`,
    },
  });

  const method = params.method ? params.method : "GET";
  const path = params.path ? params.path : "";
  const payload = params.payload ? params.payload : {};

  switch (method) {
    case "GET":
      return api
        .get(path, { params: payload })
        .then((response) => ({ ...response }))
        .catch((error) => error.response);
    case "POST":
      return api
        .post(path, payload)
        .then((response) => ({ ...response }))
        .catch((error) => error.response);
    case "PUT":
      return api
        .put(path, payload)
        .then((response) => ({ ...response }))
        .catch((error) => error.response);
    case "DELETE":
      return api
        .delete(path, {
          data: payload,
        })
        .then((response) => ({ ...response }))
        .catch((error) => error.response);
    default:
      return "[API_CALLER]: Missing params.";
  }
};

const methodAPI = {
  get: (path, params) => APICaller({ ...params, method: "GET", path }),
  post: (path, params) => APICaller({ ...params, method: "POST", path }),
  put: (path, params) => APICaller({ ...params, method: "PUT", path }),
  delete: (path, params) => APICaller({ ...params, method: "DELETE", path }),
};

export default methodAPI;
