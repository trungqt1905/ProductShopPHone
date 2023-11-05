import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listProduct: []
}

export const counterSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
              
    },
})

// Action creators are generated for each case reducer function
export const { } = counterSlice.actions

export default counterSlice.reducer