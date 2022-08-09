import { Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'


const Icon = ({
    name,
    height = 100,
    width = 100,
    backgroundColor = '#fff',
    onPress = ()=>{}
}) => {
    const { Layout, Images } = useTheme()
    return (
        <TouchableOpacity style={{
            height,
            width,
            backgroundColor,
            borderRadius: 100,
            ...Layout.center
        }}
        onPress={onPress}>
            <Image source={Images[name]} resizeMode='contain' />
        </TouchableOpacity>
    )
}

export default Icon