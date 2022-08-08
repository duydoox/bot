import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'

const FormInput = ({
    children,
    style = {},
    onChangeText = () => { },
    label = '',
    styleLabel = {},
    styleInput = {},
    value,
    secureTextEntry = false,
    message,
    styleMessage = {},
    refInput = null,
    onKeyPress=()=>{}
}) => {
    const { Layout } = useTheme()
    const { color = '#fff', fontSize = 17 } = styleInput
    return (
        <View style={[
            { marginBottom: 5 },
            style
        ]}>
            {/* Label */}
            <Text style={[
                {
                    fontSize: 14
                },
                styleLabel
            ]}>{label}</Text>

            {/* Form input */}
            <View style={[
                Layout.rowCenter,
                {
                    minHeight: 40,
                    width: '100%',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#fff',
                    marginTop: 5,
                },
                styleInput
            ]}>
                <TextInput
                    style={[{ paddingHorizontal: 8, color: color, fontSize: fontSize, flex: 1 }]}
                    onChangeText={onChangeText}
                    onKeyPress={onKeyPress}
                    value={value && value}
                    secureTextEntry={secureTextEntry}
                    ref={refInput}
                />
                {/* other */}
                {children}
            </View>
            {/* message */}
            {
                message &&
                <Text
                    style={[
                        { color: 'red', fontSize: 16 },
                        styleMessage
                    ]}
                >
                    {message}
                </Text>
            }
        </View>
    )
}

export default FormInput