import { View, } from 'react-native'
import React from 'react'
import GraphPage from '@/Components/GraphPage'
import Titles from '@/Components/Titles'
import Texts from '@/Components/Texts'
import { useTheme } from '@/Hooks'
import Charts from '@/Components/Charts'
import { VictoryStack, VictoryBar } from "victory-native";
import { useSelector } from 'react-redux'
import { format2degit, convertDate } from '@/Util'
import { useMemo } from 'react'
import { calculate } from '@/Util'

const MarketCapGraph = () => {
  const job = useSelector(state => state.market.job)
  const notJob = useSelector(state => state.market.notJob)
  const cacu = calculate(job, notJob)
  const date = useSelector(state => state.market.date)
  const { Colors, Layout } = useTheme()

  const countByHours = (arr = [], x, nameAtbTime) => {
    return arr.filter(item =>
      x === new Date(item[nameAtbTime]).getHours()
    ).length
  }

  const initData = (nameAtbTime, arr = []) => {
    const data = []
    for (let x = -1; x <= 24; x++) {
      data.push({ x, y: countByHours(arr, x, nameAtbTime) })
    }
    return data
  }

  const fail = useMemo(() => initData('createdAt', job?.FAIL), [job, notJob])
  const neww = useMemo(() => initData('createdTime', notJob?.NEW), [job, notJob])
  const lose = useMemo(() => initData('createdTime', notJob?.LOSE), [job, notJob])
  const win = useMemo(() => initData('createdTime', notJob?.WIN), [job, notJob])

  const tickFormatX = (x) => {
    return x % 5 === 0 ? format2degit(x) + ` (${convertDate(date).slice(0, 5)})` : ''
  }

  const ticksSize = ({ tick }) => (tick % 5 === 0 ? 4 : 0)

  return (
    <GraphPage>
      <View style={{ height: 160 }}>
        <Titles style={{ fontSize: 14 }}>Kèo không chơi</Titles>
        <View style={[
          Layout.rowHCenter,
        ]}>
          <Texts>Thắng:&nbsp;</Texts>
          <Texts color={Colors.textProfit}>{cacu?.win + ' ' + cacu?.percentWin}</Texts>
          <View style={{
            backgroundColor: 'black',
            borderRadius: 100,
            width: 2,
            height: 2,
            marginHorizontal: 4
          }}></View>

          <Texts>Thua:&nbsp;</Texts>
          <Texts color={Colors.textLoss}>{cacu?.lose + ' ' + cacu?.percentLose}</Texts>
          <View style={{
            backgroundColor: 'black',
            borderRadius: 100,
            width: 2,
            height: 2,
            marginHorizontal: 4
          }}></View>

          <Texts>Kèo mới:&nbsp;</Texts>
          <Texts color={Colors.inputBorder}>{cacu?.new + ' ' + cacu?.percentNew}</Texts>
        </View>
      </View>

      <Charts
        // data={data2014}
        tickFormatX={tickFormatX}
        ticksSize={ticksSize}
        tickValues={[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]}
      >
        <VictoryStack>
          <VictoryBar
            data={fail}
            style={{ data: { fill: '#fa91ca', width: 4 } }}
          />
          <VictoryBar
            data={neww}
            style={{ data: { fill: '#faad14', width: 4 } }}
          />
          <VictoryBar
            data={lose}
            style={{ data: { fill: '#ff4d4f', width: 4 } }}
          />
          <VictoryBar
            data={win}
            style={{ data: { fill: '#48c60a', width: 4 } }}
          />
        </VictoryStack>
      </Charts>
    </GraphPage>
  )
}

export default MarketCapGraph