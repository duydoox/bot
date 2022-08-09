import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'market',
    initialState: {graph: null}, // MARKET_CAP, BET, NO_BET
    reducers: {
        changeGraph: (state, {payload})=>{
            state.graph = payload
        }
    }
})

export const {changeGraph} = slice.actions

export default slice.reducer