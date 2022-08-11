import { createSlice } from "@reduxjs/toolkit";
import { api } from "@/Services/api";

const slice = createSlice({
  name: 'auth',
  initialState: { token: null, page: null },
  reducers: {
    resetAuth: (state) => {
      state.token = null
      state.page = null
    },
    setPage: (state, { payload }) => {
      state.page = payload
    },
    updateAuth: (state, {payload}) =>{
      state.token=payload
    }
  },
  // extraReducers: (builder) => {
  //   builder.addMatcher(
  //     api.endpoints.login.matchFulfilled,
  //     (state, { payload }) => {
  //       console.log('payload: ', payload)
  //       state.token = payload.token.accessToken
  //       state.page = null
  //     }
  //   )
  // },
})

export const { setPage, resetAuth, updateAuth } = slice.actions

export default slice.reducer