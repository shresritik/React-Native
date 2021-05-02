import * as SecureStore from "expo-secure-store";

const key = "authToken";
const storeToken = async (authToken) => {
  try {
    return await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log(error);
  }
};
const getToken = async () => {
  try {
    await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error in getting token ", error);
  }
};
const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error in Removing token", error);
  }
};
export default { getUser, getToken, removeToken, storeToken };
