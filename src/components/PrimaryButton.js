import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const PrimaryButton = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PrimaryButton;
