import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textbox: {
    borderWidth: 1,
    borderColor: "#7F39FB",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: "80%",
  },
});

const Todo = (props) => {
  const [title, setTitle] = useState("");

  return (
    <View style={styles.todo}>
      <TextInput
        placeholder="Add a todo"
        value={title}
        onChangeText={(value) => setTitle(value)}
        style={styles.textbox}
      />
      <Button title="Add" color="#7F39FB" onPress={props.addTodo} />
    </View>
  );
};

export default Todo;
