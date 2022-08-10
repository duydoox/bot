import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import Graph from '@/Components/Graph'
import Titles from '@/Components/Titles'
import Texts from '@/Components/Texts'
import { useTheme } from '@/Hooks'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const MarketCapGraph = () => {
  const { Colors } = useTheme()
  
  return (
    <Graph>
      <View>
        <Titles style={{ fontSize: 14 }}>Market Cap</Titles>
        <Texts color={Colors.textLoss}>($3,226,646,352.00)</Texts>
      </View>

      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                0, 5, 8
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width-30} // from react-native
        height={270}
        // yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          // decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 0) => `#333`,
          labelColor: (opacity = 0) => `#333`,
          style: {
            borderRadius: 15
          },
          propsForDots: {
            r: "0",
            strokeWidth: "1",
            stroke: "#333"
          }
        }}
        // bezier
        style={{
          // marginVertical: 8,
          borderRadius: 16,
          backgroundColor: '#fff'
        }}
      />
    </Graph>
  )
}

export default MarketCapGraph

const styles = StyleSheet.create({})