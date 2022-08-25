import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { useDispatch } from 'react-redux'
import { resetAuth } from '@/Store/Auth'
import Titles from '@/Components/Titles'
import Icon from '@/Components/Icon'
import { useTheme } from '@/Hooks'
import Seperate from '@/Components/Seperate'
import { useState } from 'react'

const User = () => {
  const [date, setDate] = useState(new Date())
  const dispatch = useDispatch()
  const { Layout } = useTheme()

  const logout = () => {
    dispatch(resetAuth())
    navigateAndSimpleReset('Login')
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.avatar}>
        <Icon
          height={160}
          width={160}
          name='avatar'
          style={{ marginBottom: 10 }} />
        <Titles color={'#000000'}>Nguyễn Văn Anh</Titles>
      </View>

      <TouchableOpacity
        style={[Layout.rowHCenter, styles.distance]}>
        <Icon
          height={16}
          width={16}
          name='i'
          style={styles.icon} />
        <Titles color={'#198CB0'}>Cập nhật thông tin</Titles>
      </TouchableOpacity>

      <TouchableOpacity
        style={[Layout.rowHCenter, styles.distance]}>
        <Icon
          height={16}
          width={16}
          name='key'
          style={styles.icon} />
        <Titles color={'#198CB0'}>Đổi mật khẩu</Titles>
      </TouchableOpacity>

      <Seperate />

      <TouchableOpacity onPress={logout}
        style={[Layout.rowHCenter, styles.distance]}>
        <Icon
          height={14}
          width={16}
          name='logout'
          style={styles.icon} />
        <Titles color={'#6C6C6C'}>Đăng xuất</Titles>
      </TouchableOpacity>
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 45
  },
  avatar: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 55
  },
  distance: {
    paddingVertical: 10
  },
  icon: {
    marginRight: 10
  }
})