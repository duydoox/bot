import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'

const Titles = ({ children, style, color, ...other }) => {
    const { Fonts, Colors } = useTheme()
    return (
        <Text style={[
            Fonts.titleSmall,
            style,
            {color: color?color:Colors.primary},
        ]} {...other}>
            {children}
        </Text>
    )
}

export default Titles