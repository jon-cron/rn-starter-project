import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
// NOTE to use this first run "npm install react-native-safe-area-view"
// NOTE must run expo install expo-linear-gradient
// import { LinearGradient } from "expo-linear-gradient";

import StartScreen from "./src/screens/StartScreen.jsx";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./src/screens/GameScreen.jsx";
import GameOverScreen from "./src/screens/GameOverScreen.jsx";
import Colors from "./src/utilities/colors.js";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };
  const gameOverHandler = () => {
    setGameIsOver(true);
  };
  let screen = <StartScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver) {
    screen = <GameOverScreen />;
  }
  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.secondary500]}
      style={{ flex: 1 }}
    >
      {/* NOTE ImageBackground is a combination of a View and Image. To style the view we simply style the comp but to style the image we must target imageStyle as seen below */}
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
