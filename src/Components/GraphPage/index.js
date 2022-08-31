import { StatusBar, StyleSheet, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { changeGraph } from '@/Store/Market'

const GraphPage = ({ children, isLoading = false }) => {
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='rgba(67, 67, 67, 0.25)' />
            <TouchableOpacity
                style={{ height: 170, width: '100%' }}
                onPress={() => { dispatch(changeGraph(null)) }}
            >

            </TouchableOpacity>
            <View style={styles.content}>
                {children}
                {
                    isLoading &&
                    <View style={{
                        position: 'absolute', height: '110%', width: '110%',
                        justifyContent: 'center', alignItems: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)'
                    }}>
                        <ActivityIndicator />
                    </View>
                }
            </View>

        </View>
    )
}

export default GraphPage

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(67, 67, 67, 0.25)',
        position: 'absolute',
        zIndex: 5,
        height: '100%',
        width: '100%',
    },
    content: {
        backgroundColor: '#fff',
        // marginTop: 176,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        flex: 1,
        padding: 15,
        overflow: 'hidden'
    }
})