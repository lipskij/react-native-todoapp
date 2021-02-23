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
import FilterTodo from "./components/filterTodo";

const Todo = () => {
  const [todos, setTodos] = useState([
    { text: "hello world", id: "1", done: false },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString(), done: false },
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert("OOPS", "Task must be over 3 characters long", [
        { text: "OK", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  const checkHandler = (key) => {
    setTodos(
      todos.map((todo) => {
        if (!todo.done) {
          return todo.key !== key ? { ...todo } : { ...todo, done: true };
        } else {
          return todo.key !== key ? { ...todo } : { ...todo, done: false };
        }
      })
    );
  };

  const filterDone = () => {
    setTodos(
      todos.filter((todo) => {
        if (todo.done === true) {
          return todo.done === true;
        }
      })
    );
  };

  const filterUndone = () => {
    setTodos(
      todos.filter((todo) => {
        if (todo.done === false) {
          return todo.done === false;
        }
      })
    );
  };

  console.log(todos);

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
        <FilterTodo filterDone={filterDone} filterUndone={filterUndone} />
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
    padding: 25,
    paddingBottom: 0,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});

export default Todo;
