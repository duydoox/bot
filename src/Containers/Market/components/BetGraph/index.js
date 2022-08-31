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

const BetGraph = () => {

  const date = useSelector(state => state.market.date)
  const { data: dataJob, isFetching: fetch1, isLoading: load1, refetch: refetch1 } = useAccountSignalQuery(date)

  const job = useMemo(() => {
    if (dataJob)
      return handleDataByStatus(dataJob.data, 'job', date)
    return {
      FAIL: [],
      NEW: [],
      WIN: [],
      LOSE: [],
    }
  }, [dataJob])

  const  total = dataJob?.data?.length - job.FAIL.length - job.NEW.length
  const  win = job.WIN.length
  const  lose = job.LOSE.length
  const  percentWin = total === 0 ? 0 : win/total
  const  percentLose =  total === 0 ? 0 : lose/total

  const dataJobGraph = useMemo(() => handleDataByHours(job, 'job'), [job])
  const { Colors, Layout } = useTheme()

  return (
    <RefreshComponent
      refreshing={!load1 && fetch1}
      onRefresh={() => { refetch1() }}
    >

      <GraphPage
        isLoading={fetch1}>
        <View style={{ height: 160 }}>
          <Titles style={{ fontSize: 14 }}>Kèo chơi</Titles>
          
          <View style={[
            Layout.rowHCenter,
          ]}>
            <Texts>Thắng:&nbsp;</Texts>
            <Texts color={Colors.textProfit}>{`${win} (${percentWin.toFixed(2)}%)`}</Texts>
            <View style={{
              backgroundColor: 'black',
              borderRadius: 100,
              width: 2,
              height: 2,
              marginHorizontal: 4
            }}></View>

            <Texts>Thua:&nbsp;</Texts>
            <Texts color={Colors.textLoss}>{`${lose} (${percentLose.toFixed(2)}%)`}</Texts>
            <View style={{
              backgroundColor: 'black',
              borderRadius: 100,
              width: 2,
              height: 2,
              marginHorizontal: 4
            }}></View>

            <Texts>Lời/lỗ:&nbsp;</Texts>
            <Texts color={Colors.inputBorder}>0</Texts>
          </View>
          {/* select date */}
          <DatePickers date={date}  />
        </View>

        <Chart dataJobGraph={dataJobGraph}/>

      </GraphPage>
    </RefreshComponent>
  )
}

export default BetGraph