import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 38,
    backgroundColor: "lightblue",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Header;
