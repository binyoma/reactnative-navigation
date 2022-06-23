import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
         name='home'
         component={HomeScreen}/>
        <Stack.Screen name='details' component={DetailsScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default StackNavigation