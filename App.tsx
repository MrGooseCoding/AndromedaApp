import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, View } from 'react-native';
import NavBar from './src/Components/NavBar';
import {NavigationContainer} from '@react-navigation/native';
import ChatsScreen from './src/Screens/Chats';
import HomeScreen from './src/Screens/Home'
import styles from './src/styles';
import ResizableBar from './src/Components/ResizableBar';
import React, { useState } from 'react';
import Bottom from './src/Components/Bottom';
import { navigationRef } from './src/Utils/RootNavigation';
import ChatScreen from './src/Screens/Chat';

const Stack = createStackNavigator()

export default function App() {
  const [bottomVisibility, setBottomVisibility] = useState(true)
  const [pointerEvents, setPointerEvents] = useState(true)

  return (
    <SafeAreaView style = {styles.App}>

      <View style={{pointerEvents: (pointerEvents)?"auto":"none", flex: 1,}}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              options={{
                headerShown: false,
              }}
            >
              {(props)=><HomeScreen navigation={props.navigation} route={props.route}/>}
            </Stack.Screen>
            <Stack.Screen
              name="Chats"
              options={{
                headerShown: false,
              }}
            >
              {(props)=><ChatsScreen navigation={props.navigation} route={props.route}/>}
            </Stack.Screen>
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
      </View>

      <Bottom hideWithKeyboard={true} visible={bottomVisibility}>
        <ResizableBar setPointerEvents={setPointerEvents}/>
        <NavBar callback={()=>{}}/>
      </Bottom>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
