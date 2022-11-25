import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        {' '}
        <Text>X</Text>
        <Text>O</Text>
        <Text>X</Text>
      </View>

      <View>
        {' '}
        <Text>O</Text>
        <Text>X</Text>
        <Text>O</Text>
      </View>

      <View>
        {' '}
        <Text>O</Text>
        <Text>O</Text>
        <Text>X</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 50,
  },
});
