import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomescreenCell = (props) => {
  return <Cell {...props} />;
};
const Stack = createStackNavigator();
const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TableView>
          <Section name="" hideSeparator="true" separatorTintColor="#ccc">
            <HomescreenCell />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
