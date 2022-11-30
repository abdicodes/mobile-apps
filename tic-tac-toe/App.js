import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerColumn}>
      <SafeAreaView style={styles.containerColumn}>
        <View style={[styles.containerRow, styles.horizontalLine]}>
          <View style={styles.verticalLine}>
            <Text style={styles.text}>X</Text>
          </View>

          <View style={styles.verticalLine}>
            <Text style={styles.text}>O</Text>
          </View>
          <View>
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
          <View>
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
          <View>
            <Text style={styles.text}>X</Text>
          </View>
        </View>
      </SafeAreaView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerColumn: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRow: {
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
  },
  horizontalLine: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },

  verticalLine: {
    borderRightWidth: 2,
    borderRightColor: 'black',
  },
});
