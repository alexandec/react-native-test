import { View, FlatList, StyleSheet } from 'react-native';

const PreviewPalette = ({ colors }) => {
  return (
    <FlatList
      data={colors.slice(0, 5)}
      renderItem={({ item }) => (
        <View
          style={[styles.previewItem, { backgroundColor: item.hexCode }]}
        ></View>
      )}
      keyExtractor={(item) => item.hexCode}
      horizontal={true}
    />
  );
};

const styles = StyleSheet.create({
  previewItem: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
});

export default PreviewPalette;
