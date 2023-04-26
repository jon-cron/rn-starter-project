import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Input } from "react-native-elements";
import PrimaryButton from "../components/PrimaryButton.js";
import Colors from "../utilities/colors.js";
import Title from "../components/Title.jsx";

const StartScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const numberHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };
  const resetInput = () => {
    setEnteredNumber("");
  };
  const handleConfirm = () => {
    const chosenNumber = parseInt(enteredNumber);
    // NOTE isNaN is a function that checks to see if a variable is a number and returns a boolean
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // NOTE this Alert uses native alert systems for android and apple
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInput }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };
  return (
    <View style={{ marginTop: 100, alignItems: "center" }}>
      <Title>Guess My Number</Title>
      <View style={styles.container}>
        <Text style={{ color: Colors.secondary500, fontSize: 24 }}>
          Enter a number
        </Text>
        <TextInput
          onChangeText={numberHandler}
          value={enteredNumber}
          style={styles.numberInput}
          maxLength={2}
          // NOTE look at the docs to see the types of inputs. 'number-pad' changes multiple platforms keyboards types
          keyboardType="number-pad"
          // NOTE when making inputs keep in mind UI and what a bad experience it would be for a user to have autocap and autocorrect enabled when trying to type something like a password or email.
          autoCapitalize="none"
          autoCorrect={false}
        />
        {/* NOTE we are wrapping our text in the comp and using children to render different text */}
        <View style={styles.btnContainer}>
          <View style={styles.btnSize}>
            <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
          </View>
          <View style={styles.btnSize}>
            <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // NOTE flex: 1 makes sure that view takes up the entire space
    // flex: 1,
    padding: 16,
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 10,
    backgroundColor: Colors.primary700,
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
    width: 50,
    fontSize: 32,
    // NOTE unable to border until setting the width
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    color: Colors.secondary500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
  },
  btnSize: {
    // width: "30%",
    flex: 1,
  },
});

export default StartScreen;
