import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./typo/AppText";
import { colors } from "../config/colors";
import { AntDesign } from "@expo/vector-icons";

const UserProfile = ({ image, fullName }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          //   justifyContent: "space-between",
          //   alignItems: "center",
        }}
      >
        <Image style={styles.image} source={require("../assets/profile.png")} />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            // gap: 15,
          }}
        >
          <AppText value={"Good Morning"} size={15} color={"#000"} />
          <AppText value={fullName} size={20} color={"black"} bold={true} />
        </View>
      </View>
      <AntDesign style={styles.icon} name="bells" size={20} color="black" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 20,
    // justifyContent: "space-between",
    // backgroundColor: colors.skyBlue,
    padding: 10,
    borderRadius: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  icon: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#444",
  },
});

export default UserProfile;
