import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import { navigateAndSimpleReset } from '@/Navigators/utils'

import { useInfoQuery } from '@/Services/modules/users'

const Wellcome = () => {
    const { data, isSuccess, error } = useInfoQuery()

    useEffect(() => {
        if (isSuccess) {
            // console.log(data.data , ' --- info')
            navigateAndSimpleReset('Main')
        }
    }, [isSuccess])

    useEffect(() => {
        if (error) {
            console.log('error')
            navigateAndSimpleReset('Login')
        }
    }, [error])

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 30,
            }}>Wellcome</Text>
        </View>
    )
}

export default Wellcome

const styles = StyleSheet.create({})