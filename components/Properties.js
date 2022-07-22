import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import ImagesAll from './Images'

const Properties = () => {
  return (
    <View style={styles.Imagecontainer}>
      <ScrollView>
    <ImagesAll 
    imagedata="this is a image whatsapp"
    imgsrc={require("../assets/WA.jpg")}
    
    />
    <ImagesAll imagemeta="this is a image meta"
    imgmeta={require("../assets/meta.jpg")}
    
    />
    <ImagesAll/>
    <ImagesAll/>
     <ImagesAll/>
    <ImagesAll/>
    <ImagesAll/>
    <ImagesAll/> 
    <ImagesAll/>
    <ImagesAll/>
    <ImagesAll/>
    <ImagesAll/>
      </ScrollView>
    </View>
  );
};

export default Properties;

const styles = StyleSheet.create({
  Imagecontainer: {
    marginTop: 50,
  },
});
