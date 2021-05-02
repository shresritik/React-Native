import React, { useContext } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import AuthContext from "../../api/context";
import colors from "../../config/colors";
import Icon from "../Icon";
import ListItem from "../ListItem";
import ListItemSeparator from "../ListItemSeparator";
import Screen from "../Screen";
import authStorage from "../../api/storage";
import useAuth from "../../api/useAuth";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    target: "Messages",
  },
];

function AcountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <ListItem
        title={user.name}
        subTitle={user.email}
        image={require("../../assets/mosh.jpg")}
      />
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  names={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.target)}
            />
          )}
        />
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
          onPress={() => logOut()}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AcountScreen;
