import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView , View} from 'react-native';
import NavBar from './src/Components/NavBar';
import {NavigationContainer, NavigationContainerRef} from '@react-navigation/native';
import ChatsScreen from './src/Screens/Chats';
import HomeScreen from './src/Screens/Home'
import styles from './src/styles';
import ResizableBar from './src/Components/ResizableBar';
import Text from './src/Components/Text';
import React, { RefObject, useState } from 'react';
import Bottom from './src/Components/Bottom';
import { Ref } from 'react';
import { navigationRef } from './src/Utils/RootNavigation';
import ChatScreen from './src/Screens/Chat';

const Stack = createStackNavigator()

export default function App() {
  const [bottomVisibility, setBottomVisibility] = useState(true)

  return (
    <SafeAreaView style = {styles.App}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ 
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Chats"
            component={ChatsScreen}
            options={{ 
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Chat"
            options={{ 
              headerShown: false,
            }}
          >
            {(props)=><ChatScreen navigation={props.navigation} route={props.route} setBottomVisibility={setBottomVisibility}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <Bottom hideWithKeyboard={true} visible={bottomVisibility}>
        <ResizableBar/>
        <NavBar callback={()=>{}}/>
      </Bottom>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
