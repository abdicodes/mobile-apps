import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
const { width } = Dimensions.get('window');

const ButtonWidth = width / 5;
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>32</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.Buttons, styles.lightGrey]}>
          <Text style={styles.blackButtonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Buttons, styles.lightGrey]}>
          <Text style={styles.blackButtonText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Buttons, styles.lightGrey]}>
          <Text style={styles.blackButtonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Buttons, styles.lightGrey]}>
          <Text style={styles.blackButtonText}>/</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  },
  resultText: {
    color: '#fff',
    fontSize: ButtonWidth,
  },

  blackButtonText: {
    color: '#000',
    fontSize: ButtonWidth / 2,
  },
  result: {
    alignItems: 'flex-end',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  Buttons: {
    width: ButtonWidth,
    height: ButtonWidth,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ButtonWidth,
  },
  lightGrey: {
    backgroundColor: '#C0C0C0',
  },
  blueButtons: {
    backgroundColor: '#00BFFF',
  },
  darkGreyButtons: {
    backgroundColor: '#808080',
  },
});
