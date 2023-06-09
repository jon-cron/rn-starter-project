import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Title from "../components/Title.jsx";
import NumberContainer from "../components/NumberContainer.js";
import PrimaryButton from "../components/PrimaryButton.js";
import { Alert } from "react-native";

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
const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = randomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);
  const handleGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know that is wrong", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }
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
