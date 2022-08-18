import { View, Text } from 'react-native'
import React from 'react'
import { useStyles } from './styles'
import Box from '@/Components/Box'
import BetHearder from '../BetHeader'
import { useDispatch } from 'react-redux'
import { changeGraph } from '@/Store/Market'
import { useSelector } from 'react-redux'

const Bet = () => {
  const styles = useStyles()
  const job = useSelector(state=>state.market.job)
  const dispatch = useDispatch()

  const total = {}
  return (
    <Box style={styles.container}>
      <BetHearder text='Kèo chơi: 0'
      onPress={()=>{dispatch(changeGraph('BET'))}}
      />
      <View>
        <Text style={styles.Fonts.textSmall}>Số kèo đang chơi:&nbsp;
          <Text style={styles.Fonts.titleSmall}> 0 </Text>
          (00.00%)
        </Text>

        <View style={styles.statistical}>
          <View style={styles.winAndLoss}>
            <View style={styles.label}>
              <Text style={styles.Fonts.textSmall}>Số kèo thắng: </Text>
              <Text style={styles.Fonts.textSmall}>Thắng: </Text>
            </View>
            <View>
              <Text style={styles.Fonts.textProfit}>0 (00.00%)</Text>
              <Text style={styles.Fonts.textProfit}>0</Text>
            </View>
          </View>
          <View style={styles.winAndLoss}>
            <View style={styles.label}>
              <Text style={styles.Fonts.textSmall}>Số kèo thua: </Text>
              <Text style={styles.Fonts.textSmall}>Thua: </Text>
            </View>
            <View>
              <Text style={styles.Fonts.textLoss}>00 (00.00%)</Text>
              <Text style={styles.Fonts.textLoss}>0</Text>
            </View>
          </View>
        </View>

        <Text style={styles.Fonts.textSmall}>
          Lời, lỗ:
          <Text style={styles.Fonts.titleProfit}> 0</Text>
        </Text>
      </View>
    </Box>
  )
}

export default Bet