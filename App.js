import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import StartScreen from "./src/screens/StartScreen.jsx";
export default function App() {
  return (
    <View style={styles.rootScreen}>
      <StartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
});
