import { StyleSheet, Text, View,ScrollView } from "react-native";
import React from "react";

export const BoxModel = () => {
  return (

    <ScrollView>



    <View style={styles.mainBoxContainer}>
  
        <Text style={[styles.innerbox1,styles.commonTextStyle]}>BoxModel</Text>


        <Text style={[styles.innerbox2,styles.commonTextStyle]}>BoxModel</Text>
   
      
        <Text style={[styles.innerbox3,styles.commonTextStyle]}>BoxModel</Text>
    
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainBoxContainer: {
    backgroundColor: "#fff",

    borderColor: "#000",

    marginTop: "60%",

    margin: "4%",
    borderWidth: 1,
  },
  innerbox1: {
    backgroundColor: "red",
  },
  innerbox2: {
    backgroundColor: "green",
  },
  innerbox3: {
    backgroundColor: "blue",
  },
  commonTextStyle:{
    fontSize: 20,
    color   : "white",

paddingVertical: "10%",
textAlign   : "center",
borderWidth: 3,
// marginVertical: "5%", 
// marginHorizontal: "20%",
margin: "5%",

}
});
