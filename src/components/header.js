import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Make a component
const Header = () => {
  return <Text style={styles.textStyle}>🎵 Music</Text>;
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontWeight: '700'
  }
});

// Make a component available for the entire app
export default Header;
