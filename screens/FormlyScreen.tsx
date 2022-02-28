import { createForm } from "@formily/core";
import { Field, FormProvider, observer, useForm } from "@formily/react";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { Input } from "../formly/schemas/input";
import { RootTabScreenProps } from "../types";

const Custom = observer(() => {
  const form = useForm();
  return <Text>{form.values.input}</Text>
})

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {

  const form = useMemo(() => {
    return createForm();
  }, []);

  return (
    <View style={styles.container}>
      <FormProvider form={form}>
         <Field name="input" component={[Input, { placeholder: 'Please Input' }]} />
          <Field name="custom" component={[Custom]} />
      </FormProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
