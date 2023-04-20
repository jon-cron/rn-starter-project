import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children }) => {
  const handlePress = () => {
    console.log("pressed", children);
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        // NOTE you do not have to use an array combine with a function. If you would like to add multiple styles you could write it like this "style:{[styles.btn, styles.container]}"
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={handlePress}
        android_ripple={{ color: "#640233" }}
      >
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
    // NOTE overflow: hidden will clip any styling of a children that goes beyond the limits of the parent
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
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
