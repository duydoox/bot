import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useStyles } from './styles'
import { Button } from '@/Components'
import Texts from '@/Components/Texts'

const Result = () => {
  const styles = useStyles()
  const [hasResult, setHasResult] = useState(true)
  const setStyleBtn = (bool) => {
    if (hasResult === bool) return { backgroundColor: '#D9D9D9' }
    else return {}
  }

  const datas = [
    { name: 'LPCUSDT', purchasePrice: '0.406', price: '0.402', percent: -1.009, profitAndLoss: -0.201, time: '10:49:02 05/07/2022' },
    { name: 'YFIIUSDT', purchasePrice: '985.7', price: '991.9', percent: 0.6289, profitAndLoss: 0.125799, time: '10:49:02 05/07/2022' },
    { name: 'LPCUSDT', purchasePrice: '0.406', price: '0.402', percent: -1.009, profitAndLoss: -0.201, time: '10:49:02 05/07/2022' },
    { name: 'LPCUSDT', purchasePrice: '0.406', price: '0.402', percent: -1.009, profitAndLoss: -0.201, time: '10:49:02 05/07/2022' },
    { name: 'LPCUSDT', purchasePrice: '0.406', price: '0.402', percent: -1.009, profitAndLoss: -0.201, time: '10:49:02 05/07/2022' },
  ]

  const convertComma = (number) => {
    return number.toString().split('.').join(',')
  }

  return (
    <View>
      <View style={styles.title}>
        <Button title='Đã có kết quả'
          style={[styles.titleButton, setStyleBtn(true),]}
          onPress={() => setHasResult(true)} />
        <Button title='Chưa có kết quả'
          style={[styles.titleButton, setStyleBtn(false)]}
          onPress={() => setHasResult(false)} />
      </View>

      <View style={styles.Layout.alignItemsEnd}>
        <Text style={[
          styles.Fonts.textProfit,
          { margin: 5 }
        ]}>Tổng lời/ lỗ: 5,264342</Text>
      </View>

      <View style={styles.headlist}>
        <Texts style={styles.name}>Tên</Texts>
        <Texts style={styles.purchasePrice}>Giá mua</Texts>
        <Texts style={styles.price}>Giá bán</Texts>
        <Texts style={styles.profitAndLoss}>Lời/Lỗ</Texts>
        <Texts style={styles.time}>Thời gian</Texts>
      </View>
      {datas.map((data, index) => (
        <View key={index} style={styles.item}>
          <Texts style={styles.name}>
            {data.name}
          </Texts>
          <Texts style={styles.purchasePrice}>
            {data.purchasePrice}
          </Texts>
          <Texts style={[styles.price, data.percent<0 ? styles.Fonts.textLoss: styles.Fonts.textProfit]}>
            {`${data.price}\n(${convertComma(data.percent)}%)`}
          </Texts>
          <Texts style={[styles.profitAndLoss, data.profitAndLoss<0 ? styles.Fonts.textLoss: styles.Fonts.textProfit]}>
            {data.profitAndLoss}
          </Texts>
          <Texts style={styles.time}>
            {data.time}
          </Texts>
        </View>)
      )}
    </View>
  )
}

export default Result