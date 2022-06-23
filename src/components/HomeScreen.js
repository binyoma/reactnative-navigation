import { View, Text,Image, Button } from 'react-native'
import React from 'react'


function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{flex: 1, width:'100%'}} source={require('../data/rover.jpg')}></Image>
      </View>
    );
  }

export default HomeScreen;