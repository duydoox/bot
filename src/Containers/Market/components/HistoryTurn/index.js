import { View, ScrollView } from 'react-native'
import React from 'react'
import Texts from '@/Components/Texts'
import Titles from '@/Components/Titles'
import { useStyles } from './styles'
import Circle from '@/Components/Circle'
import { convertDate, convertTime } from '@/Util'
import { useHistoryQuery } from '@/Services/modules/market'
import { useState } from 'react'

const HistoryTurn = () => {
  const styles = useStyles()
  const { data: datas } = useHistoryQuery({})
  const [page] = useState(0)

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Titles style={styles.status}>Trạng thái</Titles>
        <Titles style={styles.time}>Thời gian</Titles>
        <Titles style={styles.reason}>Lý do</Titles>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 25}}>
        {datas && datas.data.slice(page*10, page*10+10).map((data, index) => {
          return (
            <View style={styles.item} key={index}>
              <View style={[styles.status, styles.statusItem]}>
                <Circle status={data.turnOn} colorActive='#D31515' />
                <Texts>{data.turnOn ? 'Bật' : 'Tắt'}</Texts>
              </View>
              <View style={styles.time}>
                <Texts>{convertTime(data.createdAt) + ' ' + convertDate(data.createdAt)}</Texts>
              </View>
              <Texts style={[styles.reason]}>{data.reason}</Texts>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default HistoryTurn