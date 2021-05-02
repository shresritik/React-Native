import * as NOTIFICATIONS from "expo-notifications";
import navigation from "../../api/rootNavigation";
import * as Permissions from "expo-permissions";
import expoPushTokensApi from "../../api/expoPushTokens";
import { useEffect } from "react";

const useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();
    if (notificationListener)
      NOTIFICATIONS.addNotificationResponseReceivedListener(
        notificationListener
      );
  }, []);
  const registerForPushNotifications = async () => {
    try {
      const permission = await NOTIFICATIONS.requestPermissionsAsync();
      if (!permission.granted) return;
      const token = await NOTIFICATIONS.getExpoPushTokenAsync();
      // console.log(token);
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error in notifications", error);
    }
  };
};
export default useNotifications;
