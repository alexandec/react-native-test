import { View, Text, FlatList, StyleSheet } from 'react-native';

import ColorBox from '../components/ColorBox';

const renderItem = ({ item }) => {
  return <ColorBox colorName={item.colorName} hexCode={item.hexCode} />;
};

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;

  return (
    <View>
      <FlatList
        data={colors}
        renderItem={renderItem}
        keyExtractor={(item) => item.colorName}
        style={styles.container}
        ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default ColorPalette;
