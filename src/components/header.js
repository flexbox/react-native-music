import React from 'react';
import { Text } from 'react-native';

// Make a component
const Header = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}>Albums</Text>;
}

const styles = {
  textStyle: {
    fontSize: 24,
    fontWeight: '700'
  }
};

// Make a component available for the entire app
export default Header;
