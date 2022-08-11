import { StyleSheet } from 'react-native'
import React from 'react'
import { FormInput } from '@/Components'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeEmail } from '@/Store/Login'
import { useTheme } from '@/Hooks'

const InputEmail = () => {
    const {Colors} = useTheme()
    const email = useSelector(state=>state.login.email)
    const dispatch = useDispatch()
  return (
    <FormInput
          label='Tên đăng nhập'
          styleLabel={{ color: Colors.textLogin }}
          styleInput={{
            color: Colors.textLogin, fontSize: 17,
            backgroundColor: 'black',
            borderColor: Colors.inputBorderLogin,
            minHeight: 50
          }}
          value={email}
          onChangeText={text => dispatch(changeEmail(text))}     
        />
  )
}

export default InputEmail

const styles = StyleSheet.create({})