import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import PrimaryButton from "../components/PrimaryButton.js";

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="number" label="Number" />
      {/* NOTE we are wrapping our text in the comp and using children to render different text */}
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default StartScreen;
