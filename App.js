import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// NOTE must run expo install expo-linear-gradient
import { LinearGradient } from "expo-linear-gradient";

import StartScreen from "./src/screens/StartScreen.jsx";
export default function App() {
  return (
    <LinearGradient style={styles.rootScreen}>
      <StartScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
});
