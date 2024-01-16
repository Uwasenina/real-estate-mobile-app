import { Text, View, Image, StyleSheet } from "react-native";
import Screen from "../../components/Screen";
import AppText from "../../components/typo/AppText";
import { colors } from "../../config/colors";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppButton from "../../components/AppButton";

const HeroScreen = () => {
  const navigate = useNavigation();
  const handlePress = () => {
    navigate.navigate("Slide");
  };
  return (
    <Screen>
      <View
        style={{
          borderRadius: 20,
          height: "75%",
        }}
      >
        <Image
          style={styles.image}
          source={require("../../assets/house2.jpg")}
        />
      </View>
      <View
        style={{
          width: "100%",
          gap: 20,
        }}
      >
        <AppText
          value="Welcome to EstateVR"
          size={30}
          bold={true}
          color={colors.tomato}
        />
        <AppText
          value="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque unde"
          size={15}
          bold={false}
          color="black"
        />
      <AppButton title="Get Started" onPress={handlePress} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  image: {
    // width: "100%",
    // height: "70%",
    flex: 1,
    backgroundColor: colors.tomato,
    overflow: "hidden",
  },
});
export default HeroScreen;
