import React from 'react';

import {
  Text, StyleSheet, View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  welcome: {
    color: '#222',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Main = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>MeuTimeFC</Text>
  </View>
);

export default Main;
