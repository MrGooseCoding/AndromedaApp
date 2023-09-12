import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import NavBar from './src/Components/NavBar';
import {NavigationContainer} from '@react-navigation/native';
import ChatsScreen from './src/Screens/Chats';
import styles from './src/styles';

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaView style = {styles.App}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Chats"
            component={ChatsScreen}
            options={{ headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <NavBar callback={()=>{}}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
