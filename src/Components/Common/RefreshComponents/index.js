import { StyleSheet, ScrollView, RefreshControl } from 'react-native'
import React from 'react'

const RefreshComponent = ({ onRefresh = ()=>{}, refreshing, style = {}, children, ...other }) => {
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, ...style }}
      refreshControl={
        <RefreshControl
          refreshing={onRefresh || false}
          onRefresh={onRefresh}/>
      }
      {...other}
    >
      {children}
    </ScrollView>
  )
}

export default RefreshComponent

const styles = StyleSheet.create({})