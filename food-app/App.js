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
      onPress={props.action}
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
              borderRadius: 20,
              borderColor: '#5A5A5A',
              borderWidth: 1,
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
              borderWidth: 1,
              borderColor: '#5A5A5A',
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
const data = [
  {
    title: 'Top Burger',
    tagline: 'Cheese, Burger, French fries',
    price: '£££',
    eta: '30',
    menu: [
      {
        title: 'Burgers',
        contents: [
          { title: 'Cheese Burger' },
          { title: 'Double cheese burger', price: '£ 6.99' },
        ],
      },
    ],
    imgUri: require('./assets/item1.jpg'),
  },
  {
    title: 'Briyani King',
    tagline: 'Briyani, Chicken, Rice',
    price: '£',
    eta: '30-45',
    imgUri: require('./assets/item2.jpg'),
  },
  {
    title: 'Bono Pizzeria',
    tagline: 'Pizza, Pepperoni, Vegeterian,Hawaii',
    price: '£££',
    eta: '50+',
    imgUri: require('./assets/item3.jpg'),
  },
  {
    title: "Joe's Gelato",
    tagline: 'Desert, Ice, cream, ',
    price: '££',
    eta: '20',
    imgUri: require('./assets/item4.jpg'),
  },
];
const Stack = createStackNavigator();
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ height: '100%' }}>
        <TableView>
          <Section name="" hideSeparator="true" separatorTintColor="#ccc">
            {data.map((element, i) => (
              <HomescreenCell
                title={element.title}
                tagline={element.tagline}
                eta={element.eta}
                imgUri={element.imgUri}
                action={() => navigation.navigate('Menu')}
              />
            ))}
          </Section>
        </TableView>
      </ScrollView>
    </SafeAreaView>
  );
};
const Menu = () => (
  <View>
    <Text>Hello world</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurants" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
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
    flex: 1,
    height: 290,
    marginBottom: 70,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: '26',
    paddingVertical: 10,
  },
  subtitleText: {
    color: '#5A5A5A',
  },
  etaText: {
    fontWeight: 'bold',
    fontSize: '18',
  },
});
