import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  list: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  todos: {
    width: "80%",
    fontSize: 20,
  },
});

const TaskList = (props) => {
  return (
    <View style={styles.list}>
      <Text style={styles.todos}>{props.todo.name}</Text>
    </View>
  );
};

export default TaskList;
