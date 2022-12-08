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
  const [answerValue, setAnswerValue] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{answerValue}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.lightGreyButton]}>
          <Text style={styles.blackButtonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.lightGreyButton]}>
          <Text style={styles.blackButtonText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.lightGreyButton]}>
          <Text style={styles.blackButtonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blueButton]}>
          <Text style={styles.whiteButtonText}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.darkGreyButton]}>
          <Text style={styles.whiteButtonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.darkGreyButton]}>
          <Text style={styles.whiteButtonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.darkGreyButton]}>
          <Text style={styles.whiteButtonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blueButton]}>
          <Text style={styles.whiteButtonText}>x</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.darkGreyButton]}>
          <Text style={styles.whiteButtonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.darkGreyButton]}>
          <Text style={styles.whiteButtonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.darkGreyButton]}>
          <Text style={styles.whiteButtonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blueButton]}>
          <Text style={styles.whiteButtonText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.darkGreyButton]}>
          <Text style={styles.whiteButtonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.darkGreyButton]}>
          <Text style={styles.whiteButtonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.darkGreyButton]}>
          <Text style={styles.whiteButtonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blueButton]}>
          <Text style={styles.whiteButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.darkGreyButton, styles.zeroButton]}
        >
          <Text style={[styles.whiteButtonText, styles.zeroText]}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.darkGreyButton]}>
          <Text style={styles.whiteButtonText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.blueButton]}>
          <Text style={styles.whiteButtonText}>=</Text>
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
  whiteButtonText: {
    color: '#fff',
    fontSize: ButtonWidth / 2,
  },
  result: {
    alignItems: 'flex-end',
    marginRight: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    width: ButtonWidth,
    height: ButtonWidth,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ButtonWidth,
    margin: 5,
  },
  lightGreyButton: {
    backgroundColor: '#C0C0C0',
  },
  blueButton: {
    backgroundColor: '#1E90FF',
  },
  darkGreyButton: {
    backgroundColor: '#454545',
  },
  zeroButton: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  zeroText: {
    marginLeft: width / 10,
  },
});
