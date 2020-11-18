import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class EmptyShelvesScreen extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  }
});