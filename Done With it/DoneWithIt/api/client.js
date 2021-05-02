import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../api/storage";
import settings from "../config/settings";

const apiClient = create({
  baseURL: settings.apiUrl,
});

//Accessing unauthorized endpoint by authToken

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
  console.log("authToken", authToken);
});

//storing and getting from cache
//changing original get()

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }
  //getting data from cache
  const data = await cache.get(url);
  //manually changing the status if cache
  return data ? { ok: true, data } : response;
};
export default apiClient;
