import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useLazyAccountSignalQuery } from '@/Services/modules/market'
import { useSelector, useDispatch } from 'react-redux'
import { changeDate } from '@/Store/Market'

const Limit = () => {
  const [accountSignal, { data, isLoading, isFetching }] = useLazyAccountSignalQuery()
  // console.log(isFetching)
  const dispatch = useDispatch()
  const date = useSelector(state => state.market.date)
  const call = async () => {
    // await accountSignal(new Date().toISOString().slice(0, 10))
    dispatch(changeDate('2022-08-2'))
  }
  return (
    <View>
      <Text>index</Text>
      {data &&
        <Text>{JSON.stringify(data.data[0])}</Text>}
      <Text>{date}</Text>
      <TouchableOpacity onPress={call}>
        <Text>CALL</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Limit

const styles = StyleSheet.create({})