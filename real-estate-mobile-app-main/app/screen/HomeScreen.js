import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Platform,
  Image,
  Modal,
  Button,
} from "react-native";
import React, { useState } from "react";
import UserProfile from "../components/UserProfile";
import Screen from "../components/Screen";
import AppInput from "../components/AppInput";
import FeaturedCard from "../components/FeaturedCard";
import AppText from "../components/typo/AppText";
import { colors } from "../config/colors";

const HomeScreen = () => {
  const realEstateHouses = [
    {
      imageBg: require("../assets/house1.jpg"),
      title: "Beautiful Family Home",
      location: "Kigali, Rwanda",
      price: 250000, // Price in USD or local currency
    },
    {
      imageBg: require("../assets/house2.jpg"),
      title: "Luxury Villa with Stunning View",
      location: "Gisenyi, Rwanda",
      price: 500000, // Price in USD or local currency
    },
    {
      imageBg: require("../assets/house3.jpg"),
      title: "Cozy Townhouse",
      location: "Musanze, Rwanda",
      price: 180000, // Price in USD or local currency
    },
    {
      imageBg: require("../assets/house4.jpg"),
      title: "Modern Apartment in the City",
      location: "Rubavu, Rwanda",
      price: 120000, // Price in USD or local currency
    },
    {
      imageBg: require("../assets/house1.jpg"),
      title: "Spacious Countryside Estate",
      location: "Huye, Rwanda",
      price: 350000, // Price in USD or local currency
    },
    {
      imageBg: require("../assets/house2.jpg"),
      title: "Lakefront Retreat",
      location: "Rusizi, Rwanda",
      price: 280000, // Price in USD or local currency
    },
    {
      imageBg: require("../assets/house2.jpg"),
      title: "Charming Bungalow",
      location: "Nyagatare, Rwanda",
      price: 200000, // Price in USD or local currency
    },
    {
      imageBg: require("../assets/house2.jpg"),
      title: "Rustic Farmhouse",
      location: "Nyamagabe, Rwanda",
      price: 190000, // Price in USD or local currency
    },
    {
      imageBg: require("../assets/house2.jpg"),
      title: "Seaside Cottage",
      location: "Karongi, Rwanda",
      price: 320000, // Price in USD or local currency
    },
  ];

  const category = [
    {
      title: "House",
    },
    {
      title: "Apartment",
    },
    {
      title: "Villa",
    },
    {
      title: "Maisonette",
    },
    {
      title: "Bungalow",
    },
    {
      title: "Cottage",
    },
  ];

  const renderCategory = ({ item }) => (
    <View
      style={{
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,
        margin: 10,
        width: 100,
        borderWidth: 2,
        // fontWeight: "bold",
        borderColor: colors.skyBlue,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "black", fontSize: 15 }}>{item.title}</Text>
    </View>
  );

  return (
    <Screen>
      <ScrollView>
        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "white",
          }}
        />
        <UserProfile image="profile.png" fullName="Robert Niyitanga" />
        <AppInput placeholder="Search" icon="home-search" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 15,
          }}
        >
          <AppText value="Featured" bold={true} size={20} color={"black"} />
          <TouchableOpacity onPress={() => {}}>
            <AppText value="See All" size={15} color={"tomato"} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <FlatList
            data={realEstateHouses}
            keyExtractor={(item) => item.title}
            horizontal
            style={{
              width: "100%",
            }}
            renderItem={({ item }) => (
              <FeaturedCard
                key={item.title}
                imageBg={item.imageBg}
                title={item.title}
                location={item.location}
                price={"$" + item.price.toString().slice(0, 2)}
              />
            )}
          />
        </View>

        <View style={styles.style}>
          <AppText
            value="Our Recommendation"
            bold={true}
            size={20}
            color={"black"}
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <FlatList
            data={category}
            keyExtractor={(item) => item.title}
            horizontal
            style={{
              width: "100%",
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={renderCategory}
          />
        </View>

        <FlatList
          data={realEstateHouses}
          keyExtractor={(item) => item.title}
          numColumns={2}
          contentContainerStyle={{
            justifyContent: "center",
            gap: 10,
            // margin: 10,
          }}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "column",
                  backgroundColor: "white",
                  overflow: "hidden",
                  borderColor: colors.skyBlue,
                  borderRadius: 20,
                  justifyContent: "space-between",
                  margin: 5,
                  ...Platform.select({
                    ios: {
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.5,
                      shadowRadius: 3,
                    },
                    android: {
                      elevation: 5,
                    },
                  }),
                }}
              >
                <Image
                  style={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    width: "95%",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    height: 170,
                    resizeMode: "cover",
                  }}
                  source={item.imageBg}
                ></Image>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "column",
                    // borderWidth: 1,
                    height: 100,

                    gap: 5,
                    padding: 10,
                    width: 200,
                    alignItems: "flex-start",
                  }}
                >
                  <AppText
                    color={colors.tomato}
                    bold={true}
                    size={17}
                    value={item.title.split(" ").slice(0, 2).join(" ")}
                  />
                  <AppText value={item.location} />
                  <AppText value={item.price} />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  style: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginTop: 10,
  },
});
export default HomeScreen;
