import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
// NOTE to use this first run "npm install react-native-safe-area-view"
import SafeAreaView, { SafeAreaProvider } from "react-native-safe-area-view";
// NOTE must run expo install expo-linear-gradient
// import { LinearGradient } from "expo-linear-gradient";

import StartScreen from "./src/screens/StartScreen.jsx";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./src/screens/GameScreen.jsx";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };
  let screen = <StartScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen />;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.rootScreen}>
        <LinearGradient colors={["#4e0329", "#ddb52f"]} style={{ flex: 1 }}>
          {/* NOTE ImageBackground is a combination of a View and Image. To style the view we simply style the comp but to style the image we must target imageStyle as seen below */}
          <ImageBackground
            source={require("./assets/images/background.png")}
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={{ opacity: 0.15 }}
          >
            {screen}
          </ImageBackground>
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
