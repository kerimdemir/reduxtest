import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Input extends Component {
  render() {
    return <View style={input} />;
  }
}

const styles = StyleSheet.create({
  input: {
    justifyContent: "center",
    alignItems: "center"
  }
});
export default Input;
