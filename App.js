import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.pink, styles.container]}>
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pink: {
    backgroundColor: 'pink',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  safeArea: {
    flex: 2,
  },
});
