import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";



export const Couter = ({ navigation, route }) => {
  const [count, setCount] = useState(0);
  const name = route.params.name;

  return (
    <>
      <View
        style={{
          marginTop: "10%",
        }}
      >
        <Text>{name}</Text>
      </View>
      <View style={{ marginTop: 50, alignItems: "center" }}>
        <TouchableOpacity style={{ backgroundColor: "red", padding: 10 }}>
          <Text onPress={() => setCount(count + 10)}>Increment</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 20, color: "white", backgroundColor: "teal", padding: "2%" }}>{count}</Text>

        <TouchableOpacity style={{ backgroundColor: "red", padding: 10 }}>
          <Text onPress={() => (count === 0 ? null : setCount(count - 10))}>Decrement</Text>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 30,
          }}
        >
          <Button title="reset" onPress={() => setCount(0)} />
    
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
