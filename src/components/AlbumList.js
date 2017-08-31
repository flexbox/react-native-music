import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AlbumList extends Component {
  render() {
    return (
      <View style={styles.row}>
        <Text>Album List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#fff',
  }
});

export default AlbumList;
