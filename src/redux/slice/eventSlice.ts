import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DUMMY_EVENT1, DUMMY_EVENT2, INIT_EVENT } from "../../interface/Event";

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
        event:DUMMY_EVENT1,
        eventList:[DUMMY_EVENT1, DUMMY_EVENT2],
        loading:false,
    },
    reducers:{
        setEvent: (state, action)=>{
            state.event = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getEvent.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getEvent.fulfilled, (state, action) => {
            state.eventList = action.payload;
            state.loading = false;
        });
        builder.addCase(getEvent.rejected, (state) => {
            state.loading = false;
        })
    }
})

export const {
    setEvent
} = eventSlice.actions;

export default eventSlice.reducer;