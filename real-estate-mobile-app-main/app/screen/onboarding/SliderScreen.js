import { View, Text, Image } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import AppText from "../../components/typo/AppText";
import { StyleSheet } from "react-native";
import { colors } from "../../config/colors";
import { FlatList } from "react-native";
import { Entypo } from "@expo/vector-icons";
import AppButton from "../../components/AppButton";
import { useNavigation } from "@react-navigation/native";

const SliderScreen = () => {
  const onboardSlides = [
    {
      id: 1,
      title: "Explore the Perfect Place to Live",
      image: require("../../assets/house4.jpg"),
    },
    // {
    //   id: 2,
    //   title: "Experience Virtual Property Tours Like Never Before",
    //   image: require("../../assets/house4.jpg"),
    // },
    // {
    //   id: 3,
    //   title: "Secure and Easy Real Estate Transactions",
    //   image: require("../../assets/house4.jpg"),
    // },
  ];
  const navigate = useNavigation();
  return (
    <Screen>
      <View
        style={{
          height: "100%",
          borderRightColor: colors.skyBlue,
        }}
      >
        <FlatList
          data={onboardSlides}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Image source={item.image} style={styles.image} />
              <AppText
                value={item.title}
                size={30}
                bold={true}
                color={colors.tomato}
              />
            </View>
          )}
        />

        <View style={styles.paginate}>
          <Entypo name="dot-single" size={30} color={colors.tomato} />
          <Entypo name="dot-single" size={30} color="black" />
          <Entypo name="dot-single" size={30} color="black" />
        </View>
        <View
          style={{
            // width: "100%",
            // // flex: 1,
            // justifyContent: "center",
            // alignItems: "center",
            // gap: 10,
            flex: 0.4,
            gap: 10,
          }}
        >
          <AppButton title="Back" onPress={() => navigate.navigate("Hero")} />
          <AppButton title="Next" onPress={() => navigate.navigate("Login")} />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: "70%",
    flex: 1,
    width: "100%",
    height: "100%",
    flex: 0.5,
    height: "100vh",
  },
  image: {
    // overflow: "hidden",
    height: "100%",
    // width: "100%",
    flex: 1,
    // borderRadius: 20,
  },
  paginate: {
    flexDirection: "row",
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: colors.tomato,
  },
  title: {
    flex: 0.4,
    backgroundColor: "red",
  },
});

export default SliderScreen;
