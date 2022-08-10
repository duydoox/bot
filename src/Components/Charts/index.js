import React from 'react'
import { VictoryAxis, VictoryChart } from "victory-native";

const Charts = ({tickFormatX, ticksSize, children, tickValues }) => {
  const styles = getStyles(ticksSize)
  return (
    <VictoryChart>
      <VictoryAxis
        scale="time"
        style={styles.axisYears}
        tickValues={tickValues}
        tickFormat={tickFormatX}
      />

      <VictoryAxis dependentAxis
        // domain={domainY}
        offsetX={50}
        orientation="left"
        standalone={false}
        style={styles.axisOne}
      />
      {children}
    </VictoryChart>
  )
}

export default Charts

const getStyles = (ticksSize) => ({

  // INDEPENDENT AXIS
  axisYears: {
    axis: { stroke: "#C9C9C9", strokeWidth: 1 },
    ticks: {
      size: ticksSize ? ticksSize : 4,
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
    axis: { strokeWidth: 0 },
    ticks: { strokeWidth: 0 },
    tickLabels: {
      fill: "#454545",
      fontFamily: "inherit",
      fontSize: 10
    }
  },
})