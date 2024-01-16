import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { colors } from "../config/colors";

const AppInput = ({ icon, ...others }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={24} color={colors.skyBlue} />
      )}
      <TextInput style={styles.input} {...others} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0fff0",
    padding: 10,
    gap: 10,
    borderRadius: 20,
    // borderWidth: 1,
    margin: 10,
    // borderColor: colors.skyBlue,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 15,
  },
});

export default AppInput;
