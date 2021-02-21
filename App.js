import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoList from "./components/taskList";
import AddTodo from "./components/addTodo";

const Todo = () => {
  const [todos, setTodos] = useState([{ text: "hello world", id: 1 }]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS", "Task must be over 3 characters long", [
        { text: "OK", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  const checkHandler = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.key !== id;
      })
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              // keyExtractor={(item) => item.index_id.toString()}
              data={todos}
              renderItem={({ item }) => (
                <TodoList
                  item={item}
                  pressHandler={pressHandler}
                  checkHandler={checkHandler}
                />
              )}
            ></FlatList>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});

export default Todo;
