import { Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '@/Store/Auth'
import { Button, FormInput } from '@/Components'

const Login = () => {
  const { NavigationTheme, Common, Gutters, Layout, Fonts, Images, Colors } = useTheme()
  const { colors } = NavigationTheme
  const [isSecurity, setIsSecurity] = useState(true)
  const [account, setAcount] = useState({value: '', message: null})
  const [password, setPassword] = useState({value: '', message: null})
  const dispatch = useDispatch()

  const checkEmpty = (value, setValue, message)=>{
    if(value.trim() === '') {
      setValue(pre=>{
        return {...pre, message}
      })
      return true
    }
    return false
  }

  const submit = () => {
    const accEmpty = checkEmpty(account.value, setAcount, 'account is empty')
    const passEmpty = checkEmpty(password.value, setPassword, 'password is empty')
    if(accEmpty || passEmpty) return
    dispatch(login(true))
    navigateAndSimpleReset('Main')
  }

  return (
    <View
      style={{
        ...Layout.fill,
        ...Layout.alignItemsCenter,
        ...Gutters.largeHPadding,
        backgroundColor: colors.primary
      }}>
      <StatusBar barStyle='light-content' backgroundColor={colors.primary} />

      <View style={Gutters.largeTMargin}>
        <Image source={Images.logo} />
      </View>
      <Text style={[Fonts.titleLarge, Gutters.smallTMargin, { color: Colors.textLogin }]}>MONITOR</Text>
      <View style={[
        Layout.fullWidth,
        Gutters.xlargeTMargin,
      ]}>
        <FormInput
          label='Tên đăng nhập'
          styleLabel={{ color: Colors.textLogin }}
          styleInput={{
            color: Colors.textLogin, fontSize: 17,
            backgroundColor: 'black',
            borderColor: Colors.inputBorderLogin,
            minHeight: 50
          }}
          value={account.value}
          onChangeText={text=>setAcount({value: text, message: null})}
          message = {account.message}
        />
        <FormInput
          label='Mật khẩu'
          style={Gutters.smallTMargin}
          styleLabel={{ color: Colors.textLogin }}
          styleInput={{
            color: Colors.textLogin, fontSize: 17,
            backgroundColor: 'black',
            borderColor: Colors.inputBorderLogin,
            minHeight: 50,
            paddingRight: 5
          }}
          secureTextEntry={isSecurity}
          value={password.value}
          onChangeText={text=>setPassword({value: text, message: null})}
          message = {password.message}
        >
          <TouchableOpacity onPress={() => { setIsSecurity(!isSecurity) }}>
            <Image source={Images.eye} resizeMode={'contain'} />
          </TouchableOpacity>
        </FormInput>

        <View style={[Layout.fullWidth, Layout.alignItemsEnd, { marginTop: 5 }]}>
          <Button 
            title='Quên mật khẩu'
            style={{color: Colors.textLogin, fontSize: 17,}}
          />
        </View>
        <Button
          title='ĐĂNG NHẬP'
          style={{
            ...Fonts.titleSmall, 
            ...Common.button.rounded, 
            ...Gutters.largeTMargin,
            ...Fonts.titleRegular,
            color: colors.primary
          }}
          onPress={submit}
          />
      </View>
    </View>
  )
}

export default Login
