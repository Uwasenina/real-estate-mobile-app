import { View, Text } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import { Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

<MaterialCommunityIcons name="security" size={24} color="black" />;
import { StyleSheet } from "react-native";
import AppInput from "../../components/AppInput";
import AppButton from "../../components/AppButton";
import AppText from "../../components/typo/AppText";
import SocialButton from "../../components/SocialButton";
import { colors } from "../../config/colors";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigate = useNavigation();

  return (
    <Screen>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            // backgroundColor: colors.skyBlue,
            // flex: 1,
          }}
        >
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={require("../../assets/login.png")}
          />

          <AppText
            value="Login To Your Account"
            size={25}
            bold={true}
            color={colors.tomato}
          />
        </View>
        <View style={styles.form}>
          <AppInput placeholder="Email" icon="email" />
          <AppInput placeholder="Password" icon="security" />

          <AppButton
            title="Login"
            onPress={() => {
              navigate.navigate("Home");
            }}
          />
        </View>

        <View style={styles.other}>
          <AppText
            value="Forgot Password?"
            size={15}
            bold={false}
            color={colors.tomato}
          />
          <AppText
            value="Or continue with"
            size={15}
            bold={false}
            color="black"
          />
          <View style={styles.social}>
            <SocialButton icon={"facebook-square"} color={colors.skyBlue} />
            <SocialButton icon={"google"} color={colors.skyBlue} />
          </View>
        </View>

        <View styles={styles.login}>
          <View>
            <AppText
              value="Don't have an account?"
              size={15}
              bold={false}
              color="black"
            />
            <AppText
              value="Sign up"
              size={15}
              bold={false}
              color={colors.tomato}
              onPress={() => navigate.navigate("Signup")}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flexDirection: "column",
    height: "100%",
    padding: 20,
    // backgroundColor: colors.skyBlue,
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    // flex: 1,
    gap: 20,
  },
  login: {
    // flex: 1,
  },
  other: {
    // flex: 1,
    padding: 20,
  },
  social: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});

export default LoginScreen;
