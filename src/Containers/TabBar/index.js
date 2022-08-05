import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { useDispatch } from 'react-redux'
import { setPage } from '@/Store/Auth'

const TabBar = ({ state, descriptors, navigation }) => {
    const { Images, Layout, Fonts, Colors } = useTheme()
    const dispatch = useDispatch()
    return (
        <View style={[
            Layout.rowHCenter,
            Layout.justifyContentAround,
            {
                backgroundColor: Colors.primary,
                padding: 10
            }
        ]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    dispatch(setPage(route.name))
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={[
                            Layout.colCenter,
                            {
                                height: 66,
                                width: 66,
                                borderRadius: 5,
                                backgroundColor: isFocused ? Colors.tabBarFocused : Colors.primary
                            }
                        ]}
                        key={index}
                    >
                        <Image source={Images[route.name]} resizeMode='contain' />
                        <Text style={{
                            color: isFocused ? '#fff' : '#fff',
                            fontSize: 14,
                            marginTop: 5
                        }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}

export default TabBar