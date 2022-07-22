import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView } from "react-native";
import React, { useState } from "react";

export const ColorGenerator = () => {
  const [color, setColor] = useState([]);
  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
  };

  console.log(color);
  return (
    <>

        <TouchableOpacity
          style={{
            backgroundColor: "teal",
            padding: "3%",
            marginTop: "10%",
          }}
          onPress={() => {
            setColor([...color,randomColor()]);

          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Random Generate color
          </Text>
        </TouchableOpacity>

      
<ScrollView>

<View

style={{
    
    marginTop: "3%",
    alignItems: "center",
}}>

    {
        color.map((item,index)=>{
            return <View style={[{ backgroundColor: item, width: 100, height: 100 }, styles.imgContainer]}></View>
        }
        )
    }

</View>

    </ScrollView>
            
    </>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    marginTop: "10%",
  },
});
