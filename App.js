import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// NOTE to use this first run "npm install react-native-safe-area-view"
import SafeAreaView, { SafeAreaProvider } from "react-native-safe-area-view";
// NOTE must run expo install expo-linear-gradient
// import { LinearGradient } from "expo-linear-gradient";

import StartScreen from "./src/screens/StartScreen.jsx";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.rootScreen}>
        <LinearGradient
          colors={["#4e0329", "#fff", "#ddb52f"]}
          style={{ flex: 1 }}
        >
          <StartScreen />
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
