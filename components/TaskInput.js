import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native';

const TaskInput = props => {
  const [enteredTask, setEnteredTask] = useState('');

  const taskInputHandler = enteredText => {
    setEnteredTask(enteredText);
  };

  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <View style={styles.inputbuttonview}>
        <TextInput
          placeholder="Task item"
          style={styles.inputText}
          onChangeText={taskInputHandler}
          value={enteredTask}
        />
        <View style={styles.buttonViewContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={() => {
                props.onCancel();
                setEnteredTask('');
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={() => {
                props.onAddTask(enteredTask);
                setEnteredTask('');
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonViewContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  inputText: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 4,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    //flex: 1,
    width: '40%',
  },
  inputbuttonview: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TaskInput;
