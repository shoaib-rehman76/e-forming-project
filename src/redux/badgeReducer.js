import { createSlice } from "@reduxjs/toolkit";

const badgeSlice = createSlice({
    initialState: {
        isShow: true
    },
    name: 'badge',
    reducers: {
        isShowHandler: (state) => {
            state.isShow = !state.isShow
        }
    }
})

export const { isShowHandler } = badgeSlice.actions
export default badgeSlice.reducer