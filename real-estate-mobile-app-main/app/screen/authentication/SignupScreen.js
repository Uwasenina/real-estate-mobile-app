import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../config/colors";
import AppText from "../../components/typo/AppText";
import SocialButton from "../../components/SocialButton";
import AppButton from "../../components/AppButton";
import Screen from "../../components/Screen";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import AppInput from "../../components/AppInput";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";

const SignupScreen = () => {
  const navigate = useNavigation();

  return (
    <Screen>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            padding: 20,
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
            value="Create To Your Account"
            size={25}
            bold={true}
            color={colors.tomato}
          />
        </View>
        <View style={styles.form}>
          <Formik
            initialValues={{ email: "", names: "", password: "" }}
            onSubmit={(values) => {
              navigate.navigate("Profile");
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <AppInput
                  placeholder="Names"
                  onChangeText={handleChange("names")}
                  icon="account-supervisor-outline"
                />
                <AppInput
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  icon="email"
                />
                <AppInput
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  icon="security"
                />
                <AppButton onPress={handleSubmit} title="SignUp" />
              </>
            )}
          </Formik>
        </View>

        <View>
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

        <View>
          <View>
            <AppText
              value="Have an account?"
              size={15}
              bold={false}
              color="black"
            />
            <AppText
              value="Login"
              size={15}
              bold={false}
              color={colors.tomato}
              onPress={() => navigate.navigate("Login")}
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
  },

  form: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 20,
  },

  social: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});
export default SignupScreen;
