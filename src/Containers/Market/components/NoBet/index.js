import { View, Text } from 'react-native'
import React from 'react'
import Box from '@/Components/Box'
import BetHearder from '../BetHeader'
import { useStyles } from './styles'
import { useDispatch } from 'react-redux'
import { changeGraph } from '@/Store/Market'
import { useMemo } from 'react'
import { useNotInJobQuery } from '@/Services/modules/market'
import { useAccountSignalQuery } from '@/Services/modules/market'
import { useSelector } from 'react-redux'

const NoBet = () => {
  const styles = useStyles()
  const date = useSelector(state => state.market.date)
  const dispatch = useDispatch()
  const { data, isLoading, isFetching } = useNotInJobQuery(date)
  const {
    data: dataAccountSignal,
    isLoading: loadAcc,
    isFetching: fetchingAcc
  } = useAccountSignalQuery(date)

  const handleJob = useMemo(() => {
    if (isLoading || isFetching) return null
    return data.data.reduce((pre, cur) => {
      if (new Date(cur.createdTime).getDate() === new Date(date).getDate()) {
        pre[cur.status] += 1
        pre.TOTAL += 1
      }
      return pre
    }, {
      NEW: 0,
      FAIL: 0,
      RUNNING: 0,
      WIN: 0,
      LOSE: 0,
      TOTAL: 0
    })
  }, [data])

  const handleAcc = useMemo(() => {
    if (loadAcc || fetchingAcc) return null
    return dataAccountSignal.data.reduce((pre, cur) => {
      if (new Date(cur.createdAt).getDate() === new Date(date).getDate()) {
        pre[cur.status] += 1
      }
      return pre
    }, {
      NEW: 0,
      FAIL: 0,
      RUNNING: 0,
      WIN: 0,
      LOSE: 0
    })
  }, [dataAccountSignal])

  return (
    <Box style={styles.container}>
      <BetHearder text={`Kèo không chơi: ${handleAcc && handleJob ? handleAcc.FAIL + handleJob.TOTAL: ''}`}
        onPress={() => { dispatch(changeGraph('NO_BET')) }}
      />
      <View style={styles.statistical}>
        <View style={styles.winAndLoss}>
          <Text style={styles.Fonts.textSmall}>
            Số kèo thắng:&nbsp;
            <Text style={styles.Fonts.textProfit}>
              {handleJob && handleJob.WIN}
            </Text>
          </Text>
        </View>
        <View style={styles.winAndLoss}>
          <Text style={styles.Fonts.textSmall}>
            Số kèo thua:&nbsp;
            <Text style={styles.Fonts.textLoss}>
              {handleJob && handleJob.LOSE}
            </Text>
          </Text>
        </View>
      </View>
    </Box>
  )
}

export default NoBet