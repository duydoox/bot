import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'

const Form2 = () => {
    const style = styles()
    const [auto, setAuto] = useState(false)
    const [ani] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            ani,
            {
                toValue: auto ? 0 : 1,
                duration: 300,
                useNativeDriver: false
            }
        ).start()
    }, [auto])
    const toggleAuto = () => {
        setAuto(!auto)
    }
    const marginLeft = ani.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '50%']
    })
    
    return (
        <View style={[style.footer]}>
            <Text style={style.text}>Cấu hình tự động chơi</Text>
            <View style={style.box}>
                <TouchableOpacity style={style.auto}>
                    <Text style={{ width: '50%', textAlign: 'center', color: '#fff', flex: 1 }}>Tự động</Text>
                    <Animated.View style={{
                        height: '100%',
                        width: 30, 
                        borderRadius: 100,
                        backgroundColor: '#FFFFFF',
                        left: 0,
                    }} />
                </TouchableOpacity>

                <TouchableOpacity style={style.btn} onPress={toggleAuto}>
                    <Text style={{ width: '50%', textAlign: 'center', color: '#fff', zIndex: 5 }}>Bật</Text>
                    <Text style={{ width: '50%', textAlign: 'center', color: '#fff', zIndex: 5 }}>Tắt</Text>
                    <Animated.View style={{
                        width: '50%', height: '100%',
                        borderRadius: 5,
                        backgroundColor: '#D19804',
                        position: 'absolute',
                        left: 0,
                        marginLeft
                    }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Form2