import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold' }}>
          Here are some boxes of different colors
        </Text>
        <View style={[styles.cyan, styles.colorBox]}>
          <Text style={styles.colorBoxText}>
            Cyan {styles.cyan.backgroundColor}
          </Text>
        </View>
        <View style={[styles.blue, styles.colorBox]}>
          <Text style={styles.colorBoxText}>
            Blue {styles.blue.backgroundColor}
          </Text>
        </View>
        <View style={[styles.magenta, styles.colorBox]}>
          <Text style={styles.colorBoxText}>
            Magenta {styles.magenta.backgroundColor}
          </Text>
        </View>
        <View style={[styles.orange, styles.colorBox]}>
          <Text style={styles.colorBoxText}>
            Orange {styles.orange.backgroundColor}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  white: {
    backgroundColor: 'white',
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  safeArea: {
    flex: 2,
  },
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  colorBox: {
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 10,
  },
  colorBoxText: {
    color: 'white',
  },
});
