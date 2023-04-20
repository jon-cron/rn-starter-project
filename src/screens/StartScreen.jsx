import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Input } from "react-native-elements";
import PrimaryButton from "../components/PrimaryButton.js";

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.numberInput} />
      {/* NOTE we are wrapping our text in the comp and using children to render different text */}
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // NOTE flex: 1 makes sure that view takes up the entire space
    // flex: 1,
    padding: 16,
    marginHorizontal: 24,
    marginTop: 50,
    backgroundColor: "#72063c",
    borderRadius: 8,
    // NOTE elevation is android specific and will not effect apple apps
    elevation: 10,
    // NOTE using these 4 shadow features together will control the shadow on apple devices. I was unable to see any shadow until using all 4
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    // NOTE unable to border until setting the width
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
  },
});

export default StartScreen;
