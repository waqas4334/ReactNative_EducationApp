import { StyleSheet, Text, FlatList, View } from "react-native";
import React from "react";

const List = () => {
  const arr = [
    {
      id: "1",
      name: "waqas",
      age: "21",
      city: "pkp",
    },
    {
      id: "2",
      name: "ahmed",
      age: "23",
      city: "lhr",
    },
    {
      id: "3",
      name: "ahmed",
      age: "23",
      city: "lhr",
    },
    {
      id: "4",
      name: "ahmed",
      age: "23",
      city: "lhr",
    },
    {
      id: "5",
      name: "ahmed",
      age: "23",
      city: "lhr",
    },
    {
      id: "6",
      name: "ahmed",
      age: "23",
      city: "lhr",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
      numColumns={2}
        keyExtractor={item => {
          return item.id;
        }}
        data={arr}
        renderItem={({ item }) => {
          return <Text style={styles.list}>{item.name}</Text>
        }}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    marginTop: "15%",
  },
  list: {

    padding: "5%",
margin:"10%",

    backgroundColor: "teal",
    borderRadius: 10,
  },
});
