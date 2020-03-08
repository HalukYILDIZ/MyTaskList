import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const TaskInput = props => {
  const [enteredTask, setEnteredTask] = useState('');

  const taskInputHandler = enteredText => {
    setEnteredTask(enteredText);
  };

  return (
    <View style={styles.inputbuttonview}>
      <TextInput
        placeholder="Task item"
        style={styles.inputText}
        onChangeText={taskInputHandler}
        value={enteredTask}
      />
      <Button
        title="ADD"
        style={styles.button}
        onPress={() => props.onAddTask(enteredTask)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 4,
    marginBottom: 10,
    padding: 10,
  },
  button: {},
  inputbuttonview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default TaskInput;
