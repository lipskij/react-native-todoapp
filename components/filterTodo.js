import React, {useState} from "react";
import { StyleSheet, View, Button } from "react-native";

const FilterTodo = () => {
  const [status, setStatus] = useState("ALL");
  console.log(status)

  return (
    <View style={styles.filter}>
      <View style={styles.actionBtn}>
        <Button title='Done' color='#8A2BE2'  onPress={(e) => {setStatus(e.target.innerText)}} />
      </View>
      <View style={styles.actionBtn}>
        <Button title='All' color='#8A2BE2' onPress={(e) => {setStatus(e.target.innerText)}}/>
      </View>
      <View style={styles.actionBtn}>
        <Button title='Undone' color='#8A2BE2' onPress={(e) => {setStatus(e.target.innerText)}}/>
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
