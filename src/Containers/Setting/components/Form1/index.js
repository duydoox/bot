import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button } from '@/Components'
import { styles } from './styles'
import { useState } from 'react'
import Market from './Market'
import Limit from './Limit'

const Form1 = () => {
    const [isActive, setIsActive] = useState('Market')
    const style = styles()

    const styleBtnActive = (name) => {
        if (isActive === name) return style.buttonActive
    }

    const styleContentMarketActive = (name) => {
        if (isActive === "Market") return {
            borderRightWidth: 1,
            borderRightColor: '#fff'
        }
        else return {}
    }

    const styleContentLimitActive = (name) => {
        if (isActive === "Limit") return {
            borderLeftWidth: 1,
            borderLeftColor: '#fff'
        }
        else return {}
    }

    const chooseBtn = (name) => {
        setIsActive(name)
    }

    return (
        <View style={{minHeight: 530}}>
            <View style={style.form}>
                {/* Header */}
                <View style={style.header}>
                    <TouchableOpacity
                        style={[style.buttonHeader, styleBtnActive('Market')]}
                        onPress={() => chooseBtn('Market')}
                    >
                        <View style={[style.buttonHeaderContent, styleContentMarketActive()]}>
                            <Text style={style.textButton}>Market</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[style.buttonHeader, styleBtnActive('Limit')]}
                        onPress={() => chooseBtn('Limit')}
                    >
                        <View style={[style.buttonHeaderContent, styleContentLimitActive()]}>
                            <Text style={style.textButton}>Limit</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* body */}
                <View>
                    <View style={style.bodyForm}>
                        {isActive === 'Market' ? <Market/> : <Limit/>}
                    </View>
                    {/* update */}
                    <View style={style.boxUpdate}>
                        <Button title='Cập nhật' style={style.buttonUpdate} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Form1