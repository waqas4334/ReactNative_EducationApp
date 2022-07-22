import { StyleSheet, Text, View, ScrollView, Image,ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Hookeffect = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);



  const fetchData = async () => {
    try {
      await axios.get("https://jsonplaceholder.typicode.com/photos/18")
        .then(res => {

            setData(res.data);
            console.log(res.data);
            setLoading(false);
            }
        )
        
    }
    catch (error) {
        console.log(error);
    }
  
 
  }
// alert(data.url);
  useEffect(() => {
    fetchData();
  }, []);

  return (
  <>
  <View
   style={styles.container}
  >
    {
      loading ? <ActivityIndicator size="large" color="#0000ff" /> :
      <ScrollView>
        <View>
          <Image
            style={{
              width: 350,
              height: 80,
              resizeMode: "cover",
            }}
            source={{ uri: data.url }}
          />
        </View>
      </ScrollView>

    }
  </View>
  </>

  )
  
  }


  
const styles = StyleSheet.create({
  container:{

    flex:1,
    marginTop:'20%',
  }
});