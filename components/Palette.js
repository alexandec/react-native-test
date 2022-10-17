import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import PreviewPalette from './PreviewPalette';

const Palette = ({ palette, handlePress }) => {
  return (
    <TouchableOpacity style={styles.palette} onPress={handlePress}>
      <Text style={styles.text}>{palette.paletteName}</Text>
      <PreviewPalette colors={palette.colors} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  palette: {
    marginBottom: 20,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default Palette;
