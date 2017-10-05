import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import App from './src/App';

export default class tech_stack extends Component {
  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('tech_stack', () => tech_stack);
