import React from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";

const NumberContainer = ({ number }) => {
  return (
    <View>
      <Text>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default NumberContainer;
