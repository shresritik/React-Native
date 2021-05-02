import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import dayjs from "dayjs";

const prefix = "cache";
const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const get = async (key) => {
  const value = await AsyncStorage.setItem(prefix + key);
  const item = JSON.parse(value);
  if (!item) return null;

  //for expiry time of items
  const isExpired = (item) => {
    const now = dayjs();
    const storedTime = dayjs(item.timestamp);
    return now.diff(storedTime, "minute") > 5;
  };
  if (isExpired(item)) {
    await AsyncStorage.removeItem(prefix + key);
    return null;
  }
  return item.value;
};

export default { store, get };
