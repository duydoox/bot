import { StyleSheet, ScrollView, RefreshControl } from 'react-native'
import React from 'react'

const RefreshComponent = ({ onRefresh = ()=>{}, refreshing, style = {}, children, ...other }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[{minHeight: '100%'},style]}
      refreshControl={
        <RefreshControl
          refreshing={refreshing || false}
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