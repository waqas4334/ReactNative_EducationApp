import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ImagesAll = (props) => {
  return (
    <View>
      <Text>{props.imagedata}</Text>
      <Image style={styles.imageStyle} source={props.imgsrc} />
      <Text>{props.imagemeta}</Text>
      <Image style={styles.imageStyle} source={props.imgmeta} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 10,
    margin: 5,
  },
});
export default ImagesAll;
