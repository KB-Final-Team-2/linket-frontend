import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DUMMY_EVENT_REVIEW, DUMMY_REVIEWWITHEVENT, INIT_REVIEW, RegistReview, Review, ReviewWithEvent, ReviewWithUser } from "../../interface/Review";

export const getReview = createAsyncThunk("getReview", async (reviewId: number, { rejectWithValue }) => {
    try {
        const reviewData = (await axios.get(`/api/getReview/${reviewId}`)).data;
        return reviewData;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const getEventReview = createAsyncThunk("getEventReview", async (eventId:number, {rejectWithValue})=>{
    try {
        // const reviewData : Review = (await axios.get(`/api/review/${eventId}`)).data || INIT_REVIEW;
        const reviewData = INIT_REVIEW;
        return reviewData;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const getReviewList = createAsyncThunk("getReviewLIst", async (email: string, { rejectWithValue }) => {
    try {
        // const reviewList = (await axios.get(`/api/ticket/${userId}`)).data;
        const reviewList : ReviewWithEvent[] = [DUMMY_REVIEWWITHEVENT,DUMMY_REVIEWWITHEVENT,DUMMY_REVIEWWITHEVENT,DUMMY_REVIEWWITHEVENT,DUMMY_REVIEWWITHEVENT];
        return reviewList;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const getEventReviewList = createAsyncThunk("getEventReviewList", async (eventId: number, { rejectWithValue }) => {
    try {
        // const reviewList = (await axios.get(`/api/ticket/event/${eventId}`)).data;
        const eventReviewList = [DUMMY_EVENT_REVIEW, DUMMY_EVENT_REVIEW, DUMMY_EVENT_REVIEW, DUMMY_EVENT_REVIEW];
        return eventReviewList;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const registReview = createAsyncThunk("registReview", async (review: RegistReview, { rejectWithValue }) => {
    try {
        const result = (await axios.post("/api/review/regist", review)).data;
        return result;
    } catch (error) {
        rejectWithValue(error);
    }
})

const reviewSlice = createSlice({
    name: "review",
    initialState: {
        data: INIT_REVIEW,
        list: [] as ReviewWithEvent[],
        eventReviewList : [] as ReviewWithUser[],
        loading: false
    },
    reducers: {
        setReview: (state, action) => {
            state.data = action.payload;
        },
        setReviewList: (state, action) => {
            state.list = action.payload;
        },
        initReview: (state) => {
            state.data = INIT_REVIEW;
            state.list = [];
            state.eventReviewList = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getReview.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getReview.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(getReview.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(getEventReview.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getEventReview.fulfilled, (state, action) => {
            state.data = action.payload || INIT_REVIEW;
            state.loading = false;
        });
        builder.addCase(getEventReview.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(getReviewList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getReviewList.fulfilled, (state, action) => {
            state.list = action.payload!;
            state.loading = false;
        });
        builder.addCase(getReviewList.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(getEventReviewList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getEventReviewList.fulfilled, (state, action) => {
            state.eventReviewList = action.payload!;
            state.loading = false;
        });
        builder.addCase(getEventReviewList.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(registReview.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(registReview.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(registReview.rejected, (state) => {
            state.loading = false;
        });
    }
})

export const {
    setReview,
    setReviewList,
    initReview,
} = reviewSlice.actions;

export default reviewSlice.reducer;