import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Header from "./components/header";
import ListItem from "./components/list";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить ...", key: "1" },
    { text: "Помыть ...", key: "2" },
    { text: "Сделать ...", key: "3" },
  ]);
  return (
    <View style={styles.header}>
      <Header />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => <ListItem el={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
});
