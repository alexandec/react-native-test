import { FlatList } from 'react-native';

import ColorBox from './ColorBox';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
  { colorName: 'Base031', hexCode: '#002b36' },
  { colorName: 'Base022', hexCode: '#073642' },
  { colorName: 'Base013', hexCode: '#586e75' },
  { colorName: 'Base004', hexCode: '#657b83' },
  { colorName: 'Base05', hexCode: '#839496' },
  { colorName: 'Base16', hexCode: '#93a1a1' },
  { colorName: 'Base27', hexCode: '#eee8d5' },
  { colorName: 'Base38', hexCode: '#fdf6e3' },
  { colorName: 'Yellow3', hexCode: '#b58900' },
  { colorName: 'Orange4', hexCode: '#cb4b16' },
  { colorName: 'Red2', hexCode: '#dc322f' },
  { colorName: 'Magenta2', hexCode: '#d33682' },
  { colorName: 'Violet3', hexCode: '#6c71c4' },
  { colorName: 'Blue4', hexCode: '#268bd2' },
  { colorName: 'Cyan5', hexCode: '#2aa198' },
  { colorName: 'Green6', hexCode: '#859900' },
];

const renderItem = ({ item }) => {
  return <ColorBox colorName={item.colorName} hexCode={item.hexCode} />;
};

const ColorList = () => {
  return (
    <FlatList
      data={COLORS}
      renderItem={renderItem}
      keyExtractor={(item) => item.colorName}
    />
  );
};

export default ColorList;
