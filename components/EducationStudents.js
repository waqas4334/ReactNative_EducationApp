import { StyleSheet, Text, View, ScrollView, Image, ActivityIndicator, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LottieView from "lottie-react-native";
import Lottie from "lottie-react-native";

export const Students = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      await axios.get("https://thapatechnical.github.io/userapi/users.json").then(res => {
        setTimeout(() => {
          setLoading(false);
          setStudents(res.data);
        }, 2000);
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <View style={{ flex: 1 }}>
        {/* <ImageBackground
source={{uri:"https://images.unsplash.com/photo-1598364804124-48256e5e1ad7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"}}

style={{

flex:1}}> */}
        {isLoading ? (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <LottieView source={require("./animations/Loader.json")} autoPlay={true} loop={true} style={{ borderWidth: 2 }} />
          </View>
        ) : (
          <ScrollView horizontal={true}>
            <View style={styles.container}>
              {students.map((course, index) => (
                <View key={index} style={styles.Card}>
                  <Text>
                    <Text style={styles.CardTitle}>Name:</Text> <Text>{course.name}</Text>{" "}
                  </Text>
                  <Text>
                    <Text style={styles.CardTitle}>Email:</Text> <Text>{course.email}</Text>{" "}
                  </Text>
                  <Image
                    source={{ uri: course.image }}
                    style={[
                      {
                        width: "100%",
                        height: "75%",
                        aspectRatio: 1,
                      },
                    ]}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  Card: {
    height: "60%",
    width: "11%",
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  CardTitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
