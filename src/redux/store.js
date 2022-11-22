import { configureStore } from "@reduxjs/toolkit";
import badgeSlice from "./badgeReducer";
import animateSectionSlice from './animateSectionReducer'
import getContentArray from "./getContentArray";

const store = configureStore({
    reducer: {
        badge: badgeSlice,
        animateSec: animateSectionSlice,
        content: getContentArray
    }
})

export default store;