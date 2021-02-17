import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import TaskList from "./components/TaskList";
import Icon from "react-native-vector-icons/FontAwesome";

// idk but on secont try add button dont work as well as text input

export default function App() {
  const [text, setText] = React.useState("");

  // const [todo, setTodo] = React.useState({});

  const [todos, setTodos] = React.useState([]);

  const addTodo = () => {
    if (text.length > 0) {
      setTodos([...todos, { key: Date.now(), name: text, isChecked: false }]);
      setText("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.key !== id;
      })
    );
  };

  const checkTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === id) {
          todo.isChecked = !todo.isChecked;
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    console.log(todos.length);
  }, [todos]);

  return (
    <View style={styles.container}>
      <View style={styles.inputBar}>
        <TextInput
          style={{ backgroundColor: "transparent", width: "90%" }}
          placeholder="Add task"
          onChangeText={(value) => setText(value)}
          value={text}
          autoFocus={true}
        />
        <TouchableHighlight
          style={{ alignItems: "center", justifyContent: "center" }}
          underlayColor="transparent"
          onPress={() => addTodo()}
        >
          <View>
            <Icon name="plus" size={30} color="lightblue" />
          </View>
        </TouchableHighlight>
      </View>

      <View>
        <ScrollView style={{ paddingTop: 200 }}>
          {todos.map((todo) => (
            <TaskList
              key={todo.key}
              todo={todo}
              deleteTodo={deleteTodo}
              checkTodo={checkTodo}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  inputBar: {
    flexDirection: "row",
    margin: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#888",
    borderRadius: 10,
    backgroundColor: "#fff",
    top: 150,
  },
});
