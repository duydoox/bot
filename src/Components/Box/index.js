import { View, Text } from 'react-native'
import React from 'react'
import { useStyles } from './styles'

const Box = ({children, style, ...other}) => {
    const styles = useStyles()
    return (
        <View style={[
            styles.container,
            style
        ]}
        {...other}>
            {children}
        </View>
    )
}

export default Box