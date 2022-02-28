import { connect, mapProps } from "@formily/react";
import {TextInput, StyleSheet} from "react-native";
import {fixReactNativeOnInput} from "../shared/internals";

const NativeInput = (props) => {
  return <TextInput style={styles.input} {...props} />
}

export const Input = connect(
  NativeInput,
  mapProps((props, field) => {
    // fixReactNativeOnInput(field as Field);
    return {
      ...props,
      value: fixControlledValue(props.value)
    }
  }),
)

export function fixControlledValue<T>(value: T) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return String(value);
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
