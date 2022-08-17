import { View, Text } from 'react-native'
import React from 'react'

const Circle = ({status, colorActive = '#D19804'}) => {
    
  return (
    <View style = {[
        {
            height: 5,
            width: 5,
            borderRadius: 100,
            backgroundColor: status ? '#1FA808' : colorActive,
            marginRight: 3
        }
    ]}/>
  )
}

export default Circle