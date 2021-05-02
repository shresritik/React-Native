import React, { useContext, useState } from "react";
import { Image, StyleSheet } from "react-native";
import {
  AppForm,
  ErrorMessage,
  AppTextInput,
  AppFormField,
  ButtonSubmit,
} from "../form";

import Screen from "../Screen";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";
import authApi from "../../api/auth";
import AuthContext from "../../api/context";
import authStorage from "../../api/storage";
import useAuth from "../../api/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function LoginScreen() {
  const [loginFailed, setLoginFailed] = useState(false);
  const { logIn } = useAuth();
  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    logIn(result.data);
  };
  return (
    <Screen style={styles.container}>
      <Image
        source={require("../../assets/logo-red.png")}
        style={styles.logo}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <>
          <ErrorMessage
            visible={loginFailed}
            error={"Invalid email/password"}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />

          <ButtonSubmit title={"login"} />
        </>
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
