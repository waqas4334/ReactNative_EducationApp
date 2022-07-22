// import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from "react-native";
import List from "./components/List";
import Images from "./components/Images";
import Cards from "./components/Cards";
import { Cafe } from "./components/Multiple";
import Properties from "./components/Properties";
import NetflixCard from "./components/NetflixCard";
import { BoxModel } from "./components/BoxModel";
import { NetflixHorizontalCards } from "./components/NetflixHorizontalCards";
import { FlexBoxPractice } from "./components/FlexBoxPractice";
import { Couter } from "./components/Couter";
import { ColorGenerator } from "./components/project/ColorGenerator";
import { Hookeffect } from "./components/Hookeffect";
import { Provider as PaperProvider } from "react-native-paper";
import { EducationHome } from "./components/project/EducationHome";
import { Students } from "./components/EducationStudents";
import { EducationProfile } from "./components/EducationProfile";
import { Educationcontact } from "./components/Educationcontact";
import { Educationcourse } from "./components/Educationcourse";
import { Auth } from "./components/Auth";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();


export default function App() {
 

  return (
    <>
      {/* 

    <ColorGenerator/> */}
      {/* <View
        style={{
          flex: 1,
        }}
      >
        <ImageBackground
          source={{
            uri: "https://assets.nflxext.com/ffe/siteui/vlv3/271ac55e-7228-438e-824e-92db37981e59/2d5275b9-0ba0-4085-9d72-dcd6d9103161/PK-en-20220627-popsignuptwoweeks-perspective_alpha_website_medium.jpg",
          }}
          resizeMode="repeat"
          style={styles.bKimage}
        >
          <ScrollView 
          
          >
            <View style={{ justifyContent: "center", alignItems: "center", display: "flex", marginTop: "12%" }}>
              <Image
                style={{
                  width: 350,
                  height: 80,
                  resizeMode: "cover",
                }}
                source={{ uri: "https://pngimg.com/uploads/netflix/netflix_PNG32.png" }}
              />
            </View>

            <NetflixCard
              Godfather="The Godfather"
              godfathersrc="https://images.unsplash.com/photo-1633353236445-000a4b333663?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
            <NetflixCard Godfather="World War Z" godfathersrc="https://i.pinimg.com/564x/20/08/17/200817ba92eccdc916f6cecec008f733.jpg" />
            <NetflixCard Godfather="Sexe Intensions" godfathersrc="https://i.pinimg.com/564x/05/2e/1e/052e1e0fef5aa98abae0676f3a31da00.jpg" />
            <NetflixCard Godfather="The Tourist" godfathersrc="https://i.pinimg.com/564x/85/9a/01/859a01fca3f4f9b1e4574f910c6ac348.jpg" />
            <NetflixCard Godfather="The Fifty Shades of grey" godfathersrc="https://i.pinimg.com/564x/86/96/f8/8696f82b0c8458bfc2ef4d43b743e2ae.jpg" />
            <NetflixCard Godfather="Doctor Strange" godfathersrc="https://i.pinimg.com/564x/5f/30/8d/5f308d8289c8d8c1003ce443719a7119.jpg" />
          </ScrollView>
        </ImageBackground>
      </View>  

{/* <FlexBoxPractice/> */}
      {/* <Couter/> */}
      {/* <Hookeffect/> */}

      {/* <BSDK /> */}

{/* 

        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={EducationHome} />
        </Drawer.Navigator> */}



   <NavigationContainer>

  
          <Stack.Navigator
            initialRouteName="Education"
            screenOptions={{
              headerStyle: {
                backgroundColor: "teal",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
            
          >
            <Stack.Screen
              name="Home"
              component={Auth}
              options={{
                headerShown: false,
              }}/>

            <Stack.Screen name="Netflix" component={NetflixCard} />
            <Stack.Screen
              name="Education"
              component={EducationHome}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Couter" component={Couter} />
            <Stack.Screen name="Students" component={Students}
            options={{

              headerTitleAlign:'center',
              headerTitle:"List of Students"
            }}
            />
            <Stack.Screen
              name="Course"
              component={Educationcourse}
              options={{
                headerTitle: "Courses",
      headerTitleAlign:"center"
              }}
            />
            <Stack.Screen name="EducationContact" component={Educationcontact} 
            options={{

              headerTitle:"Contact Us",
              headerTitleAlign:"center"
            }}
            />
            <Stack.Screen
              name="Profile"
              component={EducationProfile}
              options={{
                headerTitleStyle: {
                  fontSize: 20,
                },
                headerTitleAlign: "center",
              }}
            />
          </Stack.Navigator> 
          </NavigationContainer>
    </>
  );
}
