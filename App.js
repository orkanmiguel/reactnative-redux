import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import App from "./src";
import store from "./src/store";

export default function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
