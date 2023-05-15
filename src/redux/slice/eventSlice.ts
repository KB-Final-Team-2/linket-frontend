import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getEvent =  createAsyncThunk("getEventState", async (eventId: string, {rejectWithValue})=>{
    try {
        const eventData = (await axios.get(`/api/getEvent/${eventId}`)).data;
        return eventData;
    } catch (error) {
        rejectWithValue(error);
    }
})

const eventSlice = createSlice({
    name:"event",
    initialState: {
        data:{},
        loading:false,
    },
    reducers:{
        setEvent: (state, action)=>{
            state.data = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getEvent.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getEvent.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(getEvent.rejected, (state) => {
            state.data = {};
            state.loading = false;
        })
    }
})

export const {
    setEvent
} = eventSlice.actions;

export default eventSlice.reducer;