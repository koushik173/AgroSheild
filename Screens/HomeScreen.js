import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 30}}>Home Screen</Text>
        <Button title="Go to details screen"  onPress={()=> navigation.navigate("Details")}/>
      </View>
    )
  }

export default HomeScreen