import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getReview = createAsyncThunk("getReview", async (reviewId: string, {rejectWithValue})=>{
    try {
        const reviewData = (await axios.get(`/api/getReview/${reviewId}`)).data;
        return reviewData;
    } catch (error) {
        rejectWithValue(error);
    }
})

const reviewSlice = createSlice({
    name:"review",
    initialState: {
        data:{},
        loading:false
    },
    reducers:{
        setReview: (state,action) => {
            state.data = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getReview.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(getReview.fulfilled, (state, action)=>{
            state.data=action.payload;
            state.loading = false;
        });
        builder.addCase(getReview.rejected, (state)=>{
            state.data = {};
            state.loading = false;
        })
    }
})

export const {
    setReview
} = reviewSlice.actions;

export default reviewSlice.reducer;