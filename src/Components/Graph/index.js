import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { changeGraph } from '@/Store/Market'

const Graph = ({ children }) => {
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='rgba(67, 67, 67, 0.25)' />
            <TouchableOpacity
                style={{height: 170, width: '100%'}}
                onPress={()=>{dispatch(changeGraph(null))}}
            >

            </TouchableOpacity>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    )
}

export default Graph

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(67, 67, 67, 0.25)',
        position: 'absolute',
        zIndex: 5,
        height: '100%',
        width: '100%'
    },
    content: {
        backgroundColor: '#fff',
        // marginTop: 176,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        flex: 1,
        padding: 15
    }
})