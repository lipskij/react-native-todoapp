import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const TaskList = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
});

export default TaskList;
