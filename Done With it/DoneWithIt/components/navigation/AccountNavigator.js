import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AcountScreen from "../screens/AcountScreen";
import MessageScreen from "../screens/MessageScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Accounts" component={AcountScreen} />
    <Stack.Screen name="Messages" component={MessageScreen} />
  </Stack.Navigator>
);
export default AccountNavigator;
