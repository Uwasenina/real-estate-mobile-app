import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeroScreen from "../screen/onboarding/HeroScreen";
import SliderScreen from "../screen/onboarding/SliderScreen";
import Screen from "../components/Screen";
import LoginScreen from "../screen/authentication/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../config/colors";
import SignupScreen from "../screen/authentication/SignupScreen";
import ProfileScreen from "../screen/authentication/ProfileScreen";
import ProfileUpdateScreen from "../screen/authentication/ProfileUpdateScreen";
const OnBoardScreen = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <Stack.Navigator
        initialRouteName="Hero"
        screenOptions={{
          headerMode: "screen",
          headerStyle: {
            backgroundColor: colors.white,
            elevation: 0,
          },
        }}
      >
        <Stack.Screen
          options={{
            title: "",
          }}
          name="Hero"
          component={HeroScreen}
        />
        <Stack.Screen
          options={{
            title: "",
          }}
          name="Slide"
          component={SliderScreen}
        />
        <Stack.Screen
          options={{
            title: "",
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            title: "",
          }}
          name="Signup"
          component={SignupScreen}
        />

        <Stack.Screen
          options={{
            title: "Fill Your Profile",
          }}
          name="Profile"
          component={ProfileUpdateScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default OnBoardScreen;
