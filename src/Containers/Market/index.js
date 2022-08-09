import { View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useStyles } from './styles'
import History from './components/History'
import Bet from './components/Bet'
import NoBet from './components/NoBet'
import Result from './components/Result'
import HistoryTurn from './components/HistoryTurn'
import { createStackNavigator } from '@react-navigation/stack'
import HeaderMarket from './components/HeaderMarket'

const Stack = createStackNavigator()

const Main = () => {
  const styles = useStyles()
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ paddingHorizontal: 10 }}>
        <History />
        <Bet />
        <NoBet />
      </View>
      <Result />
    </ScrollView>
  )
}

const Market = () => {
  const styles = useStyles()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Market-main'
        component={Main}
        options={
          {
            // title: 'Market',
            header: () => <HeaderMarket/>
          }
        } />
      <Stack.Screen
        name='History'
        component={HistoryTurn}
        options={
          {
            title: 'Lịch sử bật tắt',
            headerBackImage: () => <Image source={styles.Images['goback']} resizeMode='contain' />,
          }
        } />
    </Stack.Navigator>
  )
}

export default Market
