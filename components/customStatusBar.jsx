import React, { Fragment } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

const CustomStatusBar = ({ children, statusBgColor, bgColor }) => {
  return (
    <Fragment>
      <StatusBar backgroundColor={statusBgColor} style="light" />
      <SafeAreaView style={{ flex: 0, backgroundColor: statusBgColor }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
        {children}
      </SafeAreaView>
    </Fragment>
  );
};

export default CustomStatusBar;
