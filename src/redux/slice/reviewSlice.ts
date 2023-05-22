import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DUMMY_REVIEW, INIT_REVIEW } from "../../interface/Review";

export const getReview = createAsyncThunk("getReview", async (reviewId: string, { rejectWithValue }) => {
    try {
        const reviewData = (await axios.get(`/api/getReview/${reviewId}`)).data;
        return reviewData;
    } catch (error) {
        rejectWithValue(error);
    }
})

const reviewSlice = createSlice({
    name: "review",
    initialState: {
        data: INIT_REVIEW,
        list: [DUMMY_REVIEW,DUMMY_REVIEW,DUMMY_REVIEW],
        loading: false
    },
    reducers: {
        setReview: (state, action) => {
            state.data = action.payload;
        },
        setReviewList: (state, action) => {
            state.list = action.payload;
        },
        initReview: (state)=>{
            state.data = INIT_REVIEW;
            state.list = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getReview.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getReview.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        });
        builder.addCase(getReview.rejected, (state) => {
            state.loading = false;
        })
    }
})

export const {
    setReview,
    setReviewList,
    initReview,
} = reviewSlice.actions;

export default reviewSlice.reducer;