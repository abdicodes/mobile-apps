import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeView}>
        <Text style={styles.welcomeText}>Hello</Text>
        <Text style={styles.subtitleText}>My name is</Text>
        <StatusBar style="auto" />
        <View style={styles.nameBox}>
          <Text style={styles.nameText}>Abdirahman 👨🏽‍💻</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d65151',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 90,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#e6d1d1',
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#e6d1d1',
    marginBottom: 20,
    textAlign: 'center',
  },
  nameBox: {
    width: '100%',
    height: '55%',
    backgroundColor: '#E6A1E5',
    borderRadius: 5,
    justifyContent: 'center',
    borderRadius: 30,
  },
  nameText: {
    fontSize: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#195E1A',
  },
  safeView: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
