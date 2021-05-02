import React, { useState } from "react";
import { FlatList, View } from "react-native";
import colors from "../../config/colors";
import ListDeleteItem from "../ListDeleteItem";
import ListItem from "../ListItem";
import ListItemSeparator from "../ListItemSeparator";
import Screen from "../Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/mosh.jpg"),
  },
];
function MessageScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={messages}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../../assets/mosh.jpg"),
            },
          ]);
        }}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message", item)}
            renderRightActions={() => (
              <ListDeleteItem onPress={() => handleDelete(item)} />
            )}
          />
        )}
      />
    </Screen>
  );
}

export default MessageScreen;
