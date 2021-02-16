import React, { useEffect } from "react";
import { StyleSheet, View, TextInput, Button, ScrollView } from "react-native";
import TaskList from "./components/TaskList";
import Todo from "./components/Todo";

export default function App() {
  const [text, setText] = React.useState("");

  const [todo, setTodo] = React.useState({});

  const [todos, setTodos] = React.useState([]);

  const addTodo = () => {
    if (text.length > 0) {
      setTodos([...todos, { key: Date.now(), name: text, isChecked: false }]);
      setText("");
    }
  };

  useEffect(() => {
    console.log(todos.length);
  }, [todos]);

  return (
    <View style={styles.container}>
      <View style={styles.inputBar}>
        <TextInput
          style={{ backgroundColor: "transparent", width: "80%" }}
          placeholder="Add task"
          onChangeText={(value) => setText(value)}
          value={text}
        />
        <Button
          title="ADD"
          accessibilityLabel="Add task"
          onPress={() => addTodo()}
        />
      </View>
      <View >
        <ScrollView style={{paddingTop: 200}}>
          {todos.map((todo) => (
            <TaskList key={todo.key} todo={todo} />
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
    display: "flex",
    flexDirection: "row",
    margin: 5,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#888",
    borderRadius: 10,
    backgroundColor: "#fff",
    top: 150,
  },
});
