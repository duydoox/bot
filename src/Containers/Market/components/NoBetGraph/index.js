import { View, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import GraphPage from '@/Components/GraphPage'
import Titles from '@/Components/Titles'
import Texts from '@/Components/Texts'
import { useTheme } from '@/Hooks'
import { useSelector,  } from 'react-redux'
import { useMemo } from 'react'
import { calculate } from '@/Util'
import { RefreshComponent } from '@/Components/Common'
import { handleDataByStatus, handleDataByHours } from '@/Util'
import { useAccountSignalQuery, useNotInJobQuery } from '@/Services/modules/market'
import DatePickers from '@/Components/DatePickers'
import Chart from './Chart'

const NoBetGraph = () => {

  const date = useSelector(state => state.market.date)
  const { data: dataJob, isFetching: fetch1, isLoading: load1, refetch: refetch1 } = useAccountSignalQuery(date)
  const { data: dataNotJob, isFetching: fetch2, isLoading: load2, refetch: refetch2 } = useNotInJobQuery(date)

  const job = useMemo(() => {
    if (dataJob)
      return handleDataByStatus(dataJob.data, 'job', date)
    return []
  }, [dataJob])

  const notJob = useMemo(() => {
    if (dataNotJob)
      return handleDataByStatus(dataNotJob.data, 'notJob', date)
    return []
  }, [dataNotJob])

  const cacu = calculate(job, notJob)

  const dataJobGraph = useMemo(() => handleDataByHours(job, 'job'), [job])
  const dataNotJobGraph = useMemo(() => handleDataByHours(notJob, 'notJob'), [notJob])
  const { Colors, Layout } = useTheme()

  return (
    <RefreshComponent
      refreshing={!load1 && !load2 && fetch1 || fetch2}
      // refreshing={false}
      onRefresh={() => { refetch1(), refetch2() }}
    >

      <GraphPage
        isLoading={fetch1 || fetch2}>
        <View style={{ height: 160 }}>
          <Titles style={{ fontSize: 14 }}>Kèo không chơi</Titles>
          
          <View style={[
            Layout.rowHCenter,
          ]}>
            <Texts>Thắng:&nbsp;</Texts>
            <Texts color={Colors.textProfit}>{cacu?.win + ' ' + cacu?.percentWin}</Texts>
            <View style={{
              backgroundColor: 'black',
              borderRadius: 100,
              width: 2,
              height: 2,
              marginHorizontal: 4
            }}></View>

            <Texts>Thua:&nbsp;</Texts>
            <Texts color={Colors.textLoss}>{cacu?.lose + ' ' + cacu?.percentLose}</Texts>
            <View style={{
              backgroundColor: 'black',
              borderRadius: 100,
              width: 2,
              height: 2,
              marginHorizontal: 4
            }}></View>

            <Texts>Kèo mới:&nbsp;</Texts>
            <Texts color={Colors.inputBorder}>{cacu?.new + ' ' + cacu?.percentNew}</Texts>
          </View>
          {/* select date */}
          <DatePickers date={date}  />
        </View>

        <Chart dataJobGraph={dataJobGraph} dataNotJobGraph={dataNotJobGraph} />

      </GraphPage>
    </RefreshComponent>
  )
}

export default NoBetGraph