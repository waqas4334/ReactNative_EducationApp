import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity,ImageBackground } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { AlexBrush_400Regular } from "@expo-google-fonts/alex-brush";

export const EducationHome = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          AlexBrush_400Regular,
        });

        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
      <ImageBackground
      source={{uri:"https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}}
      
      style={{ width: "100%", height: "100%"}}
      >
    <View style={styles.MainContainer}>
      


      <View
        style={{

flexDirection: "row",
justifyContent: "space-between",
}} >
        <View>
          <Text style={
            {
              textAlign: "center",
    fontSize: 25,
    // fontWeight: "bold",
    color: "teal",
    padding: "2%",
    textShadowOffset: { width: 1, height: 3 },
    textShadowColor: "#362A34",
    textShadowRadius: 20,
    fontFamily: "AlexBrush_400Regular",
            }
          }>Welcome Waqas!</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            style={{
              width: 80,
              height: 40,
              aspectRatio: 1,
            }}
            source={{ uri: "https://img.icons8.com/color/344/circled-user-male-skin-type-7--v1.png" }}
          />
        </TouchableOpacity>
      </View>
      <Image style={[styles.Image]} source={require("../../assets/education.jpg")} />
      <View onLayout={onLayoutRootView}>
        <Text style={styles.Heading}>Lets Grow Together</Text>
      </View>

      <View style={{ margin: "2%", marginTop: "5%" }}>
        <Text style={styles.Description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem porro magnam maxime accusamus, eligendi voluptates facilis voluptatibus,
          mollitia, officiis sequi aperiam! Expedita repellat atque, tempore magni asperiores harum ducimus consectetur?{" "}
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View style={styles.Menu}>
          {/* <Text style={[styles.MenuText]} 
          onPress={() => navigation.navigate("Course")}>
          Course</Text> */}

          <TouchableOpacity onPress={() => navigation.navigate("Course")}>
            <Image style={styles.MenuImage} source={{ uri: "https://img.icons8.com/fluency/344/saving-book.png" }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Students")}>
            <Image style={[styles.MenuImage]} source={{ uri: "https://img.icons8.com/color/344/studying.png" }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("EducationContact")}>
            <Image style={styles.MenuImage} source={{ uri: "https://img.icons8.com/fluency/344/contact-card.png" }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              style={styles.MenuImage}
              source={{
                uri: "https://img.icons8.com/external-flatart-icons-flat-flatarticons/344/external-contact-contact-us-flatart-icons-flat-flatarticons.png",
              }}
              />
          </TouchableOpacity>
        </View>
      </View>
    </View>
</ImageBackground>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 10,
    marginTop: "10%",
    // borderWidth: 1,
  },

  Image: {
    width: "100%",
    height: "28%",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: "5%",
  },
  Heading: {
    textAlign: "center",
    fontSize: 35,
    // fontWeight: "bold",
    color: "maroon",
    padding: "2%",
    textShadowOffset: { width: 1, height: 3 },
    textShadowColor: "#362A34",
    textShadowRadius: 20,
    fontFamily: "AlexBrush_400Regular",
  },
  Description: {
    lineHeight: 25,
    textAlign: "justify",
  },
  Menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "teal",
    alignContent: "flex-end",
    borderRadius: 7,
    elevation: 5,
  },
  MenuImage: {
    width: 100,
    height: 50,
    aspectRatio: 1,
  },
  MenuText: {
    fontSize: 17,
    fontWeight: "bold",
    padding: "2%",
    color: "white",
  },
});
