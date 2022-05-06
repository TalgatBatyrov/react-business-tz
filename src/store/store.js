import mainSlice from "./mainSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        main: mainSlice
    }
})