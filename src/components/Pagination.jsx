import { View, Text } from 'react-native'
import React from 'react'
import { useReducer } from 'react'

const Pagination = () => {

    const [state, dispatch] = useReducer(first, second, third)

  return (
    <View>
      <Text>pagination</Text>
    </View>
  )
}

export default Pagination