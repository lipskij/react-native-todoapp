import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  list: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  todos: {
    width: "75%",
    fontSize: 24,
    left: 10,
  },
  btnCheck: {
    left: 10,
    width: 50,
    height: 50,
  },
  btnDel: {
    left: 10,
    width: 50,
    height: 50,
  },
});

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
      name="trash"
      style={styles.btnDel}
      onPress={() => props.deleteTodo(props.todo.key)}
      size={32}
      color="red"
    />
  );
  return (
    <View style={styles.list}>
      {checkBtn}
      <Text style={styles.todos}>{props.todo.name}</Text>
      {/* <View></View> */}
      <View>{delBtn}</View>
    </View>
  );
};

export default TaskList;
