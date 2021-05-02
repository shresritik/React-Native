import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const { coords } = await Location.getCurrentPositionAsync();
      let latitude = coords.latitude;
      let longitude = coords.longitude;

      setLocation({ latitude, longitude });
      console.log("coords", latitude, longitude);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
export default useLocation;
