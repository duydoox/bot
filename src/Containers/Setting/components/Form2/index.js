import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import ToggleSwitch from 'toggle-switch-react-native'

const Form2 = () => {
    const style = styles()
    const [auto, setAuto] = useState(false)
    const [ani] = useState(new Animated.Value(0))

    useEffect(()=> {
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
                <ToggleSwitch
                    isOn={auto}
                    onColor='#2A6FB0'
                    onToggle={toggleAuto}
                    size='large'
                />
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