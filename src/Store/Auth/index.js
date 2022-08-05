import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'auth',
    initialState: {isLogin: false, page: null},
    reducers: {
        login: (state, {payload}) => {
            state.isLogin = payload
        },
        resetAuth: (state)=>{
            state.isLogin = false
            state.page = null
        },
        setPage: (state, {payload})=>{
            state.page = payload
        }
    }
})

export const {login, setPage, resetAuth} = slice.actions

export default slice.reducer