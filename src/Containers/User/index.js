import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { useDispatch } from 'react-redux'
import { resetAuth } from '@/Store/Auth'

const User = () => {
  const dispatch = useDispatch()

  const logout =  () => {
    dispatch(resetAuth())
    navigateAndSimpleReset('Login')
  }
  return (
    <View>
      <Text>User</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  )
}

export default User