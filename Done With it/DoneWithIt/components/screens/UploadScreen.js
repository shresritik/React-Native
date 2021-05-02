import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import Bar from "react-native-progress/Bar";
import colors from "../../config/colors";
import LottieView from "lottie-react-native";

function UploadScreen({ progress = 0, visible = true, onDone }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Bar
            progress={progress}
            color={colors.primary}
            width={200}
            style={{ width: 100 }}
          />
        ) : (
          <LottieView
            onAnimationFinish={onDone}
            source={require("../../assets/animations/done.json")}
            autoPlay
            loop={false}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default UploadScreen;
