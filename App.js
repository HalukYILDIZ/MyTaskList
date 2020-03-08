/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = taskTitle => {
    setTasks(currentTasks => [
      ...currentTasks,
      {key: Math.random().toString(), value: taskTitle},
    ]);
  };

  const deleteTask = deletedKey => {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.key !== deletedKey);
    });
  };

  return (
    <View style={styles.screen}>
      <TaskInput onAddTask={addTaskHandler} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={tasks}
        renderItem={itemData => (
          <TaskItem
            onDelete={() => deleteTask(itemData.item.key)}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
});

export default App;
