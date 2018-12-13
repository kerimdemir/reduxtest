import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Button extends Component {
  render() {
    return <View style={button} />;
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center"
  },
});
export default Button;
