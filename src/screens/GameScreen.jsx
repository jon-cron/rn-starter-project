import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Title from "../components/Title.jsx";
import NumberContainer from "../components/NumberContainer.js";
import PrimaryButton from "../components/PrimaryButton.js";

const randomNumberBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return randomNumberBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber }) => {
  const initialGuess = randomNumberBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const handleGuess = (direction) => {
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else if (direction === "higher") {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRndNumber = randomNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };
  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={handleGuess.bind(this, "higher")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={handleGuess.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 30,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default GameScreen;
