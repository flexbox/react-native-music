import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <View style={styles.row}>
        {this.renderAlbums()}
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
