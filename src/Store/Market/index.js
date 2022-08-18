import { createSlice } from "@reduxjs/toolkit";

const currentDate = new Date().toISOString().slice(0, 10)

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
            const job = {}
            data.map(item => {
                if (new Date(item.createdAt).getDate() === new Date(date).getDate()) {
                    if (job[item.status] === undefined) {
                        job[item.status] = []
                    }
                    else {
                        job[item.status].push(item)
                    }
                }
            })
            state.job = job
        },
        handleNotJob: (state, { payload: { data, date } }) => {
            const job = {
                total: 0
            }
            data.map(item => {
                if (new Date(item.createdTime).getDate() === new Date(date).getDate()) {
                    if (job[item.status] === undefined) {
                        job[item.status] = []
                    }
                    else {
                        job[item.status].push(item)
                        job.total += 1
                    }

                }
            })
            state.notJob = job
        },
    }
})

export const { changeGraph, changeDate, handleJob, handleNotJob } = slice.actions

export default slice.reducer