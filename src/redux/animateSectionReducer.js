import { createSlice } from "@reduxjs/toolkit";

const animateSectionSlice = createSlice({
    initialState: { isShowAnimateSection: false },
    name: 'animate-section',
    reducers: {
        animateSectionHandler: (state) => {
            state.isShowAnimateSection = !state.isShowAnimateSection
        }
    }

})
export const { animateSectionHandler } = animateSectionSlice.actions
export default animateSectionSlice.reducer