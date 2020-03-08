/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, FlatList, View, Button} from 'react-native';

import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTaskHandler = taskTitle => {
    setIsAddMode(false);
    setTasks(currentTasks => [
      ...currentTasks,
      {key: Math.random().toString(), value: taskTitle},
    ]);
  };
  const cancelTaskAddition = () => {
    setIsAddMode(false);
  };

  const deleteTask = deletedKey => {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.key !== deletedKey);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Task" onPress={() => setIsAddMode(true)} />
      <TaskInput
        onAddTask={addTaskHandler}
        isVisible={isAddMode}
        onCancel={cancelTaskAddition}
      />
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
