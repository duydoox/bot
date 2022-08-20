import { createSlice } from "@reduxjs/toolkit";

const currentDate = new Date().toISOString().slice(0, 10)

const getDataJob = (data, status, date) => {
    return data.filter(item => {
        return new Date(item.createdAt).getDate() === new Date(date).getDate()
    }).filter(item =>
        item.status === status)
}

const getDataNotJob = (data, status, date) => {
    return data.filter(item => {
        return new Date(item.createdTime).getDate() === new Date(date).getDate()
    }).filter(item =>
        item.status === status)
}

const slice = createSlice({
    name: 'market',
    initialState: {
        graph: null, // MARKET_CAP, BET, NO_BET
        date: currentDate,
        job: null,
        notJob: null
    },
    reducers: {
        changeGraph: (state, { payload }) => {
            state.graph = payload
        },
        changeDate: (state, { payload }) => {
            state.date = new Date(payload).toISOString().slice(0, 10)
        },
        handleJob: (state, { payload: { data, date } }) => {
            state.job = {
                FAIL: getDataJob(data, 'FAIL', date),
                LOSE: getDataJob(data, 'LOSE', date),
                WIN: getDataJob(data, 'WIN', date),
                NEW: getDataJob(data, 'NEW', date),
            }
        },
        handleNotJob: (state, { payload: { data, date } }) => {
            state.notJob = {
                FAIL: getDataNotJob(data, 'FAIL', date),
                LOSE: getDataNotJob(data, 'LOSE', date),
                WIN: getDataNotJob(data, 'WIN', date),
                NEW: getDataNotJob(data, 'NEW', date),
            }
        },
    }
})

export const { changeGraph, changeDate, handleJob, handleNotJob } = slice.actions

export default slice.reducer