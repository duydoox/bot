import { View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import GraphPage from '@/Components/GraphPage'
import Titles from '@/Components/Titles'
import Texts from '@/Components/Texts'
import { useTheme } from '@/Hooks'
import Charts from '@/Components/Charts'
import { VictoryStack, VictoryBar } from "victory-native";
import { useSelector } from 'react-redux'
import { format2degit, convertDate } from '@/Util'
import { useMemo } from 'react'
import { calculate } from '@/Util'
import { useDispatch } from 'react-redux'
import { changeDate } from '@/Store/Market'
import { RefreshComponent } from '@/Components/Common'
import { handleDataByStatus, handleDataByHours } from '@/Util'
import { useAccountSignalQuery, useNotInJobQuery } from '@/Services/modules/market'
import DatePickers from '@/Components/DatePickers'

const MarketCapGraph = () => {
  const date = useSelector(state => state.market.date)
  console.log(date, '----')
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
  const dispatch = useDispatch()

  const tickFormatX = (x) => {
    return x % 5 === 0 ? format2degit(x) + ` (${convertDate(date).slice(0, 5)})` : ''
  }

  const ticksSize = ({ tick }) => (tick % 5 === 0 ? 4 : 0)

  return (
    <RefreshComponent
      refreshing={!load1 && !load2 && fetch1 || fetch2}
      onRefresh={() => { refetch1(), refetch2() }}
    >
      
      <GraphPage>
        <View style={{ height: 160 }}>
          <Titles style={{ fontSize: 14 }}>Kèo không chơi</Titles>
          {/* số kèo thắng thua */}
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
          <DatePickers date={date}/>
        </View>

        <Charts
          // data={data2014}
          tickFormatX={tickFormatX}
          ticksSize={ticksSize}
          tickValues={[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]}
        >
          <VictoryStack>
            <VictoryBar
              data={dataJobGraph.FAIL}
              style={{ data: { fill: '#fa91ca', width: 4 } }}
            />
            <VictoryBar
              data={dataNotJobGraph.NEW}
              style={{ data: { fill: '#faad14', width: 4 } }}
            />
            <VictoryBar
              data={dataNotJobGraph.LOSE}
              style={{ data: { fill: '#ff4d4f', width: 4 } }}
            />
            <VictoryBar
              data={dataNotJobGraph.WIN}
              style={{ data: { fill: '#48c60a', width: 4 } }}
            />
          </VictoryStack>
        </Charts>
      </GraphPage>
    </RefreshComponent>
  )
}

export default MarketCapGraph