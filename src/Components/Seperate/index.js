import {View } from 'react-native'
import React from 'react'

const Seperate = ({style, ...other}) => {
  return (
    <View style={{
        borderBottomWidth: 1,
        borderBottomColor: '#F3F3F3',
        height: 0,
        width: '100%',
        ...style
    }}
    {...other}/>
  )
}

export default Seperate
