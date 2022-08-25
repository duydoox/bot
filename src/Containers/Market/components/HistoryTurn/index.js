import { View, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import Texts from '@/Components/Texts'
import Titles from '@/Components/Titles'
import { useStyles } from './styles'
import Circle from '@/Components/Circle'
import { convertDate, convertTime } from '@/Util'
import { useHistoryQuery } from '@/Services/modules/market'
import { useState, useEffect } from 'react'
import { NoData } from '@/Components/Common'

const HistoryTurn = () => {
  const styles = useStyles()
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching, refetch } =
    useHistoryQuery(
      { page, limit: 10 },
      { refetchOnMountOrArgChange: true }
    )
  // useEffect(()=>{
  //   console.log(isFetching)
  // },[page])
  const [fetch, setFetch] = useState('')
  const [datas, setDatas] = useState([])

  const mergeData = (datas, data) => {
    const merge = datas.concat(data)
    return merge.filter((e, index) => merge.findIndex(v => e._id === v._id) === index)
  }

  useEffect(() => {
    data && (
      page !== 1 ?
        setDatas(mergeData(datas, data.data)) :
        setDatas(data.data)
    )
  }, [data])

  const loadEnd = () => {
    if (isFetching === false) {
      setFetch('end')
      setPage(pre => pre + 1)
    }
  }

  const refresh = () => {
    if (isFetching === false) {
      setFetch('start')
      setPage(1)
      refetch()
    }
  }

  const Item = ({ item }) => {
    return (
      <View style={styles.item}>
        <View style={[styles.status, styles.statusItem]}>
          <Circle status={item.turnOn} colorActive='#D31515' />
          <Texts>{item.turnOn ? 'Bật' : 'Tắt'}</Texts>
        </View>
        <View style={styles.time}>
          <Texts>{convertTime(item.createdAt) + ' ' + convertDate(item.createdAt)}</Texts>
        </View>
        <Texts style={[styles.reason]}>{item.reason}</Texts>
      </View>
    )
  }

  const ListFooter = () => {
    if (fetch === 'end' && isFetching)
      return (
        <View style={{ alignItems: 'center', height: 30, justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      )
  }

  return (

    <View style={styles.container}>
      <View style={styles.head}>
        <Titles style={styles.status}>Trạng thái</Titles>
        <Titles style={styles.time}>Thời gian</Titles>
        <Titles style={styles.reason}>Lý do</Titles>
      </View>

      <View style={styles.items}>
        {isLoading ?
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator />
          </View> :
          <FlatList
            data={datas}
            keyExtractor={item => item._id}
            renderItem={Item}
            ListFooterComponent={ListFooter}
            ListEmptyComponent={NoData}
            onEndReached={loadEnd}
            onEndReachedThreshold={1}
            refreshing={fetch === 'start' && isFetching}
            onRefresh={refresh}
          />
        }
      </View>

    </View>
  )
}

export default HistoryTurn