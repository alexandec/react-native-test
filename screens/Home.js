import React, { useState, useCallback, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import Palette from '../components/Palette';

export const PALETTE_URL =
  'https://color-palette-api.kadikraman.now.sh/palettes';

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);

  const fetchPalettes = useCallback(async () => {
    const result = await fetch(PALETTE_URL);
    if (result.ok) {
      const json = await result.json();
      setPalettes(json);
    }
  }, []);

  useEffect(() => {
    fetchPalettes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={palettes}
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
