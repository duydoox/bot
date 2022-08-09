import { View } from 'react-native'
import React from 'react'
import Texts from '@/Components/Texts'
import { useStyles } from './styles'
import Circle from '@/Components/Circle'

const HistoryTurn = () => {
  const styles = useStyles()
  const datas = [
    { status: false, time: '10:49:02 05/07/2022', reason: 'Lorem ipsum...' },
    { status: true, time: '10:49:02 05/07/2022', reason: 'Lorem ipsum...' },
    { status: false, time: '10:49:02 05/07/2022', reason: 'Lorem ipsum...' },
    { status: true, time: '10:49:02 05/07/2022', reason: 'Lorem ipsum...' },
    { status: false, time: '10:49:02 05/07/2022', reason: 'Lorem ipsum...' },
    { status: false, time: '10:49:02 05/07/2022', reason: 'Lorem ipsum...' },
    { status: false, time: '10:49:02 05/07/2022', reason: 'Lorem ipsum...' },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Texts style={styles.status}>Trạng thái</Texts>
        <Texts style={styles.time}>Thời gian</Texts>
        <Texts style={styles.reason}>Lý do</Texts>
      </View>

      {datas.map((data, index) => {
        return (
          <View style={styles.item} key={index}>
            <View style={[styles.status, styles.statusItem]}>
              <Circle status={data.status} colorActive='#D31515'/>
              <Texts>{data.status?'Bật':'Tắt'}</Texts>
            </View>
            <Texts style={styles.time}>{data.time}</Texts>
            <Texts style={[styles.reason]}>{data.reason}</Texts>
          </View>
        )
      })}
    </View>
  )
}

export default HistoryTurn