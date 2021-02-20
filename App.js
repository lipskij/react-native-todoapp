import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
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
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            // keyExtractor={(item) => item.index_id.toString()}
            data={todos}
            renderItem={({ item }) => (
              <TodoList item={item} pressHandler={pressHandler} />
            )}
          ></FlatList>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

export default Todo;
