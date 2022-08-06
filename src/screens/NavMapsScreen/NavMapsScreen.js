import { View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

const NavMapsScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MapView 
          style={{flex: 1}}  />
    </View> 
  )
}

export default NavMapsScreen