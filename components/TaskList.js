import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TaskList = ({ item, pressHandler, checkHandler }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.item}>
      <AntDesign
        name='delete'
        size={24}
        color='red'
        onPress={() => pressHandler(item.key)}
      />
      <Text style={styles.task}>{item.text}</Text>
      <AntDesign
        name='checkcircle'
        size={24}
        color={pressed ? "green" : "black"}
        onPress={() => {checkHandler(item.id); setPressed(!pressed)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    marginTop: 16,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: 'center'
  },
  task: {
    marginLeft: 80,
    marginRight: 80
  },
});

export default TaskList;
