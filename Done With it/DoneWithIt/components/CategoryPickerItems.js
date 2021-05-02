import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

function CategoryPickerItems({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          size={80}
          names={item.icon}
          backgroundColor={item.backgroundColor}
        />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "34%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
    width: 80,
  },
});

export default CategoryPickerItems;
