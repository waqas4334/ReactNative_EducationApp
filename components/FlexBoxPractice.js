import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export const FlexBoxPractice = () => {
  return (
    <View style={styles.parentView}>
      <Text style={[{ backgroundColor: "red"}, styles.commonTextStyle]}>Box1</Text>
      <Text style={[{ backgroundColor: "green" }, styles.commonTextStyle]}>Box2</Text>
      <Text style={[{ backgroundColor: "blue"}, styles.commonTextStyle]}>Box3</Text>
      <View 
       style={styles.BOX4} 
      >
        <Text style={[{ backgroundColor: "brown", }, styles.commonTextStyle]}>Box4</Text>
      </View>
      <Text style={[{ backgroundColor: "grey",}, styles.commonTextStyle]}>Box5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    borderColor: "#000",
    height: 500,
    marginTop: 100,
    marginHorizontal: 10,
    borderWidth: 3,
    backgroundColor: "#262422",
    // justifyContent: "space-around",
    // alignItems: "center",
    // flexDirection: "row",
    //     justifyContent: "space-around",
    //     alignItems: "center",


    flexWrap: "wrap",
  },
  BOX4:{

// justifyContent: "center",
// alignItems: "center",
// height:"100%",
  },
  commonTextStyle: {
    fontSize: 15, 
    // height: 60,
    width: 60,
    padding: 11,

  },
});
