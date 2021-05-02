import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import colors from "../../config/colors";
import Card from "../Card";
import listingsApi from "../../api/listings";
import Screen from "../Screen";
import AppButton from "../AppButton";
import ActivityIncdicator from "../ActivityIncdicator";
import useApi from "../hooks/useApi";

function ListingScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      <ActivityIndicator animating={loading} size={30} />
      {/* <ActivityIncdicator visible={loading} /> */}
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            thumbnailUri={item.images[0].thumbnailUri}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
      {error && <AppButton title={"Retry"} onPress={loadListings} />}
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 5,
    paddingBottom: 0,
    backgroundColor: colors.light,
  },
});
export default ListingScreen;
