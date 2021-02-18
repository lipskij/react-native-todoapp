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
        {checkBtn}
      <Text style={styles.todos}>
        {props.todo.name}
      </Text>
        {delBtn}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'stretch',
    width: 300,
  },
  todos: {
    width: "75%",
    fontSize: 24,
    left: 10,
  },
  btnCheck: {
    left: 10,
    right: 20,
  },
  btnDel: {
    left: 10,
    width: 50,
  },
});

export default TaskList;
