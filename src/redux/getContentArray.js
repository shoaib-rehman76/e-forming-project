import { createSlice } from "@reduxjs/toolkit";

const getContentSlice = createSlice({
    initialState: {
        contentArray: []
    },
    name: 'animate-section',
    reducers: {
        getContentArrayHandler: (state, action) => {
            state.contentArray = action.payload;
        }
    }

})
export const { getContentArrayHandler } = getContentSlice.actions
export default getContentSlice.reducer