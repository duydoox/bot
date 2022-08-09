import { View, Text } from 'react-native'
import React from 'react'
import Box from '@/Components/Box'
import BetHearder from '../BetHeader'
import { useStyles } from './styles'
import { useDispatch } from 'react-redux'
import { changeGraph } from '@/Store/Market'

const NoBet = () => {
  const styles = useStyles()
  const dispatch = useDispatch()
  return (
    <Box style={styles.container}>
      <BetHearder text='Kèo không chơi: 1'
      onPress={()=>{dispatch(changeGraph('NO_BET'))}}
      />
      <View style={styles.statistical}>
        <View style={styles.winAndLoss}>
          <Text style={styles.Fonts.textSmall}>Số kèo thắng:
            <Text style={styles.Fonts.textProfit}>1 (100,00%)</Text>
          </Text>
        </View>
        <View style={styles.winAndLoss}>
          <Text style={styles.Fonts.textSmall}> Số kèo thua:
            <Text style={styles.Fonts.textLoss}> 0 (0,00%)</Text>
          </Text>
        </View>
      </View>
    </Box>
  )
}

export default NoBet