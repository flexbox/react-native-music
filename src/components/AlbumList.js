import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AlbumList = () => {
  return (
    <View style={styles.row}>
      <Text>Albumss</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#fff',
  }
});

export default AlbumList;
