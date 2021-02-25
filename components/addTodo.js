import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Add task'
        onChangeText={(val) => setText(val)}
        value={text}
      />
      <Button onPress={() => submitHandler(text)} title='ADD' color='#8A2BE2' />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default AddTodo;
