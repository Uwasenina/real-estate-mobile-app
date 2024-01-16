import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./typo/AppText";
import { colors } from "../config/colors";

const FeaturedCard = ({ imageBg, title, location, price }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          borderRadius: 20,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 10,
          // padding: 10,
          width: "100%",
          overflow: "hidden",
          height: 400,
          resizeMode: "cover",
        }}
        source={imageBg}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 10,
          alignItems: "flex-start",
          gap: 10,
          borderRadius: 20,
        }}
      >
        <AppText color={colors.white} size={25} bold={true} value={title} />
        <AppText value={location} size={15} color={"white"} />
        <AppText value={price} size={30} color={"white"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    // alignItems: "flex-start",
    // position: "relative",
    padding: 20,
    margin: 10,
    // justifyContent: "space-between",
    // backgroundColor: colors.skyBlue,
    padding: 10,
    width: 300,
    height: 350,
    borderRadius: 10,
  },
});
export default FeaturedCard;
