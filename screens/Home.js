import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import Palette from '../components/Palette';

export const PALETTE_URL =
  'https://color-palette-api.kadikraman.now.sh/palettes';

const Home = ({ route, navigation }) => {
  const [palettes, setPalettes] = useState([]);
  const { paletteName, colors } = route.params || {};

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

  useEffect(() => {
    if (paletteName && colors?.length) {
      setPalettes([...palettes, { paletteName, colors }]);
    }
  }, [paletteName]);

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
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ColorPaletteModal');
            }}
          >
            <Text style={styles.text}>Add a color scheme</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00A0B0',
    marginBottom: 20,
  },
});

export default Home;
