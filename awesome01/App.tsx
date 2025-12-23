import React from 'react';
import {View,Text,Button,Alert} from 'react-native'
import{SafeAreaView}from 'react-native-safe-area-context'

  function handlepress(){
Alert.alert('Simple button is pressed not more than that')
  }

function App(){
return (
  <SafeAreaView>
  <View>
    <Text>Hello WOrld </Text>
    <Text>Hello WOrld </Text>
    <Text>Hello WOrld </Text>

<Button
title='Second Button'
onPress={handlepress}
color="#22be5bff"

/>
    <Button
    title='Press me '
onPress={handlepress} 
color="#c42727ff"
/>
  </View>
  
</SafeAreaView>

)
}

export default App;