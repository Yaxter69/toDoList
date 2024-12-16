import React, { useState } from "react";
import { StyleSheet, TextInput, Text, Button, View } from "react-native";

export default function Form({ addHandler }) {
  const [text, setValue] = useState("");

  const onChange = (text) => {
    setValue(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Впишите задачу..."
      />
      <Button
        color="#AA96DA"
        onPress={() => addHandler(text)}
        title="Добавить задачу"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    textAlign: "left",
    fontSize: 15,
    marginTop: 40,
    marginBottom: 40,
    borderBottomWidth: 1,
    width: "60%",
    marginLeft: "20%",
  },
});
