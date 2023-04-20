import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children }) => {
  const handlePress = () => {
    console.log("pressed", children);
  };
  return (
    <View style={styles.buttonInnerContainer}>
      <Pressable onPress={handlePress} android_ripple={{ color: "#640233" }}>
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
    // NOTE this will look funny when clicked on Android devices. You should instead wrap the pressable in the view for better UI
    // <Pressable onPress={handlePress} android_ripple={{ color: "#640233" }}>
    //   <View style={styles.container}>
    //     <Text style={styles.btnText}>{children}</Text>
    //   </View>
    // </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 5,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
});

export default PrimaryButton;
