import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddionHorizontal: 15,
    height: 60,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  text: {
    fontSize: 18,
  },
  strike: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});

export default ({ desc, onPress, completed }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {completed ? (
        <Text style={[styles.text, styles.strike]}>{desc}</Text>
      ) : (
        <Text style={styles.list}>{desc}</Text>
      )}
    </TouchableOpacity>
  );
};
