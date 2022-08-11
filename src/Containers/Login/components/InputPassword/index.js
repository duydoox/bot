import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { FormInput } from '@/Components'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changePassword } from '@/Store/Login'
import { useTheme } from '@/Hooks'
import { toggleIsSecurity } from '@/Store/Login'

const InputPassword = () => {
  const { Colors, Gutters, Images } = useTheme()
  const password = useSelector(state => state.login.password)
  const isSecurity = useSelector(state => state.login.isSecurity)
  const dispatch = useDispatch()
  return (
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
      value={password}
      onChangeText={text => dispatch(changePassword(text))}
    >
      <TouchableOpacity onPress={() => { dispatch(toggleIsSecurity()) }}>
        <Image source={Images.eye} resizeMode={'contain'} />
      </TouchableOpacity>
    </FormInput>
  )
}

export default InputPassword