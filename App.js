/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const App = () => {
  const [enteredTask, setEnteredTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const taskInputHandler = enteredText => {
    setEnteredTask(enteredText);
  };

  const addTaskHandler = () => {
    setTasks(currentTasks => [
      ...currentTasks,
      {key: Math.random().toString(), value: enteredTask},
    ]);
  };

  return (
    <View style={styles.screen}>
      <Text>My Task List</Text>
      <View style={styles.inputbuttonview}>
        <TextInput
          placeholder="Task item"
          style={styles.inputText}
          onChangeText={taskInputHandler}
          value={enteredTask}
        />
        <Button title="ADD" style={styles.button} onPress={addTaskHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={tasks}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  inputbuttonview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 4,
    marginBottom: 10,
    padding: 10,
  },
  button: {},
  listItem: {
    padding: 10,
    margin: 1,
    backgroundColor: 'grey',
    borderColor: 'black',
    borderBottomWidth: 1,
  },
});

export default App;
