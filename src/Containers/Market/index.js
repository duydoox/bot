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
import { useAccountSignalQuery, useNotInJobQuery, useRetrieveQuery } from '@/Services/modules/market'
import { useSelector } from 'react-redux'
import { RefreshComponent } from '@/Components/Common'

const Stack = createStackNavigator()

const Main = () => {
  const styles = useStyles()
  const date = useSelector(state => state.market.date)
  const { isFetching: fetch1, isLoading: load1, refetch: refetch1} = useAccountSignalQuery(date)
  const { isFetching: fetch2, isLoading: load2, refetch: refetch2} = useNotInJobQuery(date)
  const { isFetching: fetch3, isLoading: load3, refetch: refetch3} = useRetrieveQuery(date)
  if (load1 && load2 && load3) {
    return <View style={{ height: '100%', width: '100%', position: 'absolute', backgroundColor: '#fff' }}></View>
  }

  const refresh = () => {
    refetch1()
    refetch2()
    refetch3()
  }

  return (
    <View style={{flex: 1}}>
      <HeaderMarket />

      <RefreshComponent
        refreshing={!load1 && !load2 && !load3 && fetch1 || fetch2 || fetch3}
        onRefresh={refresh}
      >
        <View style={{ paddingHorizontal: 10 }}>
          <History />
          <Bet />
          <NoBet />
        </View>

        <Result />
      </RefreshComponent>
      <Modals />
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
