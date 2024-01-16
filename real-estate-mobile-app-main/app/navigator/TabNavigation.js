import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/HomeScreen";
import FavoriteScreen from "../screen/FavoriteScreen";
import ProfileScreen from "../screen/authentication/ProfileScreen";
import { colors } from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import OnBoardScreen from "./OnBoardScreen";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  const pages = [
    {
      name: "Home",
      component: HomeScreen,
    },
    {
      name: "OnBoarding",
      component: OnBoardScreen,
    },
    {
      name: "Favorite",
      component: FavoriteScreen,
    },
    {
      name: "Profile",
      component: ProfileScreen,
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="OnBoarding"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Favorite") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarVisible: false,
        tabBarActiveTintColor: colors.tomato,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 0,
          elevation: 0,
        },
        headerShown: false,
      })}
    >
      {pages.map((page) => (
        <Tab.Screen
          key={page.name}
          name={page.name}
          component={page.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
