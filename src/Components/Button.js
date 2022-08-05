import {Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({style = {}, onPress = ()=>{}, title}) => {
    const {color = 'black', fontSize = 14, fontWeight='normal'} = style
  return (
    <TouchableOpacity style={[ {justifyContent: 'center', alignItems: 'center'}, style]} onPress={onPress}>
      <Text style={{color, fontSize, fontWeight }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button