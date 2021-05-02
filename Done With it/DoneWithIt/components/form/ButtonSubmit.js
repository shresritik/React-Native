import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function ButtonSubmit({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}

export default ButtonSubmit;
