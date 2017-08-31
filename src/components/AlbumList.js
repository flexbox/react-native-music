import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

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
    backgroundColor: '#fff'
  }
});

export default AlbumList;
