import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  return (
    <View style={[styles.box, { backgroundColor: hexCode }]}>
      <Text style={styles.text}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 10,
  },
  text: {
    color: 'white',
  },
});

export default ColorBox;
