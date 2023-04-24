import React from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import Colors from "../utilities/colors.js";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: Colors.secondary500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
  },
  content: {
    textAlign: "center",
    color: Colors.secondary500,
    fontWeight: "bold",
    fontSize: 36,
  },
});

export default NumberContainer;
