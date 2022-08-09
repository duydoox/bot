import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useStyles } from './styles'
import Box from '@/Components/Box'
import { navigate } from '@/Navigators/utils'

const History = () => {
  const styles = useStyles()
  return (
    <Box style={{marginBottom: 14}}>
      <TouchableOpacity style={styles.container} onPress={() => { navigate('History') }}>
        <Text style={styles.text}>Lịch sử bật tắt</Text>
        <Image source={styles.imgNext} resizeMode='contain' />
      </TouchableOpacity>
    </Box>
  )
}

export default History