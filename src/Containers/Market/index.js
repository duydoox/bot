import { View, ScrollView, Image, Modal } from 'react-native'
import React from 'react'
import { useStyles } from './styles'
import History from './components/History'
import Bet from './components/Bet'
import NoBet from './components/NoBet'
import Result from './components/Result'
import HistoryTurn from './components/HistoryTurn'
import { createStackNavigator } from '@react-navigation/stack'
import HeaderMarket from './components/HeaderMarket'
import Modals from './components/Modal'
import { useAccountSignalQuery, useNotInJobQuery } from '@/Services/modules/market'
import { useSelector } from 'react-redux'

const Stack = createStackNavigator()

const Main = () => {
  const styles = useStyles()
  const date = useSelector(state => state.market.date)
  const { isLoading: load1 } = useAccountSignalQuery(date)
  const { isLoading: load2 } = useNotInJobQuery(date)
  if (load1 && load2) {
    return <View style={{ height: '100%', width: '100%', position: 'absolute', backgroundColor: '#fff' }}></View>
  }

  return (
    <View style={{flex: 1}}>
      <HeaderMarket />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 10 }}>
          <History />
          <Bet />
          <NoBet />
        </View>

        <Result />

        <Modals />
      </ScrollView>
    </View>
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
            headerShown: false
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
