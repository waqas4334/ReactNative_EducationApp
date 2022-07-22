import { StyleSheet, Text, View, Image,Linking,TouchableOpacity,ImageBackground } from "react-native";
import React,{useState,useEffect,useCallback} from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { AlexBrush_400Regular } from "@expo-google-fonts/alex-brush";

export const EducationProfile = () => {
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
    source={{uri:"https://images.unsplash.com/photo-1598364804124-48256e5e1ad7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"}}
    
    style={{ width: "100%", height: "100%"}}
    >
    <View style={styles.MainContainer}>


      
      <Text style={{ fontSize: 40,fontFamily: "AlexBrush_400Regular" }}>Waqas Ahmed Jutt</Text>
      <Text>Iam a React Native developer😁</Text>

      <View>
        <Image
          source={{
            // uri: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            // uri:"https://wallpaperaccess.com/full/2154206.jpg"
          uri:"https://media-exp2.licdn.com/dms/image/C4D03AQGq_AF1K9Fhig/profile-displayphoto-shrink_800_800/0/1653107701902?e=1663804800&v=beta&t=CtvhpONVXXHRAnjiPUp1ME9YehEkKLDIVIXD4I4Uwls"
          }}
          style={styles.imgStyle}
        />
      </View>

      <View style={styles.BlueView}>
        <Text style={{ fontWeight: "bold", fontSize: 25, color: "white", textAlign: "center" }}>About Me</Text>
        <Text style={{ color: "white", textAlign: "justify",fontSize:14 }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fuga velit, excepturi impedit, quos doloribus ratione ullam necessitatibus
          dolores atque tempore perspiciatis in officia. Dolor officiis in sequi accusantium corrupti?
        </Text>
      </View>

      <View style={styles.Logos}>
        <TouchableOpacity   onPress={()=>Linking.openURL  ('https://www.instagram.com/waqasjutt4334/') } >
          <Image
        
            style={{
              width: "100%",
              height: 50,
              aspectRatio: 1,
            }}
            source={{ uri: "https://img.icons8.com/color/344/instagram-new--v1.png" }}
          />
        </TouchableOpacity>


        <TouchableOpacity   onPress={()=>Linking.openURL  ('https://www.linkedin.com/in/waqasahmed4334/') } >
          <Image
            style={{
              width: "100%",
              height: 50,
              aspectRatio: 1,
            }}
            source={{ uri: "https://img.icons8.com/color/344/linkedin.png" }}
          />
        </TouchableOpacity>
        <TouchableOpacity   onPress={()=>Linking.openURL  ('https://www.facebook.com/profile.php?id=100009737317053') } >
          <Image
            style={{
              width: "100%",
              height: 50,
              aspectRatio: 1,
            }}
            source={{ uri: "https://img.icons8.com/color/344/facebook-new.png" }}
          />
        </TouchableOpacity>
      </View>
    </View>
              </ImageBackground>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: "5%",
    // backgroundColor: "#FAFAFA",
  },

  imgStyle: {
    width: "100%",
    height: 200,
    aspectRatio: 1,
    borderRadius: 100,
    marginTop:"2%"
  },

  BlueView: {
    backgroundColor: "#478CD1",
    padding: "2%",
    marginTop: "8%",
    width:"100%"
  },
  Logos: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems:"center",
    marginTop:"15%",
height:"10%",
width:"100%",
    borderWidth:1,
  },
});
