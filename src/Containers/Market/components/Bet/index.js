import { View, Text } from 'react-native'
import React from 'react'
import { useStyles } from './styles'
import Box from '@/Components/Box'
import BetHearder from '../BetHeader'
import { useDispatch } from 'react-redux'
import { changeGraph } from '@/Store/Market'

const Bet = () => {
  const styles = useStyles()
  const dispatch = useDispatch()
  return (
    <Box style={styles.container}>
      <BetHearder text='Kèo chơi: 143'
      onPress={()=>{dispatch(changeGraph('BET'))}}
      />
      <View>
        <Text style={styles.Fonts.textSmall}>Số kèo đang chơi:
          <Text style={styles.Fonts.titleSmall}> 51 </Text>
          (35,66%)
        </Text>

        <View style={styles.statistical}>
          <View style={styles.winAndLoss}>
            <View style={styles.label}>
              <Text style={styles.Fonts.textSmall}>Số kèo thắng: </Text>
              <Text style={styles.Fonts.textSmall}>Thắng: </Text>
            </View>
            <View>
              <Text style={styles.Fonts.textProfit}>59 (41,26%)</Text>
              <Text style={styles.Fonts.textProfit}>12,684076</Text>
            </View>
          </View>
          <View style={styles.winAndLoss}>
            <View style={styles.label}>
              <Text style={styles.Fonts.textSmall}>Số kèo thua: </Text>
              <Text style={styles.Fonts.textSmall}>Thua: </Text>
            </View>
            <View>
              <Text style={styles.Fonts.textLoss}>33 (23,18%)</Text>
              <Text style={styles.Fonts.textLoss}>-7,419732</Text>
            </View>
          </View>
        </View>

        <Text style={styles.Fonts.textSmall}>
          Lời, lỗ:
          <Text style={styles.Fonts.titleProfit}> 5,264344</Text>
        </Text>
      </View>
    </Box>
  )
}

export default Bet