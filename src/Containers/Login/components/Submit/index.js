import React, { useEffect } from 'react'
import { Button } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLoginMutation } from '@/Services/modules/login'
import { useDispatch } from 'react-redux'
import { updateAuth } from '@/Store/Auth'
import { useSelector } from 'react-redux'
import { checkAndSubmit, setMessage, changeEmail, changePassword, submitSuccess } from '@/Store/Login'
import { navigateAndSimpleReset } from '@/Navigators/utils'

const Submit = () => {
    const { Fonts, Common, Gutters, Colors } = useTheme()
    const email = useSelector(state => state.login.email)
    const password = useSelector(state => state.login.password)
    const dispatch = useDispatch()
    const [login, { data, isLoading, isSuccess, error }] = useLoginMutation()

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
            dispatch(updateAuth(data.data.token.accessToken))
            dispatch(submitSuccess(data.msg))
            navigateAndSimpleReset('Wellcome')
        }
    }, [isSuccess])

    useEffect(() => {
        if (isLoading) {
            dispatch(setMessage('Loading...'))
        }
        else {
            dispatch(setMessage(''))
        }
    }, [isLoading])

    useEffect(() => {
        if (error) {
            dispatch(setMessage(error.data.msg))
        }
    }, [error])

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