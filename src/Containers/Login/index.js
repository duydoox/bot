import { Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { Button } from '@/Components'
import InputEmail from './components/InputEmail'
import InputPassword from './components/InputPassword'
import Submit from './components/Submit'
import Message from './components/Message'

const Login = () => {
  const {Gutters, Layout, Fonts, Images, Colors } = useTheme()


  return (
    <View
      style={{
        ...Layout.fill,
        ...Layout.alignItemsCenter,
        ...Gutters.largeHPadding,
        backgroundColor: Colors.primary
      }}>
      <StatusBar barStyle='light-content' backgroundColor={Colors.primary} />

      {/* logo */}
      <View style={Gutters.largeTMargin}>
        <Image source={Images.logo} />
      </View>

      {/* Title */}
      <Text style={[
        Fonts.titleLarge,
        Gutters.smallTMargin,
        { color: Colors.textLogin }]}
      >
        MONITOR
      </Text>

      {/* form input */}
      <View style={[
        Layout.fullWidth,
        Gutters.xlargeTMargin,
      ]}>
        <InputEmail/>
        <InputPassword/>

        <View style={[Layout.fullWidth, Layout.alignItemsEnd, { marginTop: 5 }]}>
          <Button
            title='Quên mật khẩu'
            style={{ color: Colors.textLogin, fontSize: 17, }}
          />
        </View>

        {/* submit */}
        <Submit/>

        {/* message */}
        <Message/>
      </View>
    </View>
  )
}

export default Login
