import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import HeroScreen from "./app/screen/onboarding/HeroScreen";
import AppText from "./app/components/typo/AppText";
import { StyleSheet } from "react-native";
import OnBoardScreen from "./app/navigator/OnBoardScreen";
import { NavigationContainer } from "@react-navigation/native";
import Screen from "./app/components/Screen";
import AuthNavigation from "./app/navigator/AuthNavigation";
import navigattionTheme from "./app/navigator/navigattionTheme";
import TabNavigation from "./app/navigator/TabNavigation";

export default function App() {
  return (
    <>
      <NavigationContainer theme={navigattionTheme}>
        {/* <HeroScreen /> */}
        {/* <OnBoardScreen /> */}
        <TabNavigation />
        {/* <AuthNavigation /> */}
        {/* <AppText value="Welcome to EstateVR" size={20} color="black" /> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
