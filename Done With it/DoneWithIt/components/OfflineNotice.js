import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice() {
  const netinfo = useNetInfo();
  if (netinfo.type !== "unknown" && netinfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    zIndex: 1000,
    height: 50,
    // position: "absolute",
    top: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
  },
});
export default OfflineNotice;
