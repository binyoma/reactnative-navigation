
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import StackNavigation from './StackNavigation'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab= createMaterialBottomTabNavigator()
const TabNavigation = () => {
    
  return (
    <Tab.Navigator>
        <Tab.Screen  
        name="stack" 
        component={StackNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen  
               name="Details" 
               component={DetailsScreen}
               options={{
                tabBarLabel: 'details',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="details" color={color} size={26} />
                ),
              }}/>
    </Tab.Navigator>
  )
}

export default TabNavigation