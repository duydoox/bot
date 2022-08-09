import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'

const Texts = ({ children, style, ...other }) => {
    const { Fonts } = useTheme()
    return (
        <Text style={[
            Fonts.textSmall,
            style
        ]} {...other}>
            {children}
        </Text>
    )
}

export default Texts