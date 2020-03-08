import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const TaskItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 1,
    backgroundColor: 'grey',
    borderColor: 'black',
    borderBottomWidth: 1,
  },
});

export default TaskItem;
