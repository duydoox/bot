import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'

const Texts = ({ children, style, color, fonts = 'Small', ...other }) => {
    const { Fonts, Colors } = useTheme()
    return (
        <Text style={[
            Fonts[`text${fonts}`], //Regular, Large
            {color: color?color:Colors.primary},
            style,
        ]} {...other}>
            {children}
        </Text>
    )
}

export default Texts