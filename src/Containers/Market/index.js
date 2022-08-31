import { View, ActivityIndicator, Image, Text } from 'react-native'
import React, { useMemo } from 'react'
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
import { handleDataByStatus } from '@/Util'
import DatePickers from '@/Components/DatePickers'

const Stack = createStackNavigator()

const Main = () => {
  const date = useSelector(state => state.market.date)
  const {
    data: dataJob,
    isFetching: fetch1,
    isLoading: load1,
    refetch: refetch1 }
    = useAccountSignalQuery(date)

  const { 
    data: dataNotJob, 
    isFetching: fetch2, 
    isLoading: load2, 
    refetch: refetch2 } 
  = useNotInJobQuery(date)

  const { isFetching: fetch3, isLoading: load3, refetch: refetch3 } = useRetrieveQuery()

  const refresh = () => {
    refetch1()
    refetch2()
    refetch3()
  }

  const job = useMemo(() => {
    if (dataJob)
      return handleDataByStatus(dataJob.data, 'job', date)
    return null
  }, [dataJob])

  const notJob = useMemo(() => {
    if (dataNotJob)
      return handleDataByStatus(dataNotJob.data, 'notJob', date)
    return null
  }, [dataNotJob])

  if (load1 || load2 || load3) {
    return <View style={{ height: '100%', width: '100%', position: 'absolute', justifyContent: 'center' }}>
      <ActivityIndicator />
    </View>
  }

  console.log(date, '++++++++++++')

  return (
    <View style={{ flex: 1 }}>
      <HeaderMarket />

      {/* <Text>{date}</Text> */}
      {/* <DatePickers date={date} /> */}


      <RefreshComponent
        refreshing={fetch1 || fetch2 || fetch3}
        onRefresh={refresh}
      >
        <View style={{ paddingHorizontal: 10 }}>
          <History />
          <Bet job={job} />
          <NoBet job={job} notJob={notJob} />
        </View>

        <Result job={job} notJob={notJob} />
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
