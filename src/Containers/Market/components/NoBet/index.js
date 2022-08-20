import { View, Text } from 'react-native'
import React from 'react'
import Box from '@/Components/Box'
import BetHearder from '../BetHeader'
import { useStyles } from './styles'
import { useDispatch } from 'react-redux'
import { changeGraph } from '@/Store/Market'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { calculate } from '@/Util'

const NoBet = () => {
  const styles = useStyles()
  // const date = useSelector(state => state.market.date)
  const job = useSelector(state => state.market.job)
  const notJob = useSelector(state => state.market.notJob)
  // console.log(job)
  const dispatch = useDispatch()

  const cacu = calculate(job, notJob)

  return (
    <Box style={styles.container}>
      <BetHearder text={`Kèo không chơi: ${cacu?.total}`}
        onPress={() => { dispatch(changeGraph('NO_BET')) }}
      />
      <View style={styles.statistical}>
        <View style={styles.winAndLoss}>
          <Text style={styles.Fonts.textSmall}>
            Số kèo thắng:&nbsp;
            <Text style={styles.Fonts.textProfit}>
              {cacu?.win + ' ' + cacu?.percentWin}
            </Text>
          </Text>
        </View>
        <View style={styles.winAndLoss}>
          <Text style={styles.Fonts.textSmall}>
            Số kèo thua:&nbsp;
            <Text style={styles.Fonts.textLoss}>
              {cacu?.lose + ' ' + cacu?.percentLose}
            </Text>
          </Text>
        </View>
      </View>
    </Box>
  )
}

export default NoBet