import { configureStore } from "@reduxjs/toolkit";
import screenSizeReducer from './reducer/screenSize/screenSizeSlice'

export const store = configureStore({
    reducer : screenSizeReducer
})