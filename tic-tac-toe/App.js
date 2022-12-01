import { StatusBar } from 'expo-status-bar';
import {
  Dimensions,
  PixelRatio,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const normalize = (size, multiplier = 2) => {
  const scale = (width / height) * multiplier;

  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export default function App() {
  return (
    <View style={styles.containerColumn}>
      <SafeAreaView style={styles.containerColumn}>
        <View style={styles.paddingView}></View>
        <View style={[styles.containerRow, styles.horizontalLine]}>
          <View style={styles.verticalLine}>
            <Text style={styles.text}>X</Text>
          </View>

          <View style={styles.verticalLine}>
            <Text style={styles.text}>O</Text>
          </View>
          <View style={styles.transparentLine}>
            <Text style={styles.text}>X</Text>
          </View>
        </View>

        <View style={[styles.containerRow, styles.horizontalLine]}>
          <View style={styles.verticalLine}>
            <Text style={styles.text}>O</Text>
          </View>
          <View style={styles.verticalLine}>
            <Text style={styles.text}>X</Text>
          </View>
          <View style={styles.transparentLine}>
            <Text style={styles.text}>O</Text>
          </View>
        </View>

        <View style={styles.containerRow}>
          <View style={styles.verticalLine}>
            <Text style={styles.text}>O</Text>
          </View>
          <View style={styles.verticalLine}>
            <Text style={styles.text}>O</Text>
          </View>
          <View style={styles.transparentLine}>
            <Text style={styles.text}>X</Text>
          </View>
        </View>
        <View style={styles.paddingView}></View>
      </SafeAreaView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerColumn: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRow: {
    flex: 2,
    flexDirection: 'row',
    marginHorizontal: normalize(35),
  },
  text: {
    fontWeight: 'bold',
    fontSize: normalize(35),
  },
  horizontalLine: {
    flexDirection: 'row',
    borderBottomWidth: 4,
    borderBottomColor: 'black',
  },

  verticalLine: {
    flexDirection: 'row',
    flex: 1,
    borderRightWidth: 4,
    borderRightColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transparentLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRightWidth: 4,
    borderRightColor: '#fff',
  },
  paddingView: {
    flex: 3,
  },
});
