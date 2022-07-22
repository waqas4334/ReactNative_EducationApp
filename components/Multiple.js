import React from "react";
import { Image, Text, View, StyleSheet, Button, TouchableOpacity, Alert } from "react-native";

const Cat = () => {
  return (
    <View>
      <Text>I am also a cat!</Text>
    </View>
  );
};

export const Cafe = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Welcome!</Text>
      <Cat />
      <Cat />
      <Cat />

      <View style={styles.Buttons}>
        <Button title="click me baby" color="teal" />
      </View>

      <View>
        <Text>Click the image to goto the new page</Text>
      </View>
      <TouchableOpacity onPress={() => Alert.alert("hello baby")}>
        <Image style={styles.imgStyle} source={require("../assets/meta.jpg")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: "35%",
  },
  Buttons: {
    marginHorizontal: "30%",
  },
  imgStyle: {
    width: 100,
    height: 100,
    borderRadius: 20,

    margin: 20,
  },
});
