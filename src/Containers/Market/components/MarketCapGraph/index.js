import {View, } from 'react-native'
import React from 'react'
import GraphPage from '@/Components/GraphPage'
import Titles from '@/Components/Titles'
import Texts from '@/Components/Texts'
import { useTheme } from '@/Hooks'
import Charts from '@/Components/Charts'
import { VictoryLine } from "victory-native";

const MarketCapGraph = () => {
  const { Colors } = useTheme()
  const createTime = (h, m, s) => {
    const time = new Date()
    time.setHours(h)
    time.setMinutes(m)
    time.setSeconds(s)
    return time
  }

  const data = [
    { x: createTime(14, 30, 45), y: 388200000 },
    { x: createTime(14, 40, 45), y: 388200000 },
    { x: createTime(14, 50, 45), y: 387500000 },
    { x: createTime(15, 0, 45), y: 387500000 },
    { x: createTime(15, 10, 45), y: 387100000 },
    { x: createTime(15, 20, 45), y: 387100000 },
    { x: createTime(15, 30, 45), y: 386400000 },
    { x: createTime(15, 33, 45), y: 384100000 },
  ];

  const stringTime = (time) => {
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
  }

  const domainX = [createTime(14, 30, 45), createTime(15, 37, 45)]
  const domainY = [384000000, 388500000]

  const tickFormat = (x) => {
    if (x.getMinutes() % 10 === 0) {
      return stringTime(x);
    }
  }

  const ticksSize = ({ tick }) => (tick.getMinutes() % 10 === 0 ? 4 : 0)

  return (
    <GraphPage>
      <View style={{height: 160}}>
        <Titles style={{ fontSize: 14 }}>Market Cap</Titles>
        <Texts color={Colors.textLoss}>($3,226,646,352.00)</Texts>
      </View>

      <Charts
        data={data}
        domainX={domainX}
        domainY={domainY}
        tickFormat={tickFormat}
        ticksSize={ticksSize}
      >
        <VictoryLine
          data={data}
          domain={{
            x: domainX,
            y: domainY
          }}
          // interpolation="monotoneX"
          scale={{ x: "time", y: "linear" }}
          standalone={false}
          style={styles.lineThree}
        />
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