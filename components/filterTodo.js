import React from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FilterTodo = ({item, filterDone}) => {

  return (
    <View style={styles.filter}>
      <View style={styles.actionBtn}>
        <Button title='Done' color='#8A2BE2'  onPress={() => filterDone()} />
      </View>
      <View style={styles.actionBtn}>
        <Button title='All' color='#8A2BE2' />
      </View>
      <View style={styles.actionBtn}>
        <Button title='Undone' color='#8A2BE2' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default FilterTodo;
