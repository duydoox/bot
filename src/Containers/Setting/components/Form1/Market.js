import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import { FormInput } from '@/Components'

const Market = () => {
    const style = styles()
    const [isConnect, setIsConnect] = useState(false)
    return (
        <View style={{paddingVertical: 20}}>
            <FormInput
                label='Thời gian tăng'
                style={style.boxInput}
                styleLabel={style.text}
                styleInput={style.input}
            >
                <View style={style.unit}>
                    <Text >Giây</Text>
                </View>
            </FormInput>

            <FormInput
                label='Số tiền tăng'
                style={style.boxInput}
                styleLabel={style.text}
                styleInput={style.input}
            >
                <View style={style.unit}>
                    <Text >Triệu</Text>
                </View>
            </FormInput>

            <FormInput
                label='Thời gian giảm'
                style={style.boxInput}
                styleLabel={style.text}
                styleInput={style.input}
            >
                <View style={style.unit}>
                    <Text >Giây</Text>
                </View>
            </FormInput>

            <FormInput
                label='Số tiền giảm'
                style={style.boxInput}
                styleLabel={style.text}
                styleInput={style.input}
            >
                <View style={style.unit}>
                    <Text >Triệu</Text>
                </View>
            </FormInput>


            <View style={style.connectBiance}>
                <CheckBox value={isConnect} onChange={() => { setIsConnect(!isConnect) }} />
                <Text style={style.text}>Connect binance</Text>
            </View>
            <View style={style.API}>
                <FormInput
                    label='API key'
                    style={style.boxInput}
                    styleLabel={style.text}
                    styleInput={style.input}
                />
                <FormInput
                    label='API secret'
                    style={style.boxInput}
                    styleLabel={style.text}
                    styleInput={style.input}
                />
            </View>
        </View>
    )
}

export default Market