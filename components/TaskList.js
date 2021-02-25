import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TodoList = ({ item, deleteHandler, checkHandler }) => {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (item.done === true) {
      setPressed(true);
    }
  }, []);

  return (
    <View style={styles.item}>
      <AntDesign
        name='delete'
        size={24}
        color='red'
        onPress={() => deleteHandler(item.key)}
      />
      <Text
        style={{
          opacity: pressed ? 0.3 : 1,
          textDecorationLine: pressed ? "line-through" : "none",
        }}
      >
        {item.text}
      </Text>
      <AntDesign
        name='checkcircle'
        size={24}
        color={pressed ? "green" : "black"}
        onPress={() => {
          checkHandler(item.key);
          setPressed(!pressed);
        }}
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
    justifyContent: "space-between",
  },
});

export default TodoList;
