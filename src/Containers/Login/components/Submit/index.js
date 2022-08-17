import React, { useEffect } from 'react'
import { Button } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLoginMutation } from '@/Services/modules/login'
import { useSelector } from 'react-redux'
import { navigateAndSimpleReset } from '@/Navigators/utils'

const Submit = () => {
    const { Fonts, Common, Gutters, Colors } = useTheme()
    const email = useSelector(state => state.login.email)
    const password = useSelector(state => state.login.password)
    const [login, { isSuccess }] = useLoginMutation()

    const submit = () => {
        // dispatch(checkAndSubmit())
        login({
            email,
            password,
            tfaCode: '111111'
        })
    }

    useEffect(() => {
        if (isSuccess) {
            navigateAndSimpleReset('Wellcome')
        }
    }, [isSuccess])

    return (
        <Button
            title='ĐĂNG NHẬP'
            style={{
                ...Fonts.titleSmall,
                ...Common.button.rounded,
                ...Gutters.largeTMargin,
                ...Fonts.titleRegular,
                color: Colors.primary
            }}
            onPress={submit}
        />
    )
}

export default Submit