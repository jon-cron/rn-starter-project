import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import StartScreen from "./src/screens/StartScreen.jsx";
export default function App() {
  return <StartScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
