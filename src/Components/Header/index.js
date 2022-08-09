import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import Circle from '../Circle'

const Header = ({ title, children }) => {
    const { Images, Colors, Layout } = useTheme()
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: Colors.primary
                }}>{title}</Text>
                {children && children}
            </View>

            <View style={[styles.right, Layout.rowHCenter ]}>
                <View style={[
                    Layout.rowHCenter,
                    {marginRight: 5}
                ]}>
                    <Circle status={false}/>
                    <Text>Tự động</Text>
                </View>

                <View style={Layout.rowHCenter}>
                    <Circle status={true}/>
                    <Text>Tắt</Text>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    left: {

    },
    right: {
        
    },
})