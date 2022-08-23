import { View, FlatList } from 'react-native'
import React from 'react'
import Texts from '@/Components/Texts'
import Titles from '@/Components/Titles'
import { useStyles } from './styles'
import Circle from '@/Components/Circle'
import { convertDate, convertTime } from '@/Util'
import { useHistoryQuery } from '@/Services/modules/market'
import { RefreshComponent } from '@/Components/Common'
import { useState, useEffect } from 'react'

const HistoryTurn = () => {
  const styles = useStyles()
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching } = useHistoryQuery({ page, limit: 10 })
  const [datas, setDatas] = useState([])

  const mergeData = (datas, data) => {
    const merge = datas.concat(data)
    return merge.filter((e, index) => merge.findIndex(v => e._id === v._id) === index)
  }

  useEffect(() => {
    data && setDatas(mergeData(datas, data.data))
  }, [data])

  const loadEnd = () => {
    if (isFetching === false) {
      setPage(pre => pre + 1)
    }
  }

  return (
    <RefreshComponent
    onRefresh={isLoading}>
      <View style={styles.container}>
        <View style={styles.head}>
          <Titles style={styles.status}>Trạng thái</Titles>
          <Titles style={styles.time}>Thời gian</Titles>
          <Titles style={styles.reason}>Lý do</Titles>
        </View>

        <View style={styles.items}>
          {isLoading ?
            <View>
              <Texts>Loading ...</Texts>
            </View> :
            <FlatList
              data={datas}
              renderItem={({ item }) => {
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
              }}
              keyExtractor={item => item._id}
              ListEmptyComponent={
                <View>
                  <Texts>No Data</Texts>
                </View>
              }
              onEndReached={loadEnd}
            />
          }
          {isLoading === false && isFetching &&
            <View style={{ alignItems: 'center' }}>
              <Texts>Loading ...</Texts>
            </View>}
        </View>

      </View>
    </RefreshComponent>
  )
}

export default HistoryTurn