import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Button } from '@/Components'
import { styles } from './styles'
import { useState } from 'react'
import Form1 from './components/Form1'
import Form2 from './components/Form2'

const Setting = () => {
  const [isActive, setIsActive] = useState('Market')
  const style = styles()

  return (
    <ScrollView style={style.container}
    showsVerticalScrollIndicator={false}>
      <Form1/>
      <Form2/>
    </ScrollView>
  )
}

export default Setting