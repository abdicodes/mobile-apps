import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { width, height } = Dimensions.get('window');

const HomescreenCell = (props) => {
  return (
    <Cell
      {...props}
      contentContainerStyle={styles.cell}
      backgroundColor="transparent"
      highlightUnderlayColor="#ccc"
      hideSeparator="true"
      cellContentView={
        <View>
          <Image
            source={props.imgUri}
            style={{
              maxHeight: '80%',
              maxWidth: '100%',
            }}
          />

          <View
            style={{
              backgroundColor: 'white',
              width: width / 4,
              height: width / 8,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: '15%',
              right: '10%',
              borderRadius: '20%',
            }}
          >
            <Text style={styles.etaText}>{props.eta}</Text>
            <Text style={styles.etaText}>Mins</Text>
          </View>
          <View>
            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.subtitleText}>{props.tagline}</Text>
          </View>
        </View>
      }
    />
  );
};
const Stack = createStackNavigator();
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ height: '100%' }}>
        <TableView>
          <Section name="" hideSeparator="true" separatorTintColor="#ccc">
            <HomescreenCell
              title="Joe's Gelato"
              tagline="Desert, Ice cream, £££"
              eta="10-30"
              imgUri={require('./assets/item2.jpg')}
            />
          </Section>
        </TableView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurants" component={Home} />
        {/* <Stack.Screen name="Menu" component={null} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    height: 290,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: '26',
    paddingVertical: 10,
  },
  subtitleText: {
    color: 'purple',
  },
  etaText: {
    fontWeight: 'bold',
    fontSize: '18',
  },
});
