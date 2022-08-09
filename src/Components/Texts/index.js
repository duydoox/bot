import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'

const Texts = ({ children, style, color, ...other }) => {
    const { Fonts, Colors } = useTheme()
    return (
        <Text style={[
            Fonts.textSmall,
            {color: color?color:Colors.primary},
            style,
        ]} {...other}>
            {children}
        </Text>
    )
}

export default Texts