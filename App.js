import React, { useLayoutEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import Header from "./components/header";
import TodoList from "./components/taskList";
import AddTodo from "./components/addTodo";

const Todo = () => {
  const [todos, setTodos] = useState([
    { text: "hello world", id: "1", done: false },
  ]);
  const [status, setStatus] = useState("ALL");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useLayoutEffect(() => {
    filterHandler();
  },[todos, status])

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

  const deleteHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
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

  const filterHandler = () => {
    switch (status) {
      case "DONE":
        setFilteredTodos(todos.filter((todo) => todo.done === true));
        break;
      case "UNDONE":
        setFilteredTodos(todos.filter((todo) => todo.done === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  console.log(todos);
  console.log(status);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              // keyExtractor={(item) => item.index_id.toString()}
              data={filteredTodos}
              renderItem={({ item }) => (
                <TodoList
                  item={item}
                  deleteHandler={deleteHandler}
                  checkHandler={checkHandler}
                  setStatus={setStatus}
                  filterHandler={filterHandler}
                />
              )}
            ></FlatList>
          </View>
        </View>
        <View style={styles.filter}>
          <View style={styles.actionBtn}>
            <Button
              title='Done'
              color='#8A2BE2'
              onPress={(e) => {
                setStatus(e.target.innerText);
              }}
            />
          </View>
          <View style={styles.actionBtn}>
            <Button
              title='All'
              color='#8A2BE2'
              onPress={(e) => {
                setStatus(e.target.innerText);
              }}
            />
          </View>
          <View style={styles.actionBtn}>
            <Button
              title='Undone'
              color='#8A2BE2'
              onPress={(e) => {
                setStatus(e.target.innerText);
              }}
            />
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
    padding: 25,
    paddingBottom: 0,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "lightblue",
  },
  actionBtn: {
    flex: 1,
    height: "100%",
    borderColor: "#8A2BE2",
    borderWidth: 1,
    padding: 22,
    borderBottomWidth: 0,
    backgroundColor: "lightblue",
  },
});

export default Todo;
