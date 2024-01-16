import { View, Image, StyleSheet } from "react-native";
import React from "react";
import AppInput from "../../components/AppInput";
import { colors } from "../../config/colors";
import AppButton from "../../components/AppButton";
import AppText from "../../components/typo/AppText";
import SelectDropdown from "react-native-select-dropdown";
import AppSelect from "../../components/AppSelect";

const gender = ["Female", "Male"];

const ProfileUpdateScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <AppText value="Upload Image" color={colors.tomato} />
        <AppInput placeholder="Full Name" />
        <AppInput placeholder="Email" />
        <AppInput placeholder="Date of birth" />
        <AppSelect
          items={gender}
          defaultButtonText={"Select gender"}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
        <AppButton title="Save" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.tomato,
    padding: 10,
    justifyContent: "center",
  },
  inputs: {
    gap: 12,
  },
});

export default ProfileUpdateScreen;
