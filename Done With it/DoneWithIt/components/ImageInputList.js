import React, { useRef } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ images = [], onRemoveImage, onAddImage }) {
  const handleAddImage = (uri) => {
    onAddImage(uri);
  };
  const scrollView = useRef();
  return (
    <ScrollView
      ref={scrollView}
      horizontal
      onContentSizeChange={() => scrollView.current.scrollToEnd()}
    >
      <View style={styles.container}>
        {images.map((uri) => (
          <View key={uri} style={styles.image}>
            <Image source={{ uri: uri }} />
            <ImageInput image={uri} onChangeImage={() => onRemoveImage(uri)} />
          </View>
        ))}
        <ImageInput onChangeImage={handleAddImage} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
export default ImageInputList;
