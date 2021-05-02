import React from "react";
import { Alert, Keyboard } from "react-native";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";

import { AppForm, AppFormField, ButtonSubmit } from "./form";
import messagesApi from "../api/message";

function ContactSellerForm({ listing }) {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    // const result = await messagesApi.send(message, listing.id);
    // console.log("result", result);

    // if (!result.ok) {
    //   console.log("Error", result);
    //   return Alert.alert("Error", "Could not send the message to the seller.");
    // }

    resetForm();
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Awesome!",
        body: "You accessed the notification",
        data: { data: "goes here" },
      },
      trigger: { seconds: 1 },
    });
  };

  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <ButtonSubmit title="Contact Seller" />
    </AppForm>
  );
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

export default ContactSellerForm;
