import React, { useEffect } from "react";
import { Button, TextInput,Dialog,Paragraph } from "react-native-paper";
import { BlurView } from "expo-blur";
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from "react-native";

export const Auth = ({ navigation }) => {

  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  const [text, ChangeText] = React.useState("");
  const [number, ChangeNumber] = React.useState("");
  const clicked = () => {
    if (text === "waqas" && number === "726336") {
      setVisible  (true);
      setTimeout(()=>
      {
        
        navigation.navigate("Education");
        
      },1000)
      
    } else {
      alert("Wrong Credentials");
    }
  };

  useEffect(() => {
    ChangeText("");
    ChangeNumber("");
  }, []);
  return (
    <>
      <View style={styles.container}>
       
       
        <ImageBackground

          source={{
            uri: "https://i.pinimg.com/564x/3e/fa/b4/3efab4f27f36f4ae37571cfc72a41e53.jpg",
            // uri: "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",

          }}

          style={{ width: "100%", height: "100%",
          }}>
          
          

          
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}>
       
            <BlurView
              intensity={150}
              BlurTint  = "light"
              style={{
                margin: "5%",
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 10,
              }} >
              <View style={styles.loginContainer}>
                <TextInput label="Email" value={text} onChangeText={ChangeText} mode="outlined" outlineColor="white" activeOutlineColor="blue" />

                <TextInput
                  label="Password"
                  value={number}
                  onChangeText={ChangeNumber}
                  mode="outlined"
                  outlineColor="white"
                  activeOutlineColor="blue"
                  secureTextEntry={true}
                  keyboardType="numeric"
                />

                <Button
                  style={{
                    borderRadius: 10,
                    elevation: 5,

                    marginHorizontal: "36%",
                    marginTop: "6%",
                  }}
                  icon="login"
                  color="coral"
                  mode="contained"
                  onPress={clicked}>
                  Login
                </Button>
              </View>
            </BlurView>
          </View>
        </ImageBackground>
      </View>

      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Login Successfull 😊</Dialog.Title>
   
      </Dialog>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blurContainer: {
    height: "100%",
    width: "100%",
    borderWidth: 1,
  },
  image: {
    height: "100%",

    width: "100%",
    resizeMode: "cover",
  },
  loginContainer: {
    padding: "5%",
  },
});
