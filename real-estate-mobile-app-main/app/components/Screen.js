import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { colors } from "../config/colors";

const Screen = ({ children }) => {
  return (
    <SafeAreaView styles={styles.container}>
      <StatusBar backgroundColor={colors.skyBlue} />

      {children}
    </SafeAreaView>
  );
};

console.log(StatusBar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "white",
    height: "100%",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
