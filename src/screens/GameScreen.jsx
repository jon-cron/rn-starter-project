import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Title from "../components/Title.jsx";
import NumberContainer from "../components/NumberContainer.js";

const randomNumberBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return randomNumberBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
const GameScreen = ({ userNumber }) => {
  const initialGuess = randomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
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
});

export default GameScreen;
