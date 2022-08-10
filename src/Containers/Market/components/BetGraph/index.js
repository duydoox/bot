import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import GraphPage from '@/Components/GraphPage'
import Titles from '@/Components/Titles'
import Texts from '@/Components/Texts'
import { useTheme } from '@/Hooks'
import { VictoryBar, VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from "victory-native";
import Svg, { Rect, G } from 'react-native-svg'

const BetGraph = () => {
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

  const tickValues = data.map(x => x.x)
  return (
    <GraphPage>
      <View>
        <Titles style={{ fontSize: 14 }}>Market Cap</Titles>
        <Texts color={Colors.textLoss}>($3,226,646,352.00)</Texts>
      </View>

      <Svg style={{ marginTop: 150 }}>
        <G>
          <VictoryAxis
            scale="time"
            // standalone={false}
            domain={domainX}
            style={styles.axisYears}
            tickValues={tickValues}
            tickFormat={
              (x) => {
                if (x.getMinutes() % 10 === 0) {
                  return stringTime(x);
                }
              }
            }
          />

          <VictoryAxis dependentAxis
            domain={domainY}
            offsetX={50}
            orientation="left"
            standalone={false}
            style={styles.axisOne}
          />

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
        </G>
      </Svg>
    </GraphPage>
  )
}

export default BetGraph

const BLUE_COLOR = "#00a3de";
const RED_COLOR = "#7c270b";

const styles = {
  parent: {
    background: "#ccdee8",
    boxSizing: "border-box",
    display: "inline",
    padding: 0,
    fontFamily: "'Fira Sans', sans-serif"
  },
  title: {
    textAnchor: "start",
    verticalAnchor: "end",
    fill: "#000000",
    fontFamily: "inherit",
    fontSize: "18px",
    fontWeight: "bold"
  },
  labelNumber: {
    textAnchor: "middle",
    fill: "#ffffff",
    fontFamily: "inherit",
    fontSize: "14px"
  },

  // INDEPENDENT AXIS
  axisYears: {
    axis: { stroke: "#C9C9C9", strokeWidth: 1 },
    ticks: {
      size: ({ tick }) => {
        const tickSize =
          tick.getMinutes() % 10 === 0 ? 4 : 0;
        return tickSize;
      },
      stroke: "#C9C9C9",
      strokeWidth: 1
    },
    tickLabels: {
      fill: "#454545",
      fontFamily: "inherit",
      fontSize: 10
    }
  },

  // DATA SET ONE
  axisOne: {
    grid: {
      stroke: ({ tick }) =>
        tick === 0 ? "transparent" : "#C9C9C9",
      strokeWidth: 1
    },
    axis: { stroke: BLUE_COLOR, strokeWidth: 0 },
    ticks: { strokeWidth: 0 },
    tickLabels: {
      fill: "#454545",
      fontFamily: "inherit",
      fontSize: 10
    }
  },
  labelOne: {
    fill: BLUE_COLOR,
    fontFamily: "inherit",
    fontSize: 12,
    fontStyle: "italic"
  },
  lineOne: {
    data: { stroke: BLUE_COLOR, strokeWidth: 4.5 }
  },
  axisOneCustomLabel: {
    fill: BLUE_COLOR,
    fontFamily: "inherit",
    fontWeight: 300,
    fontSize: 21
  },

  // DATA SET TWO
  axisTwo: {
    axis: { stroke: RED_COLOR, strokeWidth: 0 },
    tickLabels: {
      fill: RED_COLOR,
      fontFamily: "inherit",
      fontSize: 16
    }
  },
  labelTwo: {
    textAnchor: "end",
    fill: RED_COLOR,
    fontFamily: "inherit",
    fontSize: 12,
    fontStyle: "italic"
  },
  lineTwo: {
    data: { stroke: RED_COLOR, strokeWidth: 4.5 }
  },

  // HORIZONTAL LINE
  lineThree: {
    data: { stroke: "#2A6FB0", strokeWidth: 2 }
  }
}