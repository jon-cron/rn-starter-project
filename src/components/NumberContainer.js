import React from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";

const NumberContainer = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default NumberContainer;
