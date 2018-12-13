import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Spinner extends Component {
  render() {
    return <View style={spinner} />;
  }
}

const styles = StyleSheet.create({
  spinner: {
    justifyContent: "center",
    alignItems: "center"
  },
});
export default Spinner;
