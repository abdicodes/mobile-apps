import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { useState } from 'react';
const { width } = Dimensions.get('window');

const ButtonWidth = width / 5;
export default function App() {
  const [answerValue, setAnswerValue] = useState(0);
  const [readyToReplace, setReadyToReplace] = useState(true);
  const [memoryValue, setMemoryValue] = useState(0);
  const [operatorValue, setOperatorValue] = useState(0);
  const handleNumber = (number) => {
    if (readyToReplace) return number;
    else return '' + answerValue + number;
  };
  const calculateEquals = (prev, curr, operand) => {
    prev = Number(prev);
    curr = Number(curr);
    switch (operand) {
      case '+':
        return (prev += curr);

      case '-':
        return (prev -= curr);

      case '*':
        return (prev *= curr);

      case '/':
        return (prev /= curr).toFixed(5);
    }
  };
  const buttonPressed = (value) => {
    if (typeof value === 'number') {
      setAnswerValue(handleNumber(value));
      if (value != 0) setReadyToReplace(false);
    }
    if (value == 'c') {
      setAnswerValue(0);
      setReadyToReplace(true);
      setMemoryValue(0);
      setOperatorValue(0);
    }
    if ((value == '+') | (value == '-') | (value == '/') | (value == '*')) {
      if (operatorValue && memoryValue && answerValue) {
        const res = calculateEquals(memoryValue, answerValue, operatorValue);
        setAnswerValue(res);
        setReadyToReplace(true);
        setMemoryValue(res);
        setOperatorValue(value);

        return;
      }
      setMemoryValue(answerValue);
      setReadyToReplace(true);
      setOperatorValue(value);
    }
    if (value == '=') {
      const res = calculateEquals(memoryValue, answerValue, operatorValue);
      setAnswerValue(res);
      setReadyToReplace(true);
      setMemoryValue(0);
      setOperatorValue(0);
    }
    if (value == 'sign') {
      setAnswerValue(-1 * answerValue);
      console.log(answerValue);
    }
    if (value == 'percentage') {
      setAnswerValue((answerValue * 0.01).toFixed(2));
      setReadyToReplace(true);
      setMemoryValue(0);
      setOperatorValue(0);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{answerValue}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => buttonPressed('c')}
          style={[styles.button, styles.lightGreyButton]}
        >
          <Text style={styles.blackButtonText}>
            {!answerValue && !memoryValue ? 'AC' : 'C'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => buttonPressed('sign')}
          style={[styles.button, styles.lightGreyButton]}
        >
          <Text style={styles.blackButtonText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => buttonPressed('percentage')}
          style={[styles.button, styles.lightGreyButton]}
        >
          <Text style={styles.blackButtonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => buttonPressed('/')}
          style={[styles.button, styles.blueButton]}
        >
          <Text style={styles.whiteButtonText}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => buttonPressed(7)}
          style={[styles.button, styles.darkGreyButton]}
        >
          <Text style={styles.whiteButtonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => buttonPressed(8)}
          style={[styles.button, styles.darkGreyButton]}
        >
          <Text style={styles.whiteButtonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => buttonPressed(9)}
          style={[styles.button, styles.darkGreyButton]}
        >
          <Text style={styles.whiteButtonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => buttonPressed('*')}
          style={[styles.button, styles.blueButton]}
        >
          <Text style={styles.whiteButtonText}>x</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => buttonPressed(4)}
          style={[styles.button, styles.darkGreyButton]}
        >
          <Text style={styles.whiteButtonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => buttonPressed(5)}
          style={[styles.button, styles.darkGreyButton]}
        >
          <Text style={styles.whiteButtonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => buttonPressed(6)}
          style={[styles.button, styles.darkGreyButton]}
        >
          <Text style={styles.whiteButtonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => buttonPressed('-')}
          style={[styles.button, styles.blueButton]}
        >
          <Text style={styles.whiteButtonText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => buttonPressed(1)}
          style={[styles.button, styles.darkGreyButton]}
        >
          <Text style={styles.whiteButtonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => buttonPressed(2)}
          style={[styles.button, styles.darkGreyButton]}
        >
          <Text style={styles.whiteButtonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => buttonPressed(3)}
          style={[styles.button, styles.darkGreyButton]}
        >
          <Text style={styles.whiteButtonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => buttonPressed('+')}
          style={[styles.button, styles.blueButton]}
        >
          <Text style={styles.whiteButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => buttonPressed(0)}
          style={[styles.button, styles.darkGreyButton, styles.zeroButton]}
        >
          <Text style={[styles.whiteButtonText, styles.zeroText]}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => buttonPressed('.')}
          style={[styles.button, styles.darkGreyButton]}
        >
          <Text style={styles.whiteButtonText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => buttonPressed('=')}
          style={[styles.button, styles.blueButton]}
        >
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
