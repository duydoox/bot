import { createSlice } from "@reduxjs/toolkit";

const currentDate = new Date().toISOString().slice(0, 10)

const slice = createSlice({
    name: 'market',
    initialState: {
        graph: null, // MARKET_CAP, BET, NO_BET
        date: currentDate,
        job: {},
        notJob: {}
    },
    reducers: {
        changeGraph: (state, { payload }) => {
            state.graph = payload
        },
        changeDate: (state, { payload }) => {
            state.date = new Date(payload).toISOString().slice(0, 10)
        },
        handleJob: (state, { payload: { data, date } }) => {
            const job = {
                new: [],
                fail: [],
                running: [],
                win: [],
                lost: []
            }
            data.data.map(item => {
                if (new Date(item.createdAt).getDate() === new Date(date).getDate()) {
                    job[item.status].push(item)
                }
            })
            console.log(job)
            state.job = job
        },
    }
})

export const { changeGraph, changeDate, handleJob } = slice.actions

export default slice.reducer