import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Switch,
  Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { COLORS } from '../utils/constants';

const ColorPaletteModal = ({ navigation }) => {
  const [paletteName, setPaletteName] = useState('');
  const [toggles, setToggles] = useState({});

  const onToggleChange = (color, value) => {
    setToggles({ ...toggles, [color]: value });
  };

  const onSubmit = () => {
    // Filter out empties, then map to color => hexCode pairs
    const colors = Object.keys(toggles)
      .filter((t) => toggles[t])
      .map((color) => COLORS.find((i) => i.colorName === color));

    if (!paletteName) {
      Alert.alert('Error', 'Please enter a palette name');
      return;
    }
    if (!colors.length) {
      Alert.alert('Error', 'Please select at least one color');
      return;
    }

    navigation.navigate('Home', { paletteName, colors });
  };

  return (
    <View style={styles.container}>
      <Text>Name of your color palette</Text>
      <TextInput
        placeholder="My Palette"
        style={styles.input}
        value={paletteName}
        onChangeText={setPaletteName}
      />
      <FlatList
        data={COLORS}
        renderItem={({ item }) => {
          const { colorName } = item;
          return (
            <View style={styles.toggleRow}>
              <Text>{colorName}</Text>
              <Switch
                value={toggles[colorName]}
                onValueChange={(value) => onToggleChange(colorName, value)}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.colorName}
        style={styles.toggleList}
      />
      <TouchableOpacity onPress={onSubmit} style={styles.submitButton}>
        <Text>Submit</Text>
      </TouchableOpacity>
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
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  toggleList: {
    flexGrow: 0,
    height: 500,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  submitButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#00A0B0',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default ColorPaletteModal;
