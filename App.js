import { View, SafeAreaView, StyleSheet } from 'react-native';
import ColorList from './components/ColorList';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ColorList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 2,
  },
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});
