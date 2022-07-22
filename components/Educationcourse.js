import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity,Linking } from "react-native";
import React from "react";
import { courses } from "./api/CoursesApi";

export const Educationcourse = () => {
  return (
    <View style={styles.MainContainer}>

      
      <ScrollView
        // horizontal={true}
    showsVerticalScrollIndicator={false}
      
      >
      {courses.map((course, index) => (
        <View key={index} style={styles.Card}>
          <Image  style={styles.CardImage} source={{ uri: course.image }} />
          <Text style={styles.CardTitle}>{course.name}</Text>
          <Text style={styles.CardDescription}>{course.description}</Text>

<TouchableOpacity>

          <Text onPress={()=>Linking.openURL  ('https://www.sololearn.com/learning') } style={styles.CardButton}>Course Details</Text>
</TouchableOpacity>
        </View>
      ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {

    alignItems: "center",
    flex: 1,
   

  },
  Card: {
    

    // borderWidth: 1,
    // borderColor: "teal",
    borderRadius: 5,
    padding: "6%",
    backgroundColor: "white",
    elevation: 35,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    marginTop: "5%",
    height: "20%",
    justifyContent: "space-evenly",
    margin: "5%",
 


  },

  CardTitle:{

    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  CardImage:{
    width: "100%",
    height: "50%",
    aspectRatio: 1,

    alignSelf: "center",

  },
  CardButton:{
backgroundColor: "teal",
    color: "#ffffffff",
    fontSize: 15,
    borderRadius: 5,
    textAlign: "center",
    paddingVertical: "2%",
    marginHorizontal: "30%",
  }
});
