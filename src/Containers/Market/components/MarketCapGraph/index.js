import { View, } from 'react-native'
import React from 'react'
import GraphPage from '@/Components/GraphPage'
import Titles from '@/Components/Titles'
import Texts from '@/Components/Texts'
import { useTheme } from '@/Hooks'
import Charts from '@/Components/Charts'
import { VictoryLine } from "victory-native";
import { useListMarketCapQuery } from '@/Services/modules/market'
import { convertCurrency } from '@/Util'
import { useMemo } from 'react'
import { convertTime } from '@/Util'
import { RefreshComponent } from '@/Components/Common'

const MarketCapGraph = () => {
  const { data: data1, isFetching, refetch } = useListMarketCapQuery()
  const { Colors } = useTheme()
  const dataFinal = useMemo(() => {
    if (data1) {
      const newData = []
      for (let i = 1; i < data1.data.length; i++) {
        if (data1.data[i].marketCap !== data1.data[i - 1].marketCap) {
          newData.push({ x: convertTime(new Date(data1.data[i - 1].createdAt)), y: data1.data[i - 1].marketCap })
          newData.push({ x: convertTime(new Date(data1.data[i].createdAt)), y: data1.data[i].marketCap })
        }
      }
      return newData
    }
    return [{ x: new Date(), y: 0 }]
  }, [data1])

  const tickFormatX = (x, i) => {
    if (i % Math.floor(dataFinal.length / 7) === 0)
      return x
  }

  const ticksSize = ({ index }) => {
    return (index % Math.floor(dataFinal.length / 7) === 0 ? 4 : 0)
  }

  return (
    <RefreshComponent
      refreshing={isFetching}
      onRefresh={() => { refetch()}}
    >
      <GraphPage>
        <View style={{ height: 160 }}>
          <Titles style={{ fontSize: 14 }}>Market Cap</Titles>
          <Texts color={Colors.textLoss}>
            {data1 && convertCurrency(data1.data[data1.data.length - 1].marketCap)}
          </Texts>
        </View>

        <Charts
          data={dataFinal}
          tickFormatX={tickFormatX}
          tickFormatY={(t)=>Math.floor(t/1000000) + ' M'}
          ticksSize={ticksSize}
          tickValues={dataFinal.map(x => x.x)}
        >
          <VictoryLine
            data={dataFinal}
            scale={{ x: "time", y: "linear" }}
            standalone={false}
            style={styles.lineThree}
          />
        </Charts>
      </GraphPage>
    </RefreshComponent>
  )
}

export default MarketCapGraph

const styles = {
  lineThree: {
    data: { stroke: "#2A6FB0", strokeWidth: 2 },
  }
}