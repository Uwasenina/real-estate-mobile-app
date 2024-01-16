import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesome  } from "@expo/vector-icons";
import { colors } from "../config/colors";

const SocialButton = ({ icon, color }) => {
  return (
    <View style={styles.container}>
      <FontAwesome  name={icon} size={24} color={color} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.skyBlue,
  },
});
export default SocialButton;
