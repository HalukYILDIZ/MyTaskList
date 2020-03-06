/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <View style={styles.screen}>
      <Text>My Task List</Text>
      <View style={styles.inputbuttonview}>
        <TextInput placeholder="Task item" style={styles.inputText} />
        <Button title="ADD" style={styles.button} />
      </View>
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
  button: {
    flex: 5,
  },
});

export default App;
