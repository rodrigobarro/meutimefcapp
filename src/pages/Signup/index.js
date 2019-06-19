/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container} backgroundColor="#000000">
        <Image
          source={require("../../assets/background.png")}
          style={styles.backgroundImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },
  backgroundImage: {
    width: "100%",
    height: "30%",
    flex: 1,
    resizeMode: "cover"
  }
});
