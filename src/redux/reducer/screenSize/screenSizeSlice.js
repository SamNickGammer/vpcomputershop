import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    screen: {
        width: window.screen.width,
        height:window.screen.height,
    }
}

export const screenSizeSlice = createSlice({
    name: 'screenSize',
    initialState,
    reducers : {
        updateScreen: (state, action) => {
            state.screen.width = action.payload.width;
            state.screen.height = action.payload.height;
        }
    },
});

// Need to export our reducer to use in components 
export const {updateScreen} = screenSizeSlice.actions

// Exporting because need to register the value in store to make this update.
export default screenSizeSlice.reducer