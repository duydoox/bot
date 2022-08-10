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
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeGraph } from '@/Store/Market'
import MarketCapGraph from './components/MarketCapGraph'
import BetGraph from './components/BetGraph'
import NoBetGraph from './components/NoBetGraph'

const Stack = createStackNavigator()

const Main = () => {
  const styles = useStyles()
  const graph = useSelector(state => state.market.graph)
  const dispatch = useDispatch()

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ paddingHorizontal: 10 }}>
        <History />
        <Bet />
        <NoBet />
      </View>
      <Result />
      <Modal
        animationType="slide"
        transparent={true}
        visible={graph === 'MARKET_CAP' ? true : false}
        onRequestClose={()=>{
          dispatch(changeGraph(null))
        }}
      >
        <MarketCapGraph />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={graph === 'BET' ? true : false}
        onRequestClose={()=>{
          dispatch(changeGraph(null))
        }}
      >
        <BetGraph />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={graph === 'NO_BET' ? true : false}
        onRequestClose={()=>{
          dispatch(changeGraph(null))
        }}
      >
        <NoBetGraph />
      </Modal>
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
            header: () => <HeaderMarket />
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
