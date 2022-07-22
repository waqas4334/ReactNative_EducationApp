import { StyleSheet, Text, View, Image, Linking, TouchableOpacity, TextInput,ScrollView } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { AlexBrush_400Regular } from "@expo-google-fonts/alex-brush";

export const Educationcontact = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [help, setHelp] = useState("");

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
    <View style={styles.MainContainer}>
<ScrollView>

      
      <Text style={{ fontSize: 40, fontFamily: "AlexBrush_400Regular", textAlign: "center", color: "coral" }}>Level Up your Knowledge</Text>
      <Text style={{ fontSize: 22 }}>You can react us via demo@waqas.com</Text>

      <View style={styles.InputContainer}>
        <Text style={styles.labels}>Enter your Name</Text>
        <TextInput style={styles.input} onChangeText={setUserName} value={userName} placeholder=" Username" />
      </View>
      <View style={styles.InputContainer}>
        <Text style={styles.labels}>Enter your password</Text>
        <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder=" Password" />
      </View>

      <View style={styles.InputContainer}>
        <Text style={styles.labels}>Enter your Number</Text>
        <TextInput style={styles.input} onChangeText={setPhone} value={phone} placeholder=" Contact No." keyboardType="numeric" />
      </View>

      <View style={styles.InputContainer}>
        <Text style={styles.labels}>How can i help you?</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={setHelp}
          value={help}
          placeholder=" We are here for you!"
          numberOfLines={5}
          multiline={true}
          />
      </View>

      <TouchableOpacity
      
      >

        
        <Text
        onPress={()=> userName&&help&&phone&&password&&userName!==0?alert(phone):alert("Please fill all Fields before submitting")}
        style={{ backgroundColor:  "teal", color: "white", marginHorizontal: "2.5%", textAlign: "center", borderRadius: 5, fontSize: 17, padding: 8 }}
        >
          Submit
        </Text>
      </TouchableOpacity>
          </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: "5%",
    backgroundColor: "#FAFAFA",
    // borderWidth:1,
    margin: "2%",
  },

  InputContainer: {
    margin: 12,
    marginTop:"5%"
  },
  input: {
    borderWidth: 1,
    padding: 5,
    borderColor: "#20232A",
    borderRadius: 5,
  },
  labels: {
    fontSize: 18,
  },
});
