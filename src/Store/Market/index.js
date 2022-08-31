import { createSlice } from "@reduxjs/toolkit";

const currentDate = new Date().toISOString().slice(0, 10)

const slice = createSlice({
    name: 'market',
    initialState: {
        graph: null, // MARKET_CAP, BET, NO_BET
        date: currentDate,
        job: null,
        notJob: null,
        test: 'ace'
    },
    reducers: {
        changeGraph: (state, { payload }) => {
            state.graph = payload
        },
        changeDate: (state, { payload }) => {
            state.date = new Date(payload).toISOString().slice(0, 10)
        },
        changeTest: (state, {payload})=>{
            state.test = payload
        }
    }
})

export const { changeGraph, changeDate , changeTest} = slice.actions

export default slice.reducer