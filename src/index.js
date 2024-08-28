import { StyleSheet, Text, View, FlatList, BackHandler } from "react-native";
import ListItem from "./components/ListItem";
import Input from "./components/Input";
import { connect } from "react-redux";
import { complete, saveTodo } from "./reducers/todos";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  list: {
    alignSelf: "stretch",
  },
});

const App = ({ data, complete, submit }) => {
  const [value, setValue] = useState("");

  const handlerChange = (val) => {
    console.log(value);
    setValue(val);
  };

  const handleSubmit = () => {
    submit(value);
    setValue("");
  };

  return (
    <View style={styles.container}>
      <Input onSubmit={handleSubmit} onChange={handlerChange} value={value} />
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(x) => String(x.id)}
        renderItem={({ item }) => (
          <ListItem
            completed={item.completed}
            onPress={() => complete(item.id)}
            desc={item.desc}
          />
        )}
      />
    </View>
  );
};

const mapsStateToProps = (state) => {
  console.log("state", state);
  return { data: state.todos };
};

const mapDispatchToProps = (dispatch) => ({
  complete: (id) => dispatch(complete(id)),
  submit: (val) => dispatch(saveTodo(val)),
});

export default connect(mapsStateToProps, mapDispatchToProps)(App);
