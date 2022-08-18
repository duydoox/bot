import { View, Text } from 'react-native'
import React from 'react'
import Box from '@/Components/Box'
import BetHearder from '../BetHeader'
import { useStyles } from './styles'
import { useDispatch } from 'react-redux'
import { changeGraph } from '@/Store/Market'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'

const NoBet = () => {
  const styles = useStyles()
  // const date = useSelector(state => state.market.date)
  const job = useSelector(state => state.market.job)
  const notJob = useSelector(state => state.market.notJob)
  const dispatch = useDispatch()

  const total = useMemo(() => {
    if (job && notJob && job.FAIL) {
      return job.FAIL.length + notJob.total
    }
    return 0
  }, [job, notJob])

  const win = useMemo(() => {
    if (notJob && notJob.WIN) {
      return notJob.WIN.length
    }
    return 0
  }, [notJob])

  const lose = useMemo(() => {
    if (notJob && notJob.LOSE) {
      return notJob.LOSE.length
    }
    return 0
  }, [notJob])

  return (
    <Box style={styles.container}>
      <BetHearder text={`Kèo không chơi: ${total}`}
        onPress={() => { dispatch(changeGraph('NO_BET')) }}
      />
      <View style={styles.statistical}>
        <View style={styles.winAndLoss}>
          <Text style={styles.Fonts.textSmall}>
            Số kèo thắng:&nbsp;
            <Text style={styles.Fonts.textProfit}>
              {total !== 0 && `${win} (${(win / total * 100).toFixed(2)}%)`}
            </Text>
          </Text>
        </View>
        <View style={styles.winAndLoss}>
          <Text style={styles.Fonts.textSmall}>
            Số kèo thua:&nbsp;
            <Text style={styles.Fonts.textLoss}>
              {total !== 0 && `${lose} (${(lose / total * 100).toFixed(2)}%)`}
            </Text>
          </Text>
        </View>
      </View>
    </Box>
  )
}

export default NoBet