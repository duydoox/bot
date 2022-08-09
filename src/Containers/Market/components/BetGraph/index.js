import { StyleSheet, View } from 'react-native'
import React from 'react'
import Graph from '@/Components/Graph'
import Titles from '@/Components/Titles'
import Texts from '@/Components/Texts'
import { useTheme } from '@/Hooks'

const BetGraph = () => {
  const {Colors} = useTheme()
  return (
    <Graph>
      <View>
        <Titles style={{fontSize: 14}}>Market Cap</Titles>
        <Texts color={Colors.textLoss}>($3,226,646,352.00)</Texts>
      </View>
    </Graph>
  )
}

export default BetGraph

const styles = StyleSheet.create({})