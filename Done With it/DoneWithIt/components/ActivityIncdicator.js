import React from "react";
import LottieView from "lottie-react-native";
function ActivityIncdicator({ visible }) {
  if (!visible) {
    return null;
  } else {
    try {
      return (
        <LottieView
          source={require("../assets/animations/loader.json")}
          autoPlay
          loop
        />
      );
    } catch (error) {
      console.log(error);
    }
  }
}

export default ActivityIncdicator;
