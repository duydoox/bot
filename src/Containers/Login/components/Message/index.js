import { View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Texts from '@/Components/Texts'

const Message = () => {
    const message = useSelector(state => state.login.message)
    return (
        <View style={{marginTop: 4}}>
            <Texts color='red' fonts='Large'>
                {message}
            </Texts>
        </View>
    )
}

export default Message