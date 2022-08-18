import { View, } from 'react-native'
import React from 'react'
import GraphPage from '@/Components/GraphPage'
import Titles from '@/Components/Titles'
import Texts from '@/Components/Texts'
import { useTheme } from '@/Hooks'
import Charts from '@/Components/Charts'
import {VictoryStack, VictoryBar } from "victory-native";
import { useSelector } from 'react-redux'

const MarketCapGraph = () => {
  const job = useSelector(state=>state.market.job)
  const notJob = useSelector(state=>state.market.notJob)
  const { Colors } = useTheme()
  const createTime = (h, m, s) => {
    const time = new Date()
    time.setHours(h)
    time.setMinutes(m)
    time.setSeconds(s)
    return time
  }

  const setValue = ()=>{
    const arr = []
    for(let i = 0; i <= 23; i++){
      arr.push({x: i, y: 0})
    }
    return arr
  }

  const fail = setValue()
  const neww = setValue()
  const lose = setValue()
  const win = setValue()

  job?.FAIL.map(item => {
    fail[new Date(item.createdAt).getHours()].y += 1
  })

  notJob?.NEW.map(item=>{
    neww[new Date(item.createdTime).getHours()].y += 1
  })

  notJob?.LOSE.map(item=>{
    lose[new Date(item.createdTime).getHours()].y += 1
  })

  notJob?.WIN.map(item=>{
    win[new Date(item.createdTime).getHours()].y += 1
  })

  const tickFormatX = (x) => {
    return x%5===0 ? x : ''
  }

  const ticksSize = ({ tick }) => (tick % 5 === 0 ? 4 : 0)

  return (
    <GraphPage>
      <View style={{ height: 160 }}>
        <Titles style={{ fontSize: 14 }}>Market Cap</Titles>
        <Texts color={Colors.textLoss}>($3,226,646,352.00)</Texts>
      </View>

      <Charts
        // data={data2014}
        tickFormatX={tickFormatX}
        ticksSize={ticksSize}
        tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]}
      >
        <VictoryStack>
          <VictoryBar
            data={fail}
            style={{data: {fill: '#fa91ca', width: 4}}}
          />
          <VictoryBar
            data={neww}
            style={{data: {fill: '#48c60a', width: 4}}}
          />
          <VictoryBar
            data={lose}
            style={{data: {fill: '#faad14', width: 4}}}
          />
          <VictoryBar
            data={win}
            style={{data: {fill: '#ff4d4f', width: 4}}}
          />
        </VictoryStack>
      </Charts>
    </GraphPage>
  )
}

export default MarketCapGraph

const styles = {
  lineThree: {
    data: { stroke: "#2A6FB0", strokeWidth: 2 },
  }
}