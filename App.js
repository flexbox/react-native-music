import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          text={'🎵 Music'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
