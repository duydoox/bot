import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLazyAccountSignalQuery, useAccountSignalQuery, useNotInJobQuery, useLazyNotInJobQuery } from '@/Services/modules/market'
import { useSelector, useDispatch } from 'react-redux'
import { changeDate } from '@/Store/Market'

const Limit = () => {
  const [accountSignal, { data, isLoading, isFetching }] = useLazyAccountSignalQuery()
  const [not, { isFetching: fetch1 }] = useLazyNotInJobQuery()
  
  // const dispatch = useDispatch()
  // const date = useSelector(state => state.market.date)
  const [date, setDate] = useState('2022/09/05')
  // const {data, isLoading, isFetching} = useAccountSignalQuery(date)
  // const {data: data1, isFetching: fetch1} = useNotInJobQuery(date)
  const call = async () => {
    // await accountSignal(new Date().toISOString().slice(0, 10))
    // dispatch(changeDate('2022-08-2'))
    // setDate('2022/06/28')
    const d = '2022/07/16'
    accountSignal(d)
    not(d)
  }

  // useEffect(()=>{
  //   accountSignal(date)
  //   // not(date)
  // }, [date])

  return (
    <View>
      <Text>index</Text>
      {/* {data &&
        <Text>{JSON.stringify(data.data[0])}</Text>} */}
      <Text>{date}</Text>
      {isFetching && 
      <Text>Loading</Text>}
      {fetch1 && 
      <Text>Loading-----1</Text>}
      <TouchableOpacity onPress={call}>
        <Text>CALL</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Limit

const styles = StyleSheet.create({})