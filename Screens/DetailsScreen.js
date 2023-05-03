import { View, Text, Button } from 'react-native'
import React from 'react'

const DetailsScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap:10 }}>
        <Text style={{fontSize: 30}}>Details Screen</Text>
        <Button title="Go to details Again"  onPress={()=> navigation.push("Details")}/>
        <Button title="Go to Home"  onPress={()=> navigation.navigate("Home")}/>
        <Button title="Go Back"  onPress={()=> navigation.goBack()}/>
        <Button title="Go to First screen"  onPress={()=> navigation.popToTop("Home")}/>
      </View>
    )
  }

export default DetailsScreen