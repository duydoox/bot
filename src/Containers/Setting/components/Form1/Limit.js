import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { FormInput } from '@/Components'

const Limit = () => {
  const style = styles()
  return (
    <View style={{paddingVertical: 10}}>
      <FormInput
        label='Entry'
        style={style.boxInput}
        styleLabel={style.text}
        styleInput={style.input}
      />
      <FormInput
        label='Target'
        style={style.boxInput}
        styleLabel={style.text}
        styleInput={style.input}
      />
      <FormInput
        label='Stoploss'
        style={style.boxInput}
        styleLabel={style.text}
        styleInput={style.input}
      />
      <FormInput
        label='Sold out'
        style={style.boxInput}
        styleLabel={style.text}
        styleInput={style.input}
      />
      <FormInput
        label='Buy'
        style={style.boxInput}
        styleLabel={style.text}
        styleInput={style.input}
      />
    </View>
  )
}

export default Limit