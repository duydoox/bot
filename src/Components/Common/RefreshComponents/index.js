import { StyleSheet, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'

const RefreshComponent = ({ onRefresh = () => { }, refreshing, style = {}, children, ...other }) => {
  const [refet, setRefet] = useState(false)
  useEffect(() => {
    if (refreshing === false) {
      setRefet(false)
    }
  })
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[{ minHeight: '100%' }, style]}
      refreshControl={
        <RefreshControl
          refreshing={refet}
          onRefresh={() => {
            setRefet(true)
            onRefresh()
          }} />
      }
      {...other}
    >
      {children}
    </ScrollView>
  )
}

export default RefreshComponent

const styles = StyleSheet.create({})