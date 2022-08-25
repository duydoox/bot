import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NoData = ({height}) => {
  return (
    <View style={{justifyContent:'center', alignItems: 'center', height: height || 30}}>
      <Text>No Data</Text>
    </View>
  )
}

export default NoData

const styles = StyleSheet.create({})