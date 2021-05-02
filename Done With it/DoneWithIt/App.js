import React, { useEffect, useState } from "react";
import Screen from "./components/Screen";
import ListingEditingScreen from "./components/screens/ListingEditingScreen";
import * as ImagePicker from "expo-image-picker";
import { Button, Image, StyleSheet, Text } from "react-native";
import ImageInput from "./components/ImageInput";
import ImageInputList from "./components/ImageInputList";
import RegisterScreen from "./components/screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./components/navigation/AuthNavigator";
import AppNavigator from "./components/navigation/AppNavigator";
import navigationTheme from "./components/navigation/navigationTheme";
import OfflineNotice from "./components/OfflineNotice";
import AuthContext from "./api/context";
import authStorage from "./api/storage";
import AppLoading from "expo-app-loading";
import { navigationRef } from "./api/rootNavigation";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) return setUser(user);
  };
  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onError={console.warn}
        onFinish={() => setIsReady(true)}
      />
    );
  }
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
