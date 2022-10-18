import { View, Text, Image } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View className={`bg-gray-100`}>
      <View className={`bg-white shadow`}>
      <Image
      
        source={{
          uri: 'https://v2.callscaler.com/logos.png',
        }}
      />
      </View>
    </View>
  )
}

export default LoginScreen