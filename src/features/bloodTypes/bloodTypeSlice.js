import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api";

const initialState = {
    bloodTypes: [],
    status: 'idle',
    error: null
};

const bloodTypeSlice = createSlice({
    name: "bloodTypes",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addMatcher(apiSlice.endpoints.getBloodTypes.matchPending, (state, action) => {
                state.status = "loading";
            })
            .addMatcher(apiSlice.endpoints.getBloodTypes.matchFulfilled, (state, action) => {
                state.status = "succeeded";
                state.bloodTypes = action.payload;
            })
            .addMatcher(apiSlice.endpoints.getBloodTypes.matchRejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default bloodTypeSlice.reducer;