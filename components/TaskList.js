import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const TaskList = (props) => {
  const checkBtn = (
    <Icon
      name={props.todo.isChecked ? "check-circle" : "circle"}
      size={30}
      color={props.todo.isChecked ? "green" : "black"}
      style={styles.btnCheck}
      onPress={() => props.checkTodo(props.todo.key)}
    />
  );

  const delBtn = (
    <Icon
      name='trash'
      style={styles.btnDel}
      onPress={() => props.deleteTodo(props.todo.key)}
      size={32}
      color='red'
    />
  );
  return (
    <View style={styles.list}>
      <Text style={styles.todos}>
        {props.todo.name}
        {checkBtn}
        {delBtn}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    width: 300,
  },
  todos: {
    display: "flex",
    width: "75%",
    fontSize: 24,
    left: 3,
  },
  // works only on web
  btnCheck: {
    paddingLeft: 190,
  },
  btnDel: {
    paddingLeft: 20,
  },
});

export default TaskList;
