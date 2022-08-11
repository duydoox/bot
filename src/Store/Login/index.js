import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'login',
    initialState: {
        email: '',
        password: '',
        isSecurity: true,
        message: '',
    },
    reducers: {
        changeEmail: (state, { payload }) => {
            state.email = payload
            state.message = ''
        },
        changePassword: (state, { payload }) => {
            state.password = payload
            state.message = ''
        },
        toggleIsSecurity: (state) => {
            state.isSecurity = !state.isSecurity
        },
        checkAndSubmit: (state) => {
            const emailEmpty = state.email.trim() === ''
            const passwordEmpty = state.password.trim() === ''
            if (emailEmpty && passwordEmpty) {
                state.message = 'Email và password không được để trống'
            }
            else if (emailEmpty) {
                state.message = 'Email không được để trống'
            }
            else if (passwordEmpty) {
                state.message = 'Password không được để trống'
            }
            else {
            }
        },
        setMessage: (state, { payload }) => {
            state.message = payload
        },
        submitSuccess: (state, {payload})=>{
            state.message=payload
            state.email=''
            state.password=''
        }
    },
})

export const {
    changeEmail,
    changePassword,
    checkAndSubmit,
    toggleIsSecurity,
    setMessage,
    submitSuccess
} = slice.actions

export default slice.reducer