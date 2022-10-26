import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'

const VoiceMailScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header navigation={navigation} />
        <Text>Voice Mails</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default VoiceMailScreen