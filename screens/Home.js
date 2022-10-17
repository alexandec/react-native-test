import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { PALETTES } from '../utils/constants';
import Palette from '../components/Palette';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PALETTES}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <Palette
            palette={item}
            handlePress={() => navigation.navigate('ColorPalette', item)}
          />
        )}
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

export default Home;
