import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#aa96da",
    paddingTop: 40,
  },
  text: {
    textAlign: "center",
    color: "#ffffff",
    margin: 20,
    fontSize: 20,
    fontWeight: "800",
  },
});
