import { View, Text } from 'react-native'
import React, { useState, useMemo } from 'react'
import { useStyles } from './styles'
import { Button } from '@/Components'
import Texts from '@/Components/Texts'
import { NoData } from '@/Components/Common'
import { convertDate, convertComma, convertTime } from '@/Util'

const Result = ({ job, notJob }) => {
  const styles = useStyles()
  const [hadResult, setHadResult] = useState(true)
  const setStyleBtn = (bool) => {
    if (hadResult === bool) return { backgroundColor: '#D9D9D9' }
    else return {}
  }

  const datas = useMemo(() => {
    if (!job || !notJob) return []
    const data = hadResult ? [...job.WIN, ...job.LOSE] : notJob.RUNNING
    return data.map(item => (
      {
        name: item.symbol,
        purchasePrice: item.buy.toFixed(3),
        price: item.sellPrice,
        percent: ((item.sellPrice / item.entry1) * 100 - 100).toFixed(3),
        profitAndLoss: ((item.sellPrice / item.entry1) * item.buy - item.buy).toFixed(3),
        time: convertTime(item.createdAt) + ' ' + convertDate(item.createdAt)
      }
    ))
  }, [job, notJob, hadResult])

  // const datas = [
  //   { name: 'LPCUSDT', purchasePrice: '0.406', price: '0.402', percent: -1.009, profitAndLoss: -0.201, time: '10:49:02 05/07/2022' },
  //   { name: 'YFIIUSDT', purchasePrice: '985.7', price: '991.9', percent: 0.6289, profitAndLoss: 0.125799, time: '10:49:02 05/07/2022' },
  //   { name: 'LPCUSDT', purchasePrice: '0.406', price: '0.402', percent: -1.009, profitAndLoss: -0.201, time: '10:49:02 05/07/2022' },
  //   { name: 'LPCUSDT', purchasePrice: '0.406', price: '0.402', percent: -1.009, profitAndLoss: -0.201, time: '10:49:02 05/07/2022' },
  //   { name: 'LPCUSDT', purchasePrice: '0.406', price: '0.402', percent: -1.009, profitAndLoss: -0.201, time: '10:49:02 05/07/2022' },
  // ]

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Button title='Đã có kết quả'
          style={[styles.titleButton, setStyleBtn(true),]}
          onPress={() => setHadResult(true)} />
        <Button title='Chưa có kết quả'
          style={[styles.titleButton, setStyleBtn(false)]}
          onPress={() => setHadResult(false)} />

        {
          !hadResult &&
          <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 10 }}>
            <Button
              title='Bán hết'
              style={{...styles.titleButton, ...styles.priceAll}}
              onPress={()=>{}}
            />
          </View>
        }
      </View>

      <View style={styles.Layout.alignItemsEnd}>
        <Text style={[
          styles.Fonts.textProfit,
          { margin: 5 }
        ]}>Tổng lời/ lỗ: 0,000000</Text>
      </View>

      <View style={styles.headlist}>
        <Texts style={styles.name}>Tên</Texts>
        <Texts style={styles.purchasePrice}>Giá mua</Texts>
        <Texts style={styles.price}>Giá bán</Texts>
        <Texts style={styles.profitAndLoss}>Lời/Lỗ</Texts>
        <Texts style={styles.time}>Thời gian</Texts>
      </View>
      {
        datas && datas.length !== 0 ?
          datas.map((data, index) => (
            <View key={index} style={styles.item}>
              <Texts style={styles.name}>
                {data.name}
              </Texts>
              <Texts style={styles.purchasePrice}>
                {data.purchasePrice}
              </Texts>
              <Texts style={[styles.price, data.percent < 0 ? styles.Fonts.textLoss : styles.Fonts.textProfit]}>
                {`${data.price}\n(${convertComma(data.percent)}%)`}
              </Texts>
              <Texts style={[styles.profitAndLoss, data.profitAndLoss < 0 ? styles.Fonts.textLoss : styles.Fonts.textProfit]}>
                {data.profitAndLoss}
              </Texts>
              <Texts style={styles.time}>
                {data.time}
              </Texts>
            </View>)
          ) :
          // <View><Texts>a</Texts></View>
          <NoData />
      }
    </View>
  )
}

export default Result