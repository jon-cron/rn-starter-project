import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children }) => {
  const handlePress = () => {
    console.log("pressed", children);
  };
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 5,
  },
});

export default PrimaryButton;
