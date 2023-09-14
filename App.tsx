import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView , View} from 'react-native';
import NavBar from './src/Components/NavBar';
import {NavigationContainer} from '@react-navigation/native';
import ChatsScreen from './src/Screens/Chats';
import styles from './src/styles';
import ResizableBar from './src/Components/ResizableBar';
import Text from './src/Components/Text';

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
      <View style={styles.Bottom}>
        <ResizableBar/>
        <NavBar callback={()=>{}}/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
