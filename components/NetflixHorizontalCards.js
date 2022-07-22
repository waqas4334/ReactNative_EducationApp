import { StyleSheet, Text, View, Image, Button, Linking, ImageBackground } from "react-native";
import React from "react";
import { CabinSketch_400Regular, CabinSketch_700Bold } from "@expo-google-fonts/cabin-sketch";
import {
  AbhayaLibre_400Regular,
  AbhayaLibre_500Medium,
  AbhayaLibre_600SemiBold,
  AbhayaLibre_700Bold,
  AbhayaLibre_800ExtraBold,
} from "@expo-google-fonts/abhaya-libre";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export const NetflixHorizontalCards = props => {
  const image = {
    uri: "https://assets.nflxext.com/ffe/siteui/vlv3/271ac55e-7228-438e-824e-92db37981e59/2d5275b9-0ba0-4085-9d72-dcd6d9103161/PK-en-20220627-popsignuptwoweeks-perspective_alpha_website_large.jpg",
  };
  let [fontsLoad] = useFonts({
    CabinSketch_400Regular,
    CabinSketch_700Bold,
    AbhayaLibre_400Regular,
    AbhayaLibre_500Medium,
    AbhayaLibre_600SemiBold,
    AbhayaLibre_700Bold,
    AbhayaLibre_800ExtraBold,
  });
  if (!fontsLoad) {
    return <AppLoading />;
  }

  return (
    <View style={styles.mainCard}>
      <ImageBackground
        source={{
          uri: props.godfathersrc,
        }}
        resizeMode="cover"
        style={styles.NetflixImageStyle}
      >
        <View style={styles.Poster}>
          <View>
            <Text style={[styles.PosterTitle, styles.commonColor]}>
              {props.Godfather}{" "}
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 35,
                }}
              >
                rating 4.7
              </Text>
            </Text>
            <Text style={[styles.Postertext, styles.commonColor]}></Text>
          </View>
          <View style={styles.WatchButton}>
            <Button onPress={() => Linking.openURL("https://www.netflix.com/pk/")} color="#F40612" title="click to watch" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    flex: 1,
    marginTop: "10%",
  },
  Poster: {
    borderWidth: 1,
    borderColor: "white",
    borderWidth: 1,
    alignItems: "center",
    marginVertical: 100,
    margin: 10,
    backgroundColor: "black",
  },

  NetflixImageStyle: {
    width: 200,
    height: "20%",
    resizeMode: "cover",
  },

  PosterTitle: {
    fontSize: 30,
    fontFamily: "AbhayaLibre_700Bold",
    marginVertical: 10,
    textAlign: "center",
    letterSpacing: 1,
  },

  Postertext: {
    fontSize: 17,
    margin: 10,

    fontFamily: "CabinSketch_400Regular",
    letterSpacing: 1.5,
    lineHeight: 20,
    textAlign: "center",
    textShadowOffset: { width: 2, height: 1 },
    textShadowColor: "white",
    textShadowRadius: 12,
    textTransform: "lowercase",
  },
  WatchButton: {
    marginHorizontal: 20,
    marginVertical: 8,
  },

  commonColor: {
    color: "white",
  },
});
